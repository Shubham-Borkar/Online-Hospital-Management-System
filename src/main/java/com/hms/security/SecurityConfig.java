package com.hms.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//Entry point of spring sec configuration
@EnableWebSecurity // to enable web security frmwork
@Configuration // to tell SC following is java configuration class : to declare spring beans
//Equivalent to bean config xml file, This class can contain bean declaration : @Bean
//annotated methods(equivalent to <bean id , class....../>
@EnableGlobalMethodSecurity(prePostEnabled = true) // to enable method level security , with pre auth n post auth
public class SecurityConfig {
	// dep : JWT filter
	@Autowired
	private JWTRequestFilter jwtFilter;

	// configures spring security for authorization (role based)
	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
		http
		.exceptionHandling()
		.authenticationEntryPoint(
				(request, resp, exc) -> 
				resp.sendError(HttpStatus.UNAUTHORIZED.value(), "Not yet authenticated"))
				.and()
				.cors()
				.and()
			.csrf().disable(). // disable CSRF to continue with REST APIs
				authorizeRequests() // specify all authorization rules (i.e authorize all requests)
				.antMatchers("/hms/authenticate","/patient/register","/entry/getotp/*","/entry/update/*/*","/adminstaff/getStaffImage/*","/adminstaff/uploadStaffImage/*","/swagger*/**","/v*/api-docs/**").permitAll() 
//+++++++++++++++++++++++++++++++++++++++++++++++
//				//"/**",
				.antMatchers("/appointment/patient/*").hasAnyRole("DOCTOR","PATIENT")
				.antMatchers("/appointment","/patient",
						"/adminstaff").hasAnyRole("ADMIN","HELPER")
				.antMatchers("/resource").hasAnyRole("ADMIN","DOCTOR","HELPER")
				.antMatchers("/patient/*").hasAnyRole("ADMIN","PATIENT","HELPER")
				
				.antMatchers("/adminstaff/helperstaff").hasAnyRole("DOCTOR","ADMIN")

				
				.antMatchers("/invoice/add/*","/resource/saveorupdate").hasRole("HELPER")

				.antMatchers("/appointment/get/*",
							"/appointment/getAppList/*/*",
							"/appointment/doctor/*",
							"/appointment/updatestatus/*",
							"/appointment/editprescription/*/*").hasRole("DOCTOR")
			
		
				.antMatchers("/adminstaff/register/doctor/*/*",
						"/adminstaff/register/helper",
						"/adminstaff/*/*",
						"/adminstaff/*").hasRole("ADMIN")
				//.antMatchers("/resource").hasAnyRole("DOCTOR","ADMIN")
				////				,
////				"/adminstaff/helperstaff"
//				
//				.antMatchers("/appointment/addappointment",
//							"/appointment/appSlotList/*/*",
//							"/appointment/patient/*",
//							"/entry/ptemail/*").hasRole("PATIENT")
//				
//				
//				.antMatchers().hasRole("HELPER")
//				.antMatchers("/adminstaff/register/doctor/*/*",
//							"/adminstaff/register/helper",
//							"/appointment",
//							"/adminstaff/*/*",
//							"/adminstaff/*",
//							"/patient",
//							"/adminstaff").hasRole("ADMIN")
////				,
////				"/adminstaff/helperstaff"
//				
//				
//				.antMatchers("/invoice/add/*").hasAnyRole("HELPER","ADMIN")
//				
//				
//				.antMatchers("/invoice/*",
//							"/patient/*",
//							"/doctor").hasAnyRole("ADMIN","PATIENT")
//				
//				.antMatchers("/doctor/*",
//						"/adminstaff/uploadStaffImage/*",
//						"/adminstaff/getStaffImage/*",
//						
//						"/resource").hasAnyRole("ADMIN","DOCTOR" )
//				
//				.antMatchers("/adminstaff/getStaffImage/*"
//						).hasAnyRole("ADMIN","DOCTOR","PATIENT")
				
//+++++++++++++++++++++++++++++++++++++++++++++++					
				.anyRequest().authenticated() // all remaining end points accessible only to authenticated users
				.and().sessionManagement() // configure HttpSession management
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // DO NOT use HttpSession for storing any sec
																		// info
				.and().addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	// expose spring supplied auth mgr as a spring bean , so that auth controller
	// can use it for authentication .
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
