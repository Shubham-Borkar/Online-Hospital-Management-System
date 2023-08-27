import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';
import './stylesheetsp/btndiv.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Patient() 
{

  // const pid = 2
  const navigate=useNavigate();
  var pid =sessionStorage.getItem("id")
  console.log("id for first render"+pid)
        // var [pemail, setPEmail] = useState("")
        var pemail=""

        useEffect(()=>{
          debugger
          console.log("inside componentDidMount..");
          getPat()
        }, [])

    const handleButtonClick = (buttonId) => {
      // debugger;
        // Handle button click event here
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 

    const getPat=()=>{
      debugger
      pemail = sessionStorage.getItem("email");
      console.log(pemail)
      const url= `entry/ptemail/${sessionStorage.getItem("email")}`
      axios.get(`${BaseApi.server_url}${url}`)
      .then(res=>{
              debugger
              console.log(res.data)
              console.log(pid)
              if(pid==0)
                toast.error("wrong pid")
              sessionStorage.setItem("id", res.data.id)
      })
      .catch(error=>{
              debugger
              console.log(error)
      })
}

    const getProfile=()=>{
      navigate("/profile")
    }

    const getBookAppt=()=>{
      navigate("/bookAppointment")
      // <Routes path="/bookAppointment"
    }

    const getAppt=()=>{
      navigate("/patientAppointment")
    }

    const getBookHealthCheck=()=>{
      navigate("/healthCheckup")
    }

    const getOnlineConsult=()=>{
      navigate("/consultOnline")
    }

    const getDocList=()=>{
      navigate("/getDoctors")
    }

    return (<>
          <center>
          <h2>Welcome To Mars Hospital</h2>
          </center> <br />
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="button" onClick={()=> getProfile() }>
                  <img src={BaseApi.base_url+'assets/images/icons/dp.png'} alt="Image 1"/>
                  <span><b>Profile</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> getBookAppt() }>
                  <img src={BaseApi.base_url+'assets/images/icons/bookapp.png'} alt="Image 2"/>
                  <span><b>Book Apointment</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> getAppt() }>
                  <img src={BaseApi.base_url+'assets/images/icons/bookedapp.png'} alt="Image 3"/>
                  <span><b>View Appointments</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> getBookHealthCheck('4') }>
                  <img src={BaseApi.base_url+'assets/images/icons/bookhealthcheckup.png'} alt="Image 4"/>
                  <span><b>Book Health Checkup</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> getOnlineConsult('5') }>
                  <img src={BaseApi.base_url+'assets/images/icons/consultonline.png'} alt="Image 5"/>
                  <span><b>Consult Online</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> getDocList() }>
                  <img src={BaseApi.base_url+'assets/images/icons/findadoctor.png'} alt="Image 6"/>
                  <span><b>Find a Doctor</b></span>
                </div>
              </div>

            </div>
          </div>
          
        </>);
}

export default Patient;