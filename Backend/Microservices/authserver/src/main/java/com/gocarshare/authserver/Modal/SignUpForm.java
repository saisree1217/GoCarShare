package com.gocarshare.authserver.Modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpForm {

    private String emailId;
    private String password;
    private String displayName;
}
