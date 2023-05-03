package com.gocarshare.authserver.Modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.N;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiclesResponse {

    private String userId;
    private int total;
    private List<UserVehicle> userVehicles;

}
