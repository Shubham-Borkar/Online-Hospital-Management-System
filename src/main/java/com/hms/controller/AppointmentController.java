package com.hms.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

import com.hms.dto.AddAppDto;
import com.hms.dto.ApiResponse;
import com.hms.pojos.Appointment;
import com.hms.service.AppointService;
import com.hms.service.AppointServiceImp;


@RestController
@RequestMapping("/appointment")
@CrossOrigin("*")
public class AppointmentController {
	@Autowired
	private AppointService appointmentImp;

	@PostMapping("/addappointment")
	public ResponseEntity<?> addAppointment(@RequestBody AddAppDto appointmentDetails) {

		System.out.println(appointmentDetails);
	
			Appointment app = appointmentImp.addAppointment(appointmentDetails);
			if(app==null)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Error"));
			return new ResponseEntity<>(app,HttpStatus.CREATED);
	
	}

	@GetMapping("/patient/{pid}")
	public ResponseEntity<?> showAppointmentByPid(@PathVariable int pid) {
		List<Appointment> list = appointmentImp.AppointmentsByPid(pid);
		if (list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/get/{date}")
	public ResponseEntity<?> showAppointmentByDate(@PathVariable String date) {
	    LocalDate datef= LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		List<Appointment> list = appointmentImp.appointmentByDate(datef);
		if (list == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		return ResponseEntity.ok(list);
	}
	@GetMapping("/getAppList/{date}/{did}")
	public ResponseEntity<?> showAppointmentByDate(@PathVariable String date,@PathVariable int did) {
	    LocalDate datef= LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		List<Appointment> list = appointmentImp.appointmentByDateAndDoctor(datef,did);
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
	@GetMapping("/appSlotList/{did}/{date}")
	public ResponseEntity<?> getAppSlotByDate(@PathVariable String date,@PathVariable int did) {
		LocalDate datef= LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		List<String> list = appointmentImp.slotTimeList(datef,did);
		return ResponseEntity.ok(list);
	}


}
