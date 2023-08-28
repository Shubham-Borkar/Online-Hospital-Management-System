package com.hms.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.hms.pojos.Doctor;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class RegisterDto {
    @NotEmpty(message="Name must not be Empty")
    @Size(min=2,max=40,message="Name must be between 2 and 40 characters")
	private String name;
    @NotEmpty(message="Gender must not be Empty")
	private String gender;
	private LocalDate dob;
	private long phone;
	private String address;
	@Email
    private String email;
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$",
			message="Password must have one digit, one lower case alphabet,\n"
					+ "one upper case alphabet,one special character for eg(@#$%^&-+=()) \n"
					+ "and 8 to 20 characters with no white spaces")
	private String password;
	private String role;

}
