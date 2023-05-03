package com.gocarshare.userservice.userservice.Services;

import com.gocarshare.userservice.userservice.Modal.UserVehicle;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleRegistrationService {

    @Autowired
    MongoTemplate mongoTemplate;

    public UserVehicle registerVehicle(String userId, UserVehicle userVehicle){

        userVehicle.setAvailabilityStatus("UN_LISTED");
        userVehicle.setOwnerId(userId);
        userVehicle.setDisabled(Boolean.FALSE);

        return mongoTemplate.insert(userVehicle, "UserRegisteredVehicles");

    }

    public JSONObject getUserVehicles(String userId){

        Query query = Query.query(Criteria.where("ownerId").is(userId));

        List<UserVehicle> result = mongoTemplate.find(query, UserVehicle.class, "UserRegisteredVehicles");
        result = result.stream()
                .sorted(Comparator.comparing(UserVehicle::getRegisteredOn)
                        .reversed())
                .collect(Collectors.toList());

        JSONObject json = new JSONObject();
        json.put("userId", userId);
        json.put("total", result.size());
        json.put("registeredVehicles", result);
        return json;
    }

}
