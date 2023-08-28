package com.hms.service;

import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;

public interface EntryService {


	Doctor findDocByEmail(String email);
	
	String findRoleByEmail(String email);

	Entry updateEntryCred(String email, String password);

	Patient FindPatientByEmail(String email);
	
	Entry findAnyUserByEmail(String email);
}
