package com.hms.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.dao.AppointDao;
import com.hms.dao.InvoiceDao;
import com.hms.dto.InvoiceDto;
import com.hms.pojos.Appointment;
import com.hms.pojos.Invoice;


@Service
public class InvoiceServiceImp implements InvoiceService {
	@Autowired
	private InvoiceDao iDao;
	@Autowired
	private AppointDao aDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public InvoiceDto GenerateInvoice(int appointmentId, InvoiceDto invoiceDetails) {
 		Appointment app = aDao.findById(appointmentId).orElse(null);
 		Invoice invoiceentity=mapper.map(invoiceDetails, Invoice.class);
 		invoiceentity.setAppoint(app);
 		iDao.save(invoiceentity);
		return invoiceDetails;
	}

	@Override
	public Invoice InvoiceByAppointmentId(int aid) {
		 Appointment app = aDao.findById(aid).orElse(null);
		 if(app==null)
			 return null;
		return app.getInvoice();
	}

}
