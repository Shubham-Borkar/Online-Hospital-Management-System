import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './health.css'

function HealthCheckup() 
{
    const OnTextChange=(args)=>{
        // var copyOfUser = {...user};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
        console.log("value entered");
   }

   const update=()=>{
        // 1236547890
        alert('Are you sure to book appointment');
        console.log("Button clicked");
   }

    return (<>
                <Navbaaaar/>
                        <center> <br /> <br /> <br /> <br />
                        <h1>Book Health Check-up</h1>
                        <div className="table-bordered"> <br />
                        <div className='form-group input-group-sm appstyle'>Checkup Date
                        <input type="date" className='form-control appstyle'
                                style={{width: 500}}
                                name="app_date"
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm appstyle'>Checkup Slot <br/>
                                <select id="app_slotno" name="app_slotno" style={{width: 500}}>
                                        <option value="1">9 am - 11 am</option>
                                        <option value="2">11 am - 1 pm</option>
                                        <option value="3">2 pm - 4 pm</option>
                                        <option value="4">5 pm - 7 pm</option>
                                </select>
                        </div>
                        
                        <button className='btn btn-success'
                                onClick={update}>
                                Confirm Checkup
                        </button>
                        <br />
                        {/* {message} */}
                        <br />
                        </div>
                        </center>
                        <Footer/>
            </>);
}

export default HealthCheckup;
