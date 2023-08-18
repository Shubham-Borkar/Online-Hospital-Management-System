package com.hms.service;

import java.util.List;
//import java.util.Optional;
//import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.hms.dao.AppointDao;
import com.hms.dao.DoctorDao;
import com.hms.dao.PatientDao;
import com.hms.pojos.Appointment;
import com.hms.pojos.Doctor;
import com.hms.pojos.Patient;


@Service
public class AppointServiceImp implements AppointService {
	@Autowired
	private AppointDao aDao;
	@Autowired
	private DoctorDao dDao;
	@Autowired
	private PatientDao pDao;

	@Override
	public Appointment addAppointment(Appointment app, int pid, int did) {
		 Patient patient = pDao.findById(pid).orElse(null);
		 Doctor doctor = dDao.findById(did).orElse(null);
		 app.setDoctor(doctor);
		 app.setPatient(patient);
		 aDao.save(app);
		return app;
	}

	@Override
	public List<Appointment> AppointmentsByPid(int patientId) {
		 Patient  patient = pDao.findById(patientId).orElse(null);
		 if(patient==null)
			 return null;
		return patient.getAppointmentList();
	}

	@Override
	public void deleteAppointment(int id) {
        aDao.deleteById(id);
	}

	@Override
	public List<Appointment> allAppointment() {
		return aDao.findAll();
	}

	@Override
	public List<Appointment> appointmentByDoctor(int did) {
		 Doctor doctor = dDao.findById(did).orElse(null);
		return doctor.getAppoinList();
	}

}
