package com.hms.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Override
	public ApiResponse addDoctor(RegisterDto doctorDetails) {
		Doctor docdetails=mapper.map(doctorDetails,Doctor.class);
		Doctor dsaved = dDao.save(docdetails);
		Entry docentry=mapper.map(doctorDetails, Entry.class);
		docentry.setDoctor(dsaved);
		Entry save = lDao.save(docentry);
		System.out.println("Doctor received after mapped"+docdetails+"after saving doctor"+dsaved+"Entity after mapped"+docentry);
		
		/*Staff staff = sDao.save(doctorDetails.getStaff());
		doctorDetails.setStaff(staff);
		doctorDetails.getDoctor().setStaff(staff);
		Doctor doc = dDao.save(doctorDetails.getDoctor());
		doctorDetails.setDoctor(doc);
		//sDao.save(doctorDetails.getDoctor().getStaff());
		
		lDao.save(doctorDetails);
		//entry.setStaff(doctorDetails.getDoctor().getStaff());
		//return "Doctor Details are added Successfully";*/
		return null;
	}

	@Override
	public ApiResponse addStaff(RegisterDto staffDetails) {
//		 sDao.save(staffDetails.getStaff());
//		 lDao.save(staffDetails);
		Staff sdetails=mapper.map(staffDetails, Staff.class);
		Entry edetails=mapper.map(staffDetails, Entry.class);
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
