package com.hms.pojos;
import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Staff")
@NoArgsConstructor
@Getter
@Setter
public class Staff extends BaseClass {

	private String name;
	private String gender;
	private String address;
	@DateTimeFormat(pattern = "yy-MM-dd")
	private LocalDate dob;
//	@Temporal(TemporalType.DATE)
//	private Date dob;
	private long phone;
	@OneToOne(mappedBy = "staff", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Entry login;
	@JsonManagedReference  //(value="user-staff")
	@OneToOne(mappedBy = "staff", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Doctor doctor;

	@Override
	public String toString() {
		return "Staff [name=" + name + ", gender=" + gender + ", address=" + address + ", dob=" + dob + ", phone="
				+ phone + "]";
	}

}
