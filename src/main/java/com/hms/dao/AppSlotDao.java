package com.hms.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hms.pojos.AppointmentSlot;
@Repository
public interface AppSlotDao extends JpaRepository<AppointmentSlot, Integer> {
	@Query("select a.appSlot from AppointmentSlot a where a.appDate=?1 and a.doctorId=?2")
	List<String> slotTimeList(LocalDate date,int did);
}
