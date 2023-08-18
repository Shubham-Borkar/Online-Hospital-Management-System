package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Patient;


@Repository
public interface PatientDao extends JpaRepository<Patient, Integer> {

}
