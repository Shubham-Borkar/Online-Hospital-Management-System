import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import './stylesheetsp/btndiv.css'

function Patient() 
{
    const handleButtonClick = (buttonId) => {
      // debugger;
        // Handle button click event here
        console.log("Button clicked: " + buttonId);
        // history.push = ("");
    } 

    return (<>
          <Header/>
          <center>
            <br /><br /><br />
          <h2>Welcome To Hospital</h2>
          </center> <br />
          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button1') }>
                  <img src="http://localhost:3000/assets/images/icons/dp.png" alt="Image 1"/>
                  <span><b>Profile</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button2') }>
                  <img src="http://localhost:3000/assets/images/icons/bookapp.png" alt="Image 2"/>
                  <span><b>Book Apointment</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/images/icons/bookedapp.png" alt="Image 3"/>
                  <span><b>View Appointments</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/images/icons/bookhealthcheckup.png" alt="Image 4"/>
                  <span><b>Book Health Checkup</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/images/icons/consultonline.png" alt="Image 5"/>
                  <span><b>Consult Online</b></span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="button" onClick={()=> handleButtonClick('button3') }>
                  <img src="http://localhost:3000/assets/images/icons/findadoctor.png" alt="Image 6"/>
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