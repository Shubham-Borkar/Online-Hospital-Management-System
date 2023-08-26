package com.hms.dto;

import java.time.LocalDate;
import java.util.Date;

import com.hms.pojos.Doctor;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class RegisterDto {
	//user
//	"email": "string",
//	  "password": "string",
	
	//patient
//	 "name": "string",
//	    "gender": "string",
//	    "dob": "2023-08-17T11:32:41.223Z",
//	    "phone": 0,
//	    "address": "string"
	private String name;
	private String gender;
	private LocalDate dob;
	private long phone;
	private String address;
	
    private String email;
	private String password;
	private String role;

}
