package com.hms.dto;

import java.util.Date;

import javax.validation.constraints.PastOrPresent;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class InvoiceDto {
//	 "idate": "2023-08-16T12:10:28.250Z",
//	  "medFees": 7777,
//	  "docFees": 8888,
//	  "labTestFees": 9999,
//	  "otherFees": 1010,
//	  "desc": "string",
	@PastOrPresent
	private Date idate;
	private double medFees; 
	private double docFees;
	private double labTestFees;
	private double otherFees;
	private String desc;



}
