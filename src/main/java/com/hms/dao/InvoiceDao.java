package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Invoice;



@Repository
public interface InvoiceDao extends JpaRepository<Invoice, Integer> {
//     @Query(name = "select * from invoice where appoint_id=?",nativeQuery = true)
//	Invoice showInvoiceByAppointId(int aid);
}
