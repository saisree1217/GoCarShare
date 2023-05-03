package com.gocarshare.userservice.userservice.Modal;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Data
@Document(collection = "Users")
public class User implements Serializable {

    private static final long serialVersionUID = 4408418647685225829L;

    @Id
    private String _id;
    private String displayName;
    private String email;
    private boolean isEmailVerified;
    private String issuer;
    private String picture;
    private List<String> roles;
    private String userType;
}
