package com.hms.service;

import java.time.LocalDate;
import java.util.List;
//import java.util.Optional;
//import java.util.function.Function;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.hms.dao.AppSlotDao;
import com.hms.dao.AppointDao;
import com.hms.dao.DoctorDao;
import com.hms.dao.PatientDao;
import com.hms.dto.AddAppDto;
import com.hms.dto.ApiResponse;
import com.hms.pojos.Appointment;
import com.hms.pojos.AppointmentSlot;
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
	@Autowired
	private AppSlotDao asDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public Appointment addAppointment(AddAppDto app) {
		AppointmentSlot aslot=new AppointmentSlot(app.getApointdate(),app.getSlot(),app.getDid());
		AppointmentSlot slotsaved=null;
		try {
			slotsaved = asDao.save(aslot);
		}catch(Exception e) {
			return null;	
		} 
		
		 Patient patient = pDao.findById(app.getPid()).orElse(null);
		 Doctor doctor = dDao.findById(app.getDid()).orElse(null);
		 Appointment amapped=mapper.map(app, Appointment.class);
		 amapped.setDoctor(doctor);
		 amapped.setPatient(patient);
		 amapped.setAppointSlot(slotsaved);
		 aDao.save(amapped);
		return amapped;
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

	@Override
	public List<Appointment> appointmentByDate(LocalDate date) {
		return aDao.findByApointdate(date);
	}

	@Override
	public List<Appointment> appointmentByDateAndDoctor(LocalDate date, int did) {
	    Doctor findById = dDao.findById(did).orElse(null);
	    if(findById==null) return null;
		return aDao.getAppointmenyByDateAndDoctor(date, findById);
	}

	@Override
	public List<String> slotTimeList(LocalDate date,int did) {
		return asDao.slotTimeList(date,did);	 
	}

	@Override
	public boolean changeStatus(int aid) {
	    Appointment findById = aDao.findById(aid).orElse(null);
	    if(findById==null)
		return false;
	    else {
	    findById.setStatus(true);
	    aDao.save(findById);
	    return true;
	    }
	}

	@Override
	public String editprescription(int aid,String pre) {
		Appointment findById = aDao.findById(aid).orElse(null);
	    if(findById==null)
		return null;
	    else {
	    findById.setPrescribe(pre);
	    aDao.save(findById);
	    return "Prescription updated";
	    }
	}

}
