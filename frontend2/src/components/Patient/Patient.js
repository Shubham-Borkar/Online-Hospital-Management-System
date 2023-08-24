import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';
import './stylesheetsp/btndiv.css'

function Patient() 
{

  // const pid = 2
  const navigate=useNavigate();
    const handleButtonClick = (buttonId) => {
      // debugger;
        // Handle button click event here
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
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
            <br /><br /><br />
          <h2>Welcome To Hospital</h2>
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
          <br /><br />
        </>);
}

export default Patient;