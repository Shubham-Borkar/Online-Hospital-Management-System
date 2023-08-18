package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.DoctorDto;
import com.hms.service.DoctorService;



@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
	private DoctorService doctorImp;
    
    @GetMapping("")
	public ResponseEntity<?> getAllDoctors()
	{
	List<DoctorDto> list=doctorImp.getAllDoctors();
	if(list==null)
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	return ResponseEntity.ok(list);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findDoctorById(@PathVariable int id)
	{
        DoctorDto  doctor=doctorImp.getDoctorbyId(id);
		System.out.println(doctor);
		if(doctor==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(doctor);
	}
	
	@GetMapping("/aid/{aid}")
	public ResponseEntity<?> getDoctorDetailsByAid(@PathVariable int aid)
	{
		DoctorDto doctor=doctorImp.getdoctorByAppointmentId(aid);
		if (doctor==null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(doctor);
	}
	

    
}
