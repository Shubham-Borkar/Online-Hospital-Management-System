import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { BaseApi } from '../api/BaseApi';
import { useNavigate } from 'react-router-dom';


function Doctor() {
  const navigate=useNavigate();
    const handleButtonClick = (buttonId) => {
     if(buttonId==1)
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 
    const staffList=()=>{
      navigate("/stafflist")
    }
    const patHistory=()=>{
      navigate("/pathistory")
    }
    const appForDoctorByDate=()=>{
      navigate("/appbtdoctor")
    }
    const manageapp=()=>{
      navigate("/manageApp")
    }
    const getresources=()=>{
      navigate("/resources")
    }
    const getDoctorProfile=()=>{
    navigate("/doctorProfile")
    }
  //  if(loginStatus)
    return ( <>
    
    <Header/>

      <center> <br /><br /><br />
          <h1>Doctors Panel Token ={sessionStorage.getItem("token")}</h1>
          <h1></h1>
          </center>
          <center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> appForDoctorByDate() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/avail.png'} alt="Image 1"/>
                  <span><b>Todays Schedule</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> staffList()}>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/staff.png'} alt="Image 2"/>
                  <span><b>Staff Available</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getresources() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/resources.png'} alt="Image 3"/>
                  <span><b>Hospital Resources</b></span>
                </div>
              </div>
            </div>
          </div>

          <center>
          </center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> patHistory() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/avail.png'} alt="Image 4"/>
                  <span><b>Patient History</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> manageapp() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/appointments.png'} alt="Image 5"/>
                  <span><b>Manage Apointment</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getDoctorProfile() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/avail.png'} alt="Image 6"/>
                  <span><b>Doctor Profile</b></span>
                </div>
              </div>
            </div>
          </div>
          </center>
          <Footer/>
          </> );
}

export default Doctor;