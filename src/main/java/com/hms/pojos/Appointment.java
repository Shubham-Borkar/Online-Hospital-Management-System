package com.hms.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "Appointment")
@Getter
@Setter
@NoArgsConstructor
public class Appointment extends BaseClass {
	@DateTimeFormat(pattern = "yy-MM-dd")
	private LocalDate apointdate;
	//@Temporal(TemporalType.DATE)
	//private Date apointdate;
	private String slot;
	private String symptoms;
	@ManyToOne
	@JoinColumn(name = "pid")
	private Patient patient;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "doctor_id")
	private Doctor doctor;
	@JsonIgnore
	@OneToOne(mappedBy = "appoint")
	private Invoice invoice;

	@Override
	public String toString() {
		return "Appointment [apointdate=" + apointdate + ", slot=" + slot + ", symptoms=" + symptoms + "]";
	}

}
