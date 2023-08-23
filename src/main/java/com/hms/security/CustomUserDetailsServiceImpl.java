package com.hms.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.dao.EntryDao;
import com.hms.pojos.Entry;



@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {
	// dep user dao
	@Autowired
	private EntryDao userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao's method to get uer details form DB
		Entry user = userRepo.findByEmail(email)
				.orElseThrow(() ->
				new UsernameNotFoundException("Invalid Email !!!!!"));
		
		return new CustomUserDetails(user);
	}

}
