package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Appointment;
@Repository
public interface AppointDao extends JpaRepository<Appointment, Integer> {

}
