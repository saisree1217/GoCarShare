package com.gocarshare.userservice.userservice.Exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@Data
public class ExceptionResponse extends RuntimeException {
    private int code;
    private String message;
}
