package com.gocarshare.userservice.userservice.Modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FirebaseSignInResponse {

    private String kind;
    private  String localId;
    private String email;
    private String displayName;
    private String idToken;
    private String registered;
}
