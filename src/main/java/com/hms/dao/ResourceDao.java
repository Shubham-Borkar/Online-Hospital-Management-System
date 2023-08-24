package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.pojos.ResourceE;
@Repository
public interface ResourceDao extends JpaRepository<ResourceE, Integer> {

}
