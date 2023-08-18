package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.pojos.Appointment;
import com.hms.service.AppointService;
import com.hms.service.AppointServiceImp;


@RestController
@RequestMapping("/appointment")
@CrossOrigin("*")
public class AppointmentController {
	@Autowired
	private AppointService appointmentImp;

	@PostMapping("/add/{pid}/{did}")
	public ResponseEntity<?> addAppointment(@PathVariable int pid, @PathVariable int did,
			@RequestBody Appointment appointmentDetails) {

		System.out.println(appointmentDetails);
		try {
			Appointment app = appointmentImp.addAppointment(appointmentDetails, pid, did);
			return new ResponseEntity<>(app,HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/patient/{pid}")
	public ResponseEntity<?> showAppointmentByPid(@PathVariable int pid) {
		List<Appointment> list = appointmentImp.AppointmentsByPid(pid);
		if (list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	
	@DeleteMapping("/delete/{aid}")
	public ResponseEntity<?> cancelAppointment(@PathVariable int aid) {
		appointmentImp.deleteAppointment(aid);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("")
	public ResponseEntity<?> findAllAppointment() {
		List<Appointment> list = appointmentImp.allAppointment();
		if (list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}

	@GetMapping("/doctor/{did}")
	public ResponseEntity<?> getAllAppointmentByDoctorId(@PathVariable int did) {
		List<Appointment> list = appointmentImp.appointmentByDoctor(did);
		if (list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}


}
