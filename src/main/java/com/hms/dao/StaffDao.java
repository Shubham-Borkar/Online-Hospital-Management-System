package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Staff;


@Repository
public interface StaffDao extends JpaRepository<Staff, Integer> {

}
