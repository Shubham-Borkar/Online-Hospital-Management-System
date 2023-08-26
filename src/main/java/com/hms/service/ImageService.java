package com.hms.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.hms.dto.ApiResponse;

public interface ImageService {
    ApiResponse uploadImageP(int pid,MultipartFile image)throws IOException ;
	
	byte[] downloadImageP(int pid) throws IOException;
	
    ApiResponse uploadImageS(int sid,MultipartFile image)throws IOException ;
	
	byte[] downloadImageS(int sid) throws IOException;
	

	byte[] downloadImageD(int did) throws IOException;


}
