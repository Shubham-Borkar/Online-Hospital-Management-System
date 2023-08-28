package com.hms.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.validation.constraints.PastOrPresent;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// DTO
@Getter
@Setter
@ToString
public class InvoiceDto {
	@PastOrPresent
	private LocalDate idate;
	private double medFees; 
	private double docFees;
	private double labTestFees;
	private double otherFees;
	private String desc;



}
