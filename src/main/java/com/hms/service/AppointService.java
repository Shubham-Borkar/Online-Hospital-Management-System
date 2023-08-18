package com.hms.service;

import java.util.List;

import com.hms.pojos.Appointment;


public interface AppointService {
	Appointment addAppointment(Appointment app, int pid, int did);

	List<Appointment> AppointmentsByPid(int patientId);

	void deleteAppointment(int id);

	List<Appointment> allAppointment();

	List<Appointment> appointmentByDoctor(int did);

}
