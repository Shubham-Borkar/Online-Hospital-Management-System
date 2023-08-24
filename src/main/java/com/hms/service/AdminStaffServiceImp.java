package com.hms.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hms.dao.DoctorDao;
import com.hms.dao.EntryDao;
import com.hms.dao.PatientDao;
import com.hms.dao.StaffDao;
import com.hms.dto.ApiResponse;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Doctor;
import com.hms.pojos.Entry;
import com.hms.pojos.Patient;
import com.hms.pojos.Staff;


@Service
public class AdminStaffServiceImp implements AdminStaffService {
	@Autowired
	private StaffDao sDao;
	@Autowired
	private PatientDao pDao;
	@Autowired
	private DoctorDao dDao;
	@Autowired
	private EntryDao lDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public ApiResponse addDoctor(RegisterDto doctorDetails,String eduString,String speString) {
		Entry savedEntry=null;
		Staff staffSaved=null;
		Doctor docSaved=null;
		try {
		Staff staffEntity=mapper.map(doctorDetails, Staff.class);
		staffSaved=sDao.save(staffEntity);
		Doctor docDetails=new Doctor(eduString, speString, staffSaved);
		docSaved=dDao.save(docDetails);
		Entry docEntry=mapper.map(doctorDetails, Entry.class);
		docEntry.setDoctor(docSaved);
		docEntry.setStaff(staffSaved);
		savedEntry = lDao.save(docEntry);
		}
		catch(RuntimeException e)
		{
			if(savedEntry==null) {
			sDao.delete(staffSaved);
			dDao.delete(docSaved);
			}
			return new ApiResponse("Error in Doctor Registration, Due to ->"+e);
				
		}
		return new ApiResponse("Doctor Added");
	}

	@Override
	public ApiResponse addStaff(RegisterDto staffDetails) {
		Staff sdetails=mapper.map(staffDetails, Staff.class);
		//System.out.println(sdetails+"first mapper");
		sdetails.setRole("ROLE_HELPER");
		Entry edetails=mapper.map(staffDetails, Entry.class);
		//System.out.println(edetails+"before setter");
		edetails.setRole("ROLE_HELPER");
		edetails.setPassword(passwordEncoder.encode(edetails.getPassword()));
		//System.out.println(edetails+"after setter");
		Staff ssaved=null;
		Entry save =null;
		 try {
		//adding staff details in staff table
		ssaved = sDao.save(sdetails);
		//adding staff into in Entry entity as id is auto genrated which is required in entry table
		edetails.setStaff(ssaved);
		//adding Entry details in Entry/login table
		save = lDao.save(edetails);
		 }
		 catch(Exception e){
         if(ssaved!=null)
        	 sDao.delete(ssaved);
         if(save!=null)
        	 lDao.delete(save);
         return new ApiResponse("Registration Failed");
			 
		 }
		
		return new ApiResponse("Registration Sucessful");
	}

	@Override
	public void deleteStaff(int staffId) {
		sDao.deleteById(staffId);
	}

	@Override
	public List<Staff> findAll() {
		return sDao.findAll();
	}

	@Override
	public List<Staff> findAllHelper() {
		return sDao.findByRole("ROLE_HELPER");
	}
	@Override
	public Staff updateStaff(Staff staff) {
		if(sDao.findById(staff.getId())!=null)
		return sDao.save(staff);
		return null;
	}

	@Override
	public Staff getstaffById(int staffId) {
		// TODO Auto-generated method stub
		return sDao.findById(staffId).orElse(null);
	}

}
