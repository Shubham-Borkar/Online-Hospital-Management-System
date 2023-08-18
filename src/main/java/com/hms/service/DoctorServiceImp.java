package com.hms.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.custom_exception.ResourceNotFoundException;
import com.hms.dao.AppointDao;
import com.hms.dao.DoctorDao;
import com.hms.dao.StaffDao;
import com.hms.dto.DoctorDto;
import com.hms.pojos.Appointment;
import com.hms.pojos.Doctor;
import com.hms.pojos.Staff;



@Service
public class DoctorServiceImp implements DoctorService {
	@Autowired
	private DoctorDao dDao;
	@Autowired
	private AppointDao aDao;
	
	@Autowired
	private StaffDao sDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<DoctorDto> getAllDoctors() {
		List<Doctor> alldoc = dDao.findAll();
		List<DoctorDto> dtolist=new ArrayList<DoctorDto>();
		if(alldoc!=null) {
		for (Doctor doctor : alldoc) {
			Staff staff = doctor.getStaff();
			DoctorDto mapped = mapper.map(staff,DoctorDto.class);
			mapped.setEducation(doctor.getEducation());
			mapped.setSpeciality(doctor.getSpeciality());
			mapped.setId(doctor.getId());
			dtolist.add(mapped);
		}
		return dtolist;
		}
		return null;
	}

	@Override
	public DoctorDto getDoctorbyId(int id) {
 		Doctor docentity=dDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid Doctory id"));
 		if(docentity!=null) {
 			Staff staff = docentity.getStaff();
 			DoctorDto mapped = mapper.map(staff, DoctorDto.class);
			mapped.setEducation(docentity.getEducation());
			mapped.setSpeciality(docentity.getSpeciality());
			mapped.setId(docentity.getId());
			return mapped;
 		}
		return null;
	}

	@Override
	public DoctorDto getdoctorByAppointmentId(int aid) {
		Appointment appentity=aDao.findById(aid).orElseThrow(()->new ResourceNotFoundException("Invalid Appointment ID"));
		System.out.println(appentity);
		Doctor doctor=appentity.getDoctor();
		if(doctor!=null) {		
		Staff staff=appentity.getDoctor().getStaff(); 
		DoctorDto mapped = mapper.map(staff, DoctorDto.class);
		mapped.setEducation(doctor.getEducation());
		mapped.setSpeciality(doctor.getSpeciality());
		mapped.setId(doctor.getId());
		return mapped;
		}
		return null;
	}

}
