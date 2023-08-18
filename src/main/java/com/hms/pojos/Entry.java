package com.hms.pojos;

//import java.util.Collections;
//import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "login")
public class Entry extends BaseClass {

	@Column(name = "Email", length = 30,unique = true)
	private String email;
	
	@Column(name = "Password", length = 30)
	private String password;
	
	private String role;
 
	@OneToOne
	@JsonBackReference//(value = "user-doctor")//omitted for serialization to avoid sof
	@JoinColumn(name = "docId")
	private Doctor doctor;
	
	@OneToOne
	@JoinColumn(name = "patId")
	private Patient patient;
	
	@OneToOne
	@JsonBackReference //(value = "user-staff")
	@JoinColumn(name = "sId")
	private Staff staff;

	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + ", role=" + role + "]";
	}
//	public User toUser() {
//		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role);
//		User user = new User(email, password, 
//				Collections.singletonList(authority));
//		return user;
//	}
	
	

}
