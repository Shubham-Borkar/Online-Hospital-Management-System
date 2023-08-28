package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.ApiResponse;
import com.hms.pojos.ResourceE;
import com.hms.service.ResourceService;
@RequestMapping("/resource")
@RestController
@CrossOrigin("*")
public class ResourceController {
	@Autowired
	private ResourceService resImp;
	
	@GetMapping("")
	public ResponseEntity<?> getResource(){
		List<ResourceE> rlist=resImp.resourceList();
		if(rlist==null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Empty list"));
		return new ResponseEntity<>(rlist,HttpStatus.OK);	
	}
	
	@PostMapping("/saveorupdate")
	public ResponseEntity<?> saveorupdateResource(@RequestBody ResourceE resource){
		ResourceE res=resImp.updateResource(resource);
		if(res==null)
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Error in save update"));
		return new ResponseEntity<>(res,HttpStatus.OK);	
	}

}
