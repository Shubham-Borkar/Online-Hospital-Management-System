package com.hms.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.ApiResponse;
import com.hms.dto.LoginDto;
import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;
import com.hms.service.EntryService;




@RestController
@RequestMapping("/entry")
@CrossOrigin("*")
public class EntryContoller {
	@Autowired
	private EntryService loginServiceImp;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginDto user) {
		Entry validUser = loginServiceImp.authenticate(user.getEmail(), user.getPassword());
		if (validUser != null) {
			return new ResponseEntity<>(new ApiResponse("Valid"), HttpStatus.OK);
		}
    	return new ResponseEntity<>(new ApiResponse("InValid"), HttpStatus.UNAUTHORIZED);
	}

	@PutMapping("update/{email}/{password}/{role}")
	public ResponseEntity<?> forgotPassword(@PathVariable String email,
			@PathVariable String password, @PathVariable String role) {
		
		Entry updatedUser = loginServiceImp.updateEntry(email, password, role);
		if (updatedUser == null)
			return new ResponseEntity<>(new ApiResponse("User with Email Doesn't Exist"),HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(updatedUser);
	}
	@GetMapping("/dremail/{email}")
	public ResponseEntity<?> getDocByEmail(@PathVariable String email){
		Doctor doctor = loginServiceImp.findDocByEmail(email);
		if(doctor==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(doctor);
	}
	
	@GetMapping("/ptemail/{email}")
	public ResponseEntity<?> getuserByEmail(@PathVariable String email){
		Patient user = loginServiceImp.FindPatientByEmail(email);
		if(user==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}

}
