package com.hms.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginDto {
	@Email
	private String email;
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$",
			message="Password must have one digit, one lower case alphabet,\n"
					+ "one upper case alphabet,one special character for eg(@#$%^&-+=()) \n"
					+ "and 8 to 20 characters with no white spaces")
	private String password;
}
