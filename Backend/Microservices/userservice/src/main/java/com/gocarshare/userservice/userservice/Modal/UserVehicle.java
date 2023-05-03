package com.gocarshare.userservice.userservice.Modal;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Document(collation = "UserRegisteredVehicles")
public class UserVehicle extends Vehicle{

    @Id
    private String _id;

    @NonNull
    private String inventoryId;

    private String ownerId;
    private String availabilityStatus; // Listed, UnListed, Reserved, Commuting

    private boolean disabled;

    private String bodyStyle;
    private String capacity;
    private String color;

    private Date registeredOn = new Date();
}
