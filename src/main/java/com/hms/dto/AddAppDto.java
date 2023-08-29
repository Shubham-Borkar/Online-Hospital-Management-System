package com.hms.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddAppDto {
	@NotNull(message = "Appointment Date must not be blank")
	private LocalDate apointdate;
	@NotNull(message = "Slot Must not be blank")
	private String slot;
	private String symptoms;
	private int pid;
	private int did;

}
