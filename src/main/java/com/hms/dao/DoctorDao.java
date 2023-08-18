package com.hms.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Doctor;

@Repository
public interface DoctorDao extends JpaRepository<Doctor, Integer> {
//	@Query(value="select * from doctor" ,nativeQuery = true)
//	List<Doctor> findAllDoc();
}
