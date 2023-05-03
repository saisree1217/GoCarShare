package com.gocarshare.userservice.userservice.Modal;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {

    private String make;
    private String model;
    private int year;
}
