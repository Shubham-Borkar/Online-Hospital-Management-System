package com.hms.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hms.dto.DoctorDto;
import com.hms.dto.RegisterDto;
import com.hms.pojos.Staff;
import com.hms.service.AdminStaffService;
import com.hms.service.ImageService;


@CrossOrigin("*")
@RestController
@RequestMapping("/adminstaff")
public class AdminStaffController {
	@Autowired
	private AdminStaffService StaffImp;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ImageService imageServiceImp;

	@PostMapping("/register/doctor/{education}/{speciality}")
	public ResponseEntity<?> addDoctorDetails(@RequestBody RegisterDto doctorDetails,@PathVariable String education,@PathVariable String speciality)
	{
		
		System.out.println(doctorDetails);
		try {
			return new ResponseEntity<>(StaffImp.addDoctor(doctorDetails,education,speciality), HttpStatus.CREATED);
			
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/register/helper")
	public ResponseEntity<?> addStaffDetails(@RequestBody RegisterDto staffDetails)
	{
		System.out.println(staffDetails);
		try {
			return new ResponseEntity<>(StaffImp.addStaff(staffDetails), HttpStatus.CREATED);
			
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@GetMapping("")
	public ResponseEntity<?> getAllStaff()
	{
		List<Staff> list=StaffImp.findAll();
		if(list==null)
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(list);
	}
	@GetMapping("/helperstaff")
	public ResponseEntity<?> getAllHelper()
	{
		List<Staff> list=StaffImp.findAllHelper();
		if(list==null)
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(list);
	}
	@DeleteMapping("/{staffId}")
	public ResponseEntity<?> deleteStaff(@PathVariable int staffId)
	{
		StaffImp.deleteStaff(staffId);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{staffId}")
	public ResponseEntity<?> updateStaffDetails(@PathVariable int staffId,@RequestBody DoctorDto staffDetails)
	{  
		staffDetails.setId(staffId);
		Staff updatedStaff=StaffImp.updateStaff(staffDetails);
		if(updatedStaff!=null)
		return ResponseEntity.ok(updatedStaff);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
	}
	
	@GetMapping("/{staffId}")
	public ResponseEntity<?> getstaffById(@PathVariable int staffId)
	{
		Staff staff=StaffImp.getstaffById(staffId);
		if(staff==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(staff);
	}
	
	@PostMapping(value="/uploadStaffImage/{sid}", consumes = "multipart/form-data")
	public ResponseEntity<?> registerPatient( @PathVariable int sid,@RequestParam MultipartFile imageFile) throws IOException  {
		try {
			return new ResponseEntity<>(imageServiceImp.uploadImageS(sid, imageFile), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/getStaffImage/{sid}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable int sid) throws IOException {
		return ResponseEntity.ok(imageServiceImp.downloadImageS(sid));
	}

}
