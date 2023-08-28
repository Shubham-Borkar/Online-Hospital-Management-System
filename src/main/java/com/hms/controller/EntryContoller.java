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
import com.hms.dto.EmailDetails;
import com.hms.dto.LoginDto;
import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;
import com.hms.service.EmailService;
import com.hms.service.EntryService;




@RestController
@RequestMapping("/entry")
@CrossOrigin(origins = "*" ,allowedHeaders = "*")
public class EntryContoller {
	@Autowired
	private EntryService loginServiceImp;
	
	@Autowired
	private EmailService emailService;
	
	@GetMapping("/getotp/{email}")
	public ResponseEntity<?> getOtp(@PathVariable String email){
		Entry entry = loginServiceImp.findAnyUserByEmail(email);
		if(entry==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		else {
			int random=(int) (Math.random() * (900000)) + 100000;
			String body="OTP to Reset the Password "+String.valueOf(random);
			EmailDetails edetails=new EmailDetails("vedantborkar29@gmail.com",body,"OTP to Reset the Password");
			emailService.sendSimpleMail(edetails);
		return ResponseEntity.ok(random);
		}
	}

	@PutMapping("update/{email}/{password}")
	public ResponseEntity<?> forgotPassword(@PathVariable String email,
			@PathVariable String password) {
		
		Entry updatedUser = loginServiceImp.updateEntryCred(email, password);
		if (updatedUser == null)
			return new ResponseEntity<>(new ApiResponse("User with Email Doesn't Exist"),HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(new ApiResponse("Credentials Updated"));
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
