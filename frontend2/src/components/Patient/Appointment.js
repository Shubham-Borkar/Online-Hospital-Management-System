import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/app.css'
import { useState } from "react";
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';

function Appointment() 
{
        // const [appts, setAppts] = useState([]);
        const [appt, setAppt] = useState({id: 0, date: "", slot: "", symptoms: ""});
        const [message, setMessage] = useState("");

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
        // add
   }

   const addAppt=()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
                {
                    debugger;
                    var responseReceived = JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows==1)
                    {
                        setMessage("Appointment added Successfully!")
                        setAppt({id: 0, date: "", slot: "", symptoms: ""});
                    }
                    else
                    {
                        setMessage("Something went wrong!, Please try again");
                        setAppt({id: 0, date: "", slot: "", symptoms: ""});
                    }
                }
        };
        // helper.open("POST","http://127.0.0.1:8181/appointment/add/"+pid+"/"+did);
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(appt));
   }

    return (<>
                <Header/>
                        <center> <br /> <br /> <br />
                        <h1>Book Appointment</h1>
                        <div className="table-bordered"> <br />
                        <div className='form-group input-group-sm appstyle'>Appointment Date
                        <input type="date" className='form-control appstyle'
                                style={{width: 500}}
                                name="app_date"
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm appstyle'>Appointment Slot <br/>
                                <select id="app_slotno" name="app_slotno" style={{width: 500}}>
                                        <option value="1">10 am</option>
                                        <option value="2">11 am</option>
                                        <option value="3">12 pm</option>
                                        <option value="4">1 pm</option>
                                </select>
                        </div>
                        <div className='form-group appstyle'>Doctor
                                <select id="app_slotno" name="app_slotno" style={{width: 500}}>
                                        <option value="dr1">Dr. Aditya Wakle (piles specialist)</option>
                                        <option value="dr2">Dr. Rushi Kharade (MD)</option>
                                        <option value="dr3">Dr. Sneha Kulkarni (Suregon)</option>
                                        <option value="dr4">Dr. Shubham Borkar (Physician)</option>
                                </select>
                        </div>
                        
                        <button className='btn btn-success'
                                onClick={update}>
                                Add Apointment
                        </button>
                        <br />
                        {/* {message} */}
                        <br />
                        </div>
                        </center>
                        <Footer/>
            </>);
}

export default Appointment;
