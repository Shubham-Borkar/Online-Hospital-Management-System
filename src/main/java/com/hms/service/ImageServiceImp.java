package com.hms.service;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hms.dao.PatientDao;
import com.hms.dao.StaffDao;
import com.hms.dto.ApiResponse;
import com.hms.pojos.Patient;
import com.hms.pojos.Staff;

@Service
public class ImageServiceImp implements ImageService {
	@Value("${folder.location}")
	private String folderLocation;
	
	@Autowired
	private PatientDao pDao;
	
	@Autowired
	private StaffDao sDao;
	
	
	
	@PostConstruct
	public void init() {
		System.out.println("in init " + folderLocation);
		// chk if folder exists --yes --continue
		File folder = new File(folderLocation);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			// no --create a folder
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}
	
	@Override
	public ApiResponse uploadImageP(int pid,MultipartFile image)throws IOException {
		Patient pdetails=pDao.findById(pid).orElse(null);
		if(pdetails==null)
			return new ApiResponse("Invalid Patient id");
				// store the image on server side folder
				String path = folderLocation.concat(image.getOriginalFilename());
				System.out.println(path);
				// Use FileUtils method : writeByte[] --> File
				FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
				pdetails.setImagePath(path);
				System.out.println(pdetails.getImagePath());
		pDao.save(pdetails);
         return new ApiResponse("Image Added Sucessfully");				
	}

	
	@Override
	public byte[] downloadImageP(int pid) throws IOException{
		Patient patient=pDao.findById(pid).orElse(null);
		if(patient==null) return null;
		String path = patient.getImagePath();
		if (path != null) {
			// path ---> File --> byte[]
			return FileUtils.readFileToByteArray(new File(path));
			//OR from DB : return emp.getImage();
		} else
			return null;
	}

	@Override
	public ApiResponse uploadImageS(int sid, MultipartFile image) throws IOException {
		Staff sdetails=sDao.findById(sid).orElse(null);
		if(sdetails==null)
			return new ApiResponse("Invalid Patient id");
				// store the image on server side folder
				String path = folderLocation.concat(image.getOriginalFilename());
				System.out.println(path);
				// Use FileUtils method : writeByte[] --> File
				FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
				sdetails.setImagePath(path);
				System.out.println(sdetails.getImagePath());
		 sDao.save(sdetails);
         return new ApiResponse("Image Added Sucessfully");		
	}

	@Override
	public byte[] downloadImageS(int sid) throws IOException {
		Staff staff=sDao.findById(sid).orElse(null);
		if(staff==null) return null;
		String path = staff.getImagePath();
		if (path != null) {
			// path ---> File --> byte[]
			return FileUtils.readFileToByteArray(new File(path));
			//OR from DB : return emp.getImage();
		} else
			return null;
	}

	@Override
	public byte[] downloadImageD(int did) throws IOException {
		// TODO Auto-generated method stub
		return null;
	}

}
