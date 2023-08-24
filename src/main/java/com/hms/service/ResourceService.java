package com.hms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hms.dto.ApiResponse;
import com.hms.pojos.ResourceE;


public interface ResourceService {
	List<ResourceE> resourceList();
	ResourceE updateResource(ResourceE resource);
	

}
