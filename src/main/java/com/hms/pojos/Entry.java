package com.hms.pojos;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@JsonIgnore
	@Column(name = "Password", length = 255)
	private String password;
	
//	@Enumerated(EnumType.STRING)
//	@Column(length = 50)
//	private UserRole role;
	
	@Column(length = 50)
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
	
	

}
