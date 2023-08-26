package com.hms.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.LoginDto;
import com.hms.dto.SigninResponse;
import com.hms.jwt_utils.JwtUtils;
import com.hms.service.AdminStaffService;
import com.hms.service.DoctorService;
import com.hms.service.EntryServiceImp;
@CrossOrigin("*")
@RestController
@RequestMapping("/hms")
public class AuthController {
//dep :
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;
	@Autowired
	private DoctorService dSer;
	@Autowired
	private EntryServiceImp eSer;
	

	/*
	 * request payload : Auth req DTO : email n password resp payload : In case of
	 * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
	 * 401
	 */
	@PostMapping("/authenticate")
	public ResponseEntity<?> signIn(@RequestBody LoginDto request) { //@Valid 
		System.out.println("Inside Signin");
		System.out.println("in sign in " + request);
		 String genrole=eSer.findRoleByEmail(request.getEmail());		
		// invoke autheticate(...) of Authenticate for auth
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		// generate JWT
		String jwtToken = utils.generateJwtToken(principal);
		return ResponseEntity.ok(
				new SigninResponse(jwtToken, "User authentication success!!!",genrole));
	}
}
