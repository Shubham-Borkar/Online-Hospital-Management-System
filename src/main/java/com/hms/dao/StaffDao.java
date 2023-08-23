package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Staff;
import com.hms.pojos.Entry;
import java.util.List;
import java.lang.String;


@Repository
public interface StaffDao extends JpaRepository<Staff, Integer> {
List<Staff> findByRole(String role);
}
