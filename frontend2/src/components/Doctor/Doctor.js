import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';

function Doctor() {
    const handleButtonClick = (buttonId) => {
     if(buttonId==1)
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 
    return ( <>
    <Header/>
      <center> <br /><br /><br />
          <h1>Doctors Panel</h1>
          </center>
          <center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/avail.png" alt="Image 1"/>
                  <span><b>Todays Schedule</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/staff.png" alt="Image 2"/>
                  <span><b>Staff Available</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/resources.png" alt="Image 3"/>
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
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/avail.png" alt="Image 4"/>
                  <span><b>Patient History</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/appointments.png" alt="Image 5"/>
                  <span><b>Manage Apointment</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/adminimg/pngs/avail.png" alt="Image 6"/>
                  <span><b>Staff Availability</b></span>
                </div>
              </div>
            </div>
          </div>
          </center>
          <Footer/>
          </> );
}

export default Doctor;