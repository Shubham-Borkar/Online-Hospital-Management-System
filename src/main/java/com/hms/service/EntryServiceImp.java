package com.hms.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hms.dao.EntryDao;
import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;


@Service
public class EntryServiceImp implements EntryService {
	@Autowired
	private EntryDao lDao;
	@Autowired
	private PasswordEncoder passwordencoder;
	
	
	@Override
	public Entry findAnyUserByEmail(String email) {
		return lDao.findByEmail(email).orElse(null);
	}

	
	
	@Override
	public Doctor findDocByEmail(String email) {
		Entry findByEmail = lDao.findByEmail(email).orElse(null);
		if(findByEmail!=null)
			return findByEmail.getDoctor();
		return null;
	}

	@Override
	public Entry updateEntryCred(String email, String password) {
		Entry user = lDao.findByEmail(email).orElse(null);
		if(user!=null) {
			user.setPassword(passwordencoder.encode(password));
			return lDao.save(user);
		}
		return null;	
	}

	@Override
	public Patient FindPatientByEmail(String email) {
		Entry findByEmail = lDao.findByEmail(email).orElse(null);
		if(findByEmail!=null)
			return findByEmail.getPatient();
		return null;
		 
	}

	@Override
	public String findRoleByEmail(String email) {
	    Entry entry=lDao.findByEmail(email).orElse(null);
	    if(entry==null)
		return null;
	    return entry.getRole();
	}

}
