package com.hms.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Patient")
public class Patient extends BaseClass {

	private String name;
	private String gender;
	@DateTimeFormat(pattern = "yy-MM-dd")
	private LocalDate dob;
//	@Temporal(TemporalType.DATE)
//	private Date dob;
	private long phone;
	private String address;

	@JsonIgnore
	@OneToMany(mappedBy = "patient") // parent side ,inverse side
	private List<Appointment> appointmentList = new ArrayList<Appointment>();
	@JsonIgnore
	@OneToOne(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Entry login;

	@Override
	public String toString() {
		return "Patient [name=" + name + ", gender=" + gender + ", dob=" + dob + ", phone=" + phone + ", address="
				+ address + "]";
	}

}
