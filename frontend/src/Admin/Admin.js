import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'

import { useHistory } from 'react-router-dom';
function Admin() {
    const history = useHistory();
    const handleButtonClick = (buttonId) => {
     if(buttonId==1)
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 
    return ( <>
    <Navbaaaar/>
      <center> <br /><br /><br /><br />
          <h1>Admin Panel</h1> <br />
          </center>
          <center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/adminimg/pngs/doctor.png" alt="Image 1"/>
                  <span><b>Manage Doctor"s</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/adminimg/pngs/staff.png" alt="Image 2"/>
                  <span><b>Manage Staff</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/adminimg/pngs/patient.png" alt="Image 3"/>
                  <span><b>Manage Patient"s</b></span>
                </div>
              </div>
            </div>
          </div>

          <center>
          </center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/adminimg/pngs/resources.png" alt="Image 1"/>
                  <span><b>Resources</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/adminimg/pngs/appointments.png" alt="Image 2"/>
                  <span><b>Manage Apointment</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/adminimg/pngs/avail.png" alt="Image 3"/>
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