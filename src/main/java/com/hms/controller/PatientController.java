package com.hms.controller;



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

import com.hms.custom_exception.ResourceNotFoundException;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Patient;
import com.hms.service.PatientService;


@RequestMapping("/patient")
@RestController
@CrossOrigin(origins = "*" ,allowedHeaders = "*")
public class PatientController {
	@Autowired
	private PatientService patientServiceImp;

	@PostMapping("/register")
	public ResponseEntity<?> registerPatient(@RequestBody RegisterDto patientDetails) {
		try {
			return new ResponseEntity<>(patientServiceImp.registerPatient(patientDetails), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("")
	public ResponseEntity<?> getAllPatient() {
		try {
			return new ResponseEntity<>(patientServiceImp.getAllPatients(), HttpStatus.OK);

		} catch (RuntimeException e) {
			e.printStackTrace();
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
      try {
		patientDetails.setId(pid);
       return new ResponseEntity<>(patientServiceImp.updatePatient(patientDetails),HttpStatus.OK);
      }catch(RuntimeException e) {
    	  e.printStackTrace();
    	  return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      
      }
	}

}





























