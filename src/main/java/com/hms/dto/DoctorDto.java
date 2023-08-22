package com.hms.dto;

import java.time.LocalDate;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class DoctorDto {
	    private Integer id;
		private String name;
		private String gender;
		private String address;
		private LocalDate dob;
		private long phone;
		private String education;
	    private String speciality;

}
