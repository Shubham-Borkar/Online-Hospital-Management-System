package com.hms.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.dao.EntryDao;
import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;


@Service
public class EntryServiceImp implements EntryService {
	@Autowired
	private EntryDao lDao;

	@Override
	public Entry authenticate(String email, String password) {
		Entry user = lDao.findByEmail(email);
		
		if (user!=null && user.getPassword().equals(password))
			return user;
		return null;
	}

	@Override
	public Doctor findDocByEmail(String email) {
		Entry findByEmail = lDao.findByEmail(email);
		if(findByEmail!=null)
			return findByEmail.getDoctor();
		return null;
	}

	@Override
	public Entry updateEntry(String email, String password, String role) {
		Entry user = lDao.findByEmail(email);
		/* if (user != null) {
			if (role.equals("patient")) {
				date = user.getPatient().getDob();
			} else if (role.equals("doctor")) {
				date = user.getDoctor().getStaff().getDob();
			} else {
				date = user.getStaff().getDob();
			}
		//	DateFormat dateFormat = new SimpleDateFormat();
		//	String strDate = dateFormat.format(date);
			//if (dob.equals(strDate)) {
				user.setPassword(password);
				lDao.save(user);
				return user;
		//
				}
		return null;*/
		
		if(user!=null) {
			user.setPassword(password);
			user.setRole(role);
			return lDao.save(user);
		}
		return null;
		
	}

	@Override
	public Patient FindPatientByEmail(String email) {
		Entry findByEmail = lDao.findByEmail(email);
		if(findByEmail!=null)
			return findByEmail.getPatient();
		return null;
		 
	}

}
