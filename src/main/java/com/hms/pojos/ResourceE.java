package com.hms.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="resource")
public class ResourceE extends BaseClass {
	@Column(length=30,unique=true)
	private String resource;
	private int totalCount;
	private int availableCount;

}
