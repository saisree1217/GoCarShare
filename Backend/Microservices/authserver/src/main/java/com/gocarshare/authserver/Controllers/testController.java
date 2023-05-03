package com.gocarshare.authserver.Controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class testController {

    @GetMapping("/protected-resources")
    public String test(){
        return "ProtectedResources";
    }
}
