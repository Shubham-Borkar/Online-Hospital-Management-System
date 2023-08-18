package com.hms.pojos;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "invoice")
@NoArgsConstructor
@Getter
@Setter

public class Invoice extends BaseClass {
	@DateTimeFormat(pattern = "yy-MM-dd")
	private LocalDate idate;
//	@Temporal(TemporalType.DATE)
//	private Date idate;

	private double medFees;
	private double docFees;
	private double labTestFees;
	private double otherFees;
	@Column(length = 30,name ="description")
	private String desc;
	@OneToOne
	@JoinColumn(name = "appointId")
	private Appointment appoint;

	@Override
	public String toString() {
		return "Invoice [idate=" + idate + ", medFees=" + medFees + ", docFees=" + docFees + ", labTestFees="
				+ labTestFees + ", otherFees=" + otherFees + ", desc=" + desc + "]";
	}

}
