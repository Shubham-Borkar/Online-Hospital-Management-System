package com.hms.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.hms.dto.ApiResponse;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;



public interface PatientService {
	
	
	RegisterDto registerPatient(RegisterDto patientDetails);
	
	List<Patient> getAllPatients();

	Optional<Patient> getPatientById(int id);

	Patient updatePatient(Patient patient);
}
