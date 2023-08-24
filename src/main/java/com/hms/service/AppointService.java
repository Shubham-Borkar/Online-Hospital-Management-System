package com.hms.service;

import java.time.LocalDate;
import java.util.List;

import com.hms.dto.AddAppDto;
import com.hms.dto.ApiResponse;
import com.hms.pojos.Appointment;


public interface AppointService {
	Appointment addAppointment(AddAppDto app);

	List<Appointment> AppointmentsByPid(int patientId);

	void deleteAppointment(int id);

	List<Appointment> allAppointment();

	List<Appointment> appointmentByDoctor(int did);

	List<Appointment> appointmentByDate(LocalDate date);
	
	List<Appointment> appointmentByDateAndDoctor(LocalDate date,int did);

	List<String> slotTimeList(LocalDate date,int did);
	
	boolean changeStatus(int aid);
	
	String editprescription(int aid,String pre);
}
