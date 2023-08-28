package com.hms.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.InvoiceDto;
import com.hms.pojos.Invoice;
import com.hms.service.InvoiceService;
import com.hms.service.InvoiceServiceImp;



@CrossOrigin(origins = "*" ,allowedHeaders = "*")
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/invoice")
public class InvoiceController {
	@Autowired
	private InvoiceService InvoiceImp;
	
	@PostMapping("/add/{aid}")
	public ResponseEntity<?> generateInvoice(@PathVariable int aid,@RequestBody @Valid InvoiceDto invoiceDetails)
	{
		InvoiceDto invoice=InvoiceImp.GenerateInvoice(aid, invoiceDetails);
			if(invoice!=null)
			return new ResponseEntity<>(invoice, HttpStatus.CREATED);

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}
	
	@GetMapping("/{aid}")
	public ResponseEntity<?> showInvoiceByAppointmentId(@PathVariable int aid)
	{
			return new ResponseEntity<>(InvoiceImp.InvoiceByAppointmentId(aid), HttpStatus.OK);
	}
	

	
}
