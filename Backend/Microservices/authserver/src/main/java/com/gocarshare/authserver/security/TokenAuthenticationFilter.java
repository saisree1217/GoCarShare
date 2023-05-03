package com.gocarshare.authserver.security;

import com.gocarshare.authserver.Modal.User;
import com.google.auth.Credentials;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class TokenAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private SecurityService securityService;

    @Autowired private FirebaseAuth firebaseAuth;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        authorize(request);
        filterChain.doFilter(request, response);
    }

    private void authorize(HttpServletRequest request) {
        String sessionCookieValue = null;
        FirebaseToken decodedToken = null;

        // Token verification
        String token = securityService.getBearerToken(request);
        try {
            if (token != null) {
                decodedToken = firebaseAuth.verifyIdToken(token);
            }
        } catch (FirebaseAuthException e) {
            logger.error("Firebase Exception:: ");
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        User user = firebaseTokenToUserDto(decodedToken);
        // Handle roles
        if (user != null) {
            // Handle Super Role
//            if (securityProps.getSuperAdmins().contains(user.getEmail())) {
//                if (!decodedToken.getClaims().containsKey(RoleConstants.ROLE_SUPER)) {
//                    try {
//                        securityRoleService.addRole(decodedToken.getUid(), RoleConstants.ROLE_SUPER);
//                    } catch (Exception e) {
//                        log.error("Super Role registeration expcetion ", e);
//                    }
//                }
//                authorities.add(new SimpleGrantedAuthority(RoleConstants.ROLE_SUPER));
//            }
            // Handle Other roles
            decodedToken.getClaims().forEach((k, v) -> authorities.add(new SimpleGrantedAuthority(k)));
            // Set security context
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user,
                    new Credentials() {
                        @Override
                        public String getAuthenticationType() {
                            return "ID_TOKEN";
                        }

                        @Override
                        public Map<String, List<String>> getRequestMetadata(URI uri) throws IOException {
                            return null;
                        }

                        @Override
                        public boolean hasRequestMetadata() {
                            return false;
                        }

                        @Override
                        public boolean hasRequestMetadataOnly() {
                            return false;
                        }

                        @Override
                        public void refresh() throws IOException {

                        }
                    }, authorities);
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
    }

    private User firebaseTokenToUserDto(FirebaseToken decodedToken) {
        User user = null;
        if (decodedToken != null) {
            user = new User();
            user.set_id(decodedToken.getUid());
            user.setDisplayName(decodedToken.getName());
            user.setEmail(decodedToken.getEmail());
            user.setPicture(decodedToken.getPicture());
            user.setIssuer(decodedToken.getIssuer());
            user.setEmailVerified(decodedToken.isEmailVerified());
        }
        return user;
    }
}
