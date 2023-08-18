package com.hms.dao;
/*
package com.mars.hms.dao;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.HMSProject.pojos.Entry;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetailsImpl implements UserDetails {
  private static final long serialVersionUID = 1L;

  private Integer id;

  private String username;

  private String email;

  @JsonIgnore
  private String password;

  private Collection<? extends GrantedAuthority> authorities;


  @SuppressWarnings("unchecked")
public UserDetailsImpl(Integer integer, String email, String password, GrantedAuthority authorities2) {
	super();
	this.id = integer;
	this.email = email;
	this.password = password;
	this.authorities = (Collection<? extends GrantedAuthority>) authorities2;
}




public static UserDetailsImpl build(Entry user) {
	    GrantedAuthority authorities =  new SimpleGrantedAuthority(user.getRole());
	    return new UserDetailsImpl(
	        user.getId(), 
	        user.getEmail(),
	        user.getPassword(), 
	        authorities);
	  }

 
    		


  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  public Integer getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    UserDetailsImpl user = (UserDetailsImpl) o;
    return Objects.equals(id, user.id);
  }
}
*/
