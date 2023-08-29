import { useNavigate } from "react-router-dom";
import { BaseApi } from "../api/BaseApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Mission from '../../pages/Mission';
function Header() {
  const navigate=useNavigate()
  var message="Login"
  if(sessionStorage.getItem("token"))
  message="  Logout  "
 
  const loginLogout=()=>{
   if(sessionStorage.getItem("token")){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("did")
    sessionStorage.removeItem("id")
    navigate("/login")
   }
   else
   navigate("/login")

  }
  const dashfun=()=>{
    const role=sessionStorage.getItem("role")
    if(role=="ROLE_DOCTOR")
    navigate("/doctorMenu")
    if(role=="ROLE_PATIENT")
    navigate("/patientmenu")
    if(role=="ROLE_HELPER"||role=="ROLE_ADMIN")
    navigate("/adminmenu")
  }
 
    return (  <> 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
  <a className="navbar-brand" href="/">
          <img src={BaseApi.base_url+'assets/images/logo.png'} alt="MARS Hospital" style={{ width: '50px', height: '40px' }} /> Mars Hospital&nbsp; &nbsp; &nbsp;
        </a>
        
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="navbar-brand">
          <a className="nav-link active" aria-current="page" href="/home">Home Page</a>
        </li>
        <li className="navbar-brand">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
        <li className="navbar-brand">
          <a className="nav-link" href="/mission">Mission</a>
        </li>
      </ul>
      
    </div>
    <a className="navbar-brand" onClick={dashfun}>
    Go to Main DashBoard
        </a>
    <div >
      <button type="button" className="btn btn-outline-info" onClick={loginLogout}
      style={{width: '150px'}}><h5>{message}</h5></button>
      </div>
  </div>
</nav>

  <br/><br/>
    </>);
}

export default Header;





