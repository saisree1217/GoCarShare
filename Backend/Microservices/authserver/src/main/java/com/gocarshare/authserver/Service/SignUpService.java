package com.gocarshare.authserver.Service;

import com.gocarshare.authserver.Configurations.RestUtil;
import com.gocarshare.authserver.Modal.FirebaseSignInResponse;
import com.google.firebase.auth.*;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class SignUpService {

    @Autowired private UserService userService;

    private final String AUTH_PROVIDER_URL = "https://identitytoolkit.googleapis.com/v1/";
    private final String API_KEY = "AIzaSyC56SglzAk_PH9Nut0fO_gvJoDff8PGS9I";

    public UserRecord signup(String emailId, String password, String displayName) throws FirebaseAuthException, ExecutionException, InterruptedException {

        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();

        UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest();
//        createRequest.setDisabled(Boolean.TRUE);
        createRequest.setEmailVerified(Boolean.FALSE);
        createRequest.setEmail(emailId);
        createRequest.setPassword(password);
        createRequest.setDisplayName(displayName);

        createRequest.setEmailVerified(Boolean.TRUE);

        UserRecord record = firebaseAuth.createUser(createRequest);

        ActionCodeSettings actionCodeSettings = ActionCodeSettings
                .builder()
                .setUrl("https://localhost:4200?client=1")
                .build();

        String link = firebaseAuth.generateEmailVerificationLink(emailId, actionCodeSettings);
        System.out.println("Link " +link);

        userService.createUserInMongoDb(record);

        return record;
    }

    public Object signIn(String emailId, String password) throws URISyntaxException, IOException {


        URIBuilder uriBuilder = new URIBuilder(AUTH_PROVIDER_URL + "accounts:signInWithPassword");
        uriBuilder.setParameter("key", API_KEY);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("email", emailId);
        requestBody.put("password", password);
        requestBody.put("returnSecureToken", true);

        FirebaseSignInResponse resp = RestUtil.post(
                uriBuilder.toString(),
                requestBody,
                FirebaseSignInResponse.class
        );

        return resp;
        // use idToken and refreshToken as needed
    }

    public Object validateTOken(String token) throws FirebaseAuthException {
        FirebaseAuth auth = FirebaseAuth.getInstance();

        FirebaseToken fbtoken = auth.verifyIdToken(token);

        return fbtoken.getEmail();
    }
}
