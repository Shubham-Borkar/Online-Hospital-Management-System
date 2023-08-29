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
import com.hms.dto.EmailDetails;
import com.hms.pojos.Appointment;
import com.hms.service.AppointService;
import com.hms.service.EmailService;


@RestController
@RequestMapping("/appointment")
@CrossOrigin("*")
public class AppointmentController {
	@Autowired
	private AppointService appointmentImp;
	
	@Autowired
	private EmailService emailService;

	@PostMapping("/addappointment")
	public ResponseEntity<?> addAppointment(@RequestBody AddAppDto appointmentDetails) {

		System.out.println(appointmentDetails);
	
			Appointment app = appointmentImp.addAppointment(appointmentDetails);
			if(app==null)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Error"));
			else {
				String type="Hospital";
				if(appointmentDetails.getDid()==0) type="General Health Checkup";
				String body="Dear User,\r\n"
						+ "\r\n"
						+ "This is to inform you that your "+type+ " Appointment has been scheduled for Date "+appointmentDetails.getApointdate()+ " for Time Slot "+appointmentDetails.getSlot()+ ". Please take note of the date and time, and ensure your availability.\r\n"
						+ "\r\n"
						+ "Thank you,"
						+ "\r\n"
						+ "MARS HOSPITAL";
				EmailDetails edetails=new EmailDetails("vedantborkar29@gmail.com", body, "MARS Hospital, Appointment Scheduled !!!");
			return new ResponseEntity<>(emailService.sendSimpleMail(edetails),HttpStatus.CREATED);
			}
	
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
	@PostMapping("/updatestatus/{aid}")
	public ResponseEntity<?> updatestatus(@PathVariable int aid) {	
			boolean s = appointmentImp.changeStatus(aid);
			if(s==false)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Error while changing Status"));
			return new ResponseEntity<>(new ApiResponse("Status Updated"),HttpStatus.OK);
	
	}
	@PostMapping("/editprescription/{aid}/{pre}")
	public ResponseEntity<?> editprescription(@PathVariable int aid,@PathVariable String pre) {
	
			String s = appointmentImp.editprescription(aid,pre);
			if(s==null)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Error finding Appointment by id"));
			return new ResponseEntity<>(new ApiResponse(pre),HttpStatus.OK);
	
	}


}
