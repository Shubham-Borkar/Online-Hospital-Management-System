package com.hms.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {
	    private Integer id;
	    @NotEmpty(message="Name must not be Empty")
	    @Size(min=2,max=40,message="Name must be between 2 and 40 characters")
		private String name;
	    @NotEmpty(message="Gender must not be Empty")
		private String gender;
		private LocalDate dob;
		private long phone;
		private String address;
	    
		
		private String education;
	    private String speciality;
	    @JsonProperty(access=Access.READ_ONLY)
	    private int staffid;

}
