package com.gocarshare.authserver.Modal;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@Document(collection = "UserRegisteredVehicles")
public class UserVehicle{

    @Id
    private String _id;

    private String inventoryId;

    private String make;
    private String model;
    private int year;

    private String ownerId;
    private String availabilityStatus; // Listed, UnListed, Reserved, Commuting

    private boolean disabled;

    private String bodyStyle;
    private String capacity;
    private String color;

    private Date registeredOn = new Date();
}
