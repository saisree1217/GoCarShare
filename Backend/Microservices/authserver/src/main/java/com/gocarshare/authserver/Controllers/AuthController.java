package com.gocarshare.authserver.Controllers;

import com.gocarshare.authserver.Modal.SignUpForm;
import com.gocarshare.authserver.Service.SignUpService;
import com.gocarshare.authserver.Service.UserService;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired private UserService userService;

    @Autowired private SignUpService signUpService;



    @PostMapping("/singUp")
    public Object singUp(@RequestBody SignUpForm form)
            throws ExecutionException, FirebaseAuthException, InterruptedException {

        return signUpService.signup(form.getEmailId(), form.getPassword(), form.getDisplayName());

    }

    @PostMapping("/signIn")
    public Object singIn(@RequestParam String emailId,
                         @RequestParam String password) throws URISyntaxException, IOException {

        return signUpService.signIn(emailId, password);

    }

    @GetMapping("/test")
    public Object test(){
        return "";
    }

}
