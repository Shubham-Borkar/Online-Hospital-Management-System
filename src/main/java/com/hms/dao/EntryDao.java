package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import com.hms.pojos.Entry;
@Repository
public interface EntryDao extends JpaRepository<Entry, Integer>{
 
    public Entry findByEmail(String email);

	public Entry findByEmailAndPassword(String username, String password);
}
