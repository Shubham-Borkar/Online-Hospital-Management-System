package com.hms.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hms.dto.DoctorDto;
import com.hms.pojos.Doctor;

@Repository
public interface DoctorDao extends JpaRepository<Doctor, Integer> {

	
//	@Query("SELECT new com.hms.dto.DoctorDto(d.id,d.name,d.gender,d.address,"+
//	             "d.dob,d.phone,s.education,s.speciality) "
//			  + "FROM Doctor d join Staff s on d.id=s.id ")
//			List<DoctorDto> listofDoctorbyQuery();
}
