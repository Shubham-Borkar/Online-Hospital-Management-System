package com.hms.service;

import java.util.List;
import java.util.Optional;

import com.hms.dto.DoctorDto;
import com.hms.pojos.Doctor;
import com.hms.pojos.Staff;



public interface DoctorService {

	List<DoctorDto> getAllDoctors();
	
	DoctorDto getDoctorbyId(int id);
	
	DoctorDto getdoctorByAppointmentId(int aid);
	

}
