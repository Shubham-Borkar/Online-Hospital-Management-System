package com.hms.service;

import com.hms.dto.InvoiceDto;
import com.hms.pojos.Invoice;

public interface InvoiceService {
	InvoiceDto GenerateInvoice(int appointmentId, InvoiceDto invoiceDetails);

	Invoice InvoiceByAppointmentId(int aid);

}
