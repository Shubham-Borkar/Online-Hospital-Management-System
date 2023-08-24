package com.hms.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Appointment;
import com.hms.pojos.Doctor;


@Repository
public interface AppointDao extends JpaRepository<Appointment, Integer> {
	@Query("select a from Appointment a where a.apointdate = ?1 and a.doctor=?2")
	List<Appointment> getAppointmenyByDateAndDoctor(LocalDate date,Doctor did);

//	@Query("select a.appSlot from AppointmentSlot a where a.appDate=?1 and a.doctorId=?2")
//	List<String> slotTimeList(LocalDate date,int did);
	
	List<Appointment> findByApointdate(LocalDate apointdate);
}
