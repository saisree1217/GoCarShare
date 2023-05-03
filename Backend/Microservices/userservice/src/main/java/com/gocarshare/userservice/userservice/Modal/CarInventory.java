package com.gocarshare.userservice.userservice.Modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collation = "CarInventory")
public class CarInventory {

    @Id
    private String id;

    private String make;
    private String model;
    private int year;
    private List<String> bodyStyles;
}
