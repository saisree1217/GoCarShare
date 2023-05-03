package com.gocarshare.userservice.userservice.Modal;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CarSearchResult {
    private String make;
    private String model;
    private int year;
    private List<String> body_styles;
    private String model_id;
}
