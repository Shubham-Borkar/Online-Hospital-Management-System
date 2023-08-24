package com.hms.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "appslot",    uniqueConstraints=
@UniqueConstraint(columnNames={"appDate", "appSlot","doctorId"})
)
public class AppointmentSlot extends BaseClass{
	private LocalDate appDate;
	@Column(name = "appslot", length = 10)
	private String appSlot;
	private int doctorId;
}
