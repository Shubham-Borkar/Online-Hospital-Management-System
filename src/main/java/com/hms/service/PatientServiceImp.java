package com.hms.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hms.custom_exception.ApiException;
import com.hms.custom_exception.ResourceNotFoundException;
import com.hms.dao.EntryDao;
import com.hms.dao.PatientDao;
import com.hms.dto.ApiResponse;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;



@Service
public class PatientServiceImp implements PatientService {
	@Autowired
	private PatientDao pDao;
	@Autowired
	private EntryDao lDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder passwordEncoder;
	

	


	@Override
	public RegisterDto registerPatient(RegisterDto patientDetails) {
		if(lDao.findByEmail(patientDetails.getEmail()).isPresent())
		return null;
		Patient pdetails=mapper.map(patientDetails, Patient.class);
		Entry edetails=mapper.map(patientDetails, Entry.class);
		Patient psaved=null;
		Entry save =null;
		 try {
		//adding patient details in patient table
		psaved = pDao.save(pdetails);
		//adding patient into in Entry entity as id is auto genrated which is required in entry table
		edetails.setPatient(psaved);
		edetails.setRole("ROLE_PATIENT");
		edetails.setPassword(passwordEncoder.encode(edetails.getPassword()));

		//adding Entry details in Entry/login table
		save = lDao.save(edetails);
		 }
		 catch(Exception e){
         if(psaved!=null)
        	 pDao.delete(pdetails);
         if(save!=null)
        	 lDao.delete(save);
        
     	return null; 
		 }
		 return patientDetails;
	
				
	}
	
	@Override
	public List<Patient> getAllPatients() {
		return pDao.findAll();
	}

	@Override
	public Optional<Patient> getPatientById(int id) {
		return pDao.findById(id);
	}

	@Override
	public Patient updatePatient(Patient patient) {
		if(pDao.findById(patient.getId()).isEmpty())
			return null;
		return pDao.save(patient);

	}

	
	

}
