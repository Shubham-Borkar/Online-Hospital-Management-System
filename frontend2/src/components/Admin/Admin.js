import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { BaseApi } from '../api/BaseApi';

function Admin() {

    const handleButtonClick = (buttonId) => {
     if(buttonId==1)
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 

    return ( <>
    <Header/>
      <center> <br /><br /><br />
          <h1>Admin Panel</h1> <br />
          </center>
          <center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('1') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/doctor.png'} alt="Image 1"/>
                  <span><b>Manage Doctors</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('2') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/staff.png'} alt="Image 2"/>
                  <span><b>Manage Staff</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('3') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/patient.png'} alt="Image 3"/>
                  <span><b>Manage Patients</b></span>
                </div>
              </div>
            </div>
          </div>

          <center>
          </center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('4') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/resources.png'} alt="Image 4"/>
                  <span><b>Resources</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('5') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/appointments.png'} alt="Image 5"/>
                  <span><b>Manage Appointment</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('6') }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/avail.png'} alt="Image 6"/>
                  <span><b>Staff Availability</b></span>
                </div>
              </div>
            </div>
          </div>
          </center>
          <Footer/>
          </> );
}

export default Admin;