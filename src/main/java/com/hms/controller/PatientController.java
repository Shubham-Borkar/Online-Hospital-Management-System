package com.hms.controller;



import java.io.IOException;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hms.custom_exception.ResourceNotFoundException;
import com.hms.dto.ApiResponse;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Patient;
import com.hms.service.ImageService;
import com.hms.service.PatientService;
import static org.springframework.http.MediaType.*;


@RequestMapping("/patient")
@RestController
@CrossOrigin(origins = "*" ,allowedHeaders = "*")
public class PatientController {
	@Autowired
	private PatientService patientServiceImp;
	@Autowired
	private ImageService imageServiceImp;

	@PostMapping(value="/uploadimage/{pid}", consumes = "multipart/form-data")
	public ResponseEntity<?> registerPatient( @PathVariable int pid,@RequestParam MultipartFile imageFile) throws IOException  {
		try {
			return new ResponseEntity<>(imageServiceImp.uploadImageP(pid, imageFile), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/get_image/{pid}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable int pid) throws IOException {
		return ResponseEntity.ok(imageServiceImp.downloadImageP(pid));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerPatient(@RequestBody RegisterDto patientDetails) {
	 RegisterDto rsaved=patientServiceImp.registerPatient(patientDetails);
			
	 if(rsaved!=null)
	 return new ResponseEntity<>(new ApiResponse("Registration Sucessful"), HttpStatus.CREATED);
	 return new ResponseEntity<>(new ApiResponse("Registration Failed,User with Email Exist"), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	@GetMapping("")
	public ResponseEntity<?> getAllPatient() {
		try {
			return new ResponseEntity<>(patientServiceImp.getAllPatients(), HttpStatus.OK);

		} catch (RuntimeException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/{pid}")
	public ResponseEntity<?> getPatientById(@PathVariable int pid) {
		Patient patient = patientServiceImp.getPatientById(pid).orElseThrow(()->new ResourceNotFoundException("Invalid Pid"));
		if (patient!=null)
			return ResponseEntity.ok(patient);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

	@PutMapping("/{pid}")
	public ResponseEntity<?> updatePatientDetails(@PathVariable int pid, @RequestBody Patient patientDetails) {
		patientDetails.setId(pid);
		Patient patientupdated=patientServiceImp.updatePatient(patientDetails);
		if (patientupdated!=null)
			return ResponseEntity.ok(patientupdated);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}





























