import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './app.css'

function PastApp() 
{

    return (<>
                <Navbaaaar/>
                <center> <br /> <br /> <br /> <br />
                <h1>Previous Appointments</h1> <hr /> <br /> <br /> 

                <div className="table-bordered, oldappDiv"> 
                    <p className="oldapp"></p> 
                    <h4>
                        Dated: 10/06/2023
                    </h4>
                    <h4>
                        Doctor: Dr. Aditya Wakle
                    </h4>
                </div> <br /> <br /> <br />
                <div className="table-bordered, oldappDiv"> 
                    <p className="oldapp"></p> 
                    <h4>
                        Dated: 15/03/2023
                    </h4>
                    <h4>
                        Doctor: Dr. Rushi Kharade
                    </h4>
                </div> <br /> <br /> <br />
                <div className="table-bordered, oldappDiv"> 
                    <p className="oldapp"></p> 
                    <h4>
                        Dated: 20/04/2023
                    </h4>
                    <h4>
                        Doctor: Dr. Shubham Borkar
                    </h4>
                </div>
                </center>
                <Footer/>
            </>);
}

export default PastApp;