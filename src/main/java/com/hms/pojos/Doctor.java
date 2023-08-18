package com.hms.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Doctor extends BaseClass {
    @Column(name = "Education" ,length = 30)
	private String education;
    @Column(name = "Speciality" ,length = 30)
    private String speciality;
    
    
	@JsonManagedReference //(value = "user-doctor")
	@OneToOne(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Entry login;
	
	
	@OneToOne
	@JsonBackReference
	@JoinColumn(name = "sId")
	private Staff staff;
	@JsonProperty(access=Access.WRITE_ONLY)
	@OneToMany(mappedBy = "doctor")
	private List<Appointment> appoinList = new ArrayList<Appointment>();

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	@JsonManagedReference(value = "user-doctor")
	public Entry getLogin() {
		return login;
	}

	public void setLogin(Entry login) {
		this.login = login;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	public List<Appointment> getAppoinList() {
		return appoinList;
	}

	public void setAppoinList(List<Appointment> appoinList) {
		this.appoinList = appoinList;
	}

	@Override
	public String toString() {
		return "Doctor [education=" + education + ", speciality=" + speciality + ", staff=" + staff + "]";
	}

}
