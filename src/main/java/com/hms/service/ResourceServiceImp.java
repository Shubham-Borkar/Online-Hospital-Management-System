package com.hms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.dao.ResourceDao;
import com.hms.dto.ApiResponse;
import com.hms.pojos.ResourceE;

@Service
public class ResourceServiceImp implements ResourceService {
	@Autowired
	private ResourceDao rDao;

	@Override
	public List<ResourceE> resourceList() {
		 return	rDao.findAll(); 
	}

	@Override
	public ResourceE updateResource(ResourceE resource) {
		ResourceE res=null;
		try {
			res=rDao.save(resource);
		}catch(Exception e) {
			return null;
		}
		return res;
		
	}

}
