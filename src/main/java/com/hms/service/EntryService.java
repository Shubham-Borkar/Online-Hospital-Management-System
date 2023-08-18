package com.hms.service;

import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;

public interface EntryService {

	Entry authenticate(String email, String password);

	Doctor findDocByEmail(String email);

	Entry updateEntry(String email, String password, String role);

	Patient FindPatientByEmail(String email);
}
