import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../mystyle.css'
import './btndiv.css'
import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import { useHistory } from 'react-router-dom';

function Patient() 
{
    const history = useHistory();
    const handleButtonClick = (buttonId) => {
      // debugger;
        // Handle button click event here
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 

    return (<>
          <Navbaaaar/>
          <center>
            <br /><br /><br /><br />
          <h2>Welcome To Hospital</h2>
          </center> <br /><br />
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/images/icons/dp.png" alt="Image 1"/>
                  <span><b>Profile</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/images/icons/bookapp.png" alt="Image 2"/>
                  <span><b>Book Apointment</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/images/icons/bookedapp.png" alt="Image 3"/>
                  <span><b>View Appointments</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/images/icons/bookhealthcheckup.png" alt="Image 3"/>
                  <span><b>Book Health Checkup</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/images/icons/consultonline.png" alt="Image 3"/>
                  <span><b>Consult Online</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/images/icons/findadoctor.png" alt="Image 3"/>
                  <span><b>Find a Doctor</b></span>
                </div>
              </div>

            </div>
          </div>
          <br /><br />
          <Footer/>
        </>);
}

export default Patient;