package com.hms.service;

import java.util.List;

import com.hms.dto.ApiResponse;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Entry;
import com.hms.pojos.Staff;

public interface AdminStaffService {

	ApiResponse addDoctor(RegisterDto doctorDetails);

	ApiResponse addStaff(RegisterDto staffDetails);

	void deleteStaff(int staffId);

	List<Staff> findAll();

	Staff updateStaff(Staff staff);

	Staff getstaffById(int staffId);

}
