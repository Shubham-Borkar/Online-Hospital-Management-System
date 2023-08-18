package com.hms.pojos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Credentials {
	private String email;
	private String password;
	private String role;
	
	
	public Credentials() {
		this("","","");
	}
	
	
	public Credentials(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + ", role=" + role + "]";
	}
	
}
//
//public String getRole() {
//	return role;
//}
//
//
//public void setRole(String role) {
//	this.role = role;
//}
//
//
//public String getEmail() {
//	return email;
//}
//public void setEmail(String email) {
//	this.email = email;
//}
//public String getPassword() {
//	return password;
//}
//public void setPassword(String password) {
//	this.password = password;
//}
