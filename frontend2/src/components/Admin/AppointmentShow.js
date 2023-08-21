import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import '../Patient/stylesheetsp/app.css';
import { useEffect, useState } from "react";

function AppointmentShow() 
{
        const [appts, setAppts] = useState([]);
        const [appt, setAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: ""});
        const [message, setMessage] = useState("");

        useEffect(()=>{
                console.log("inside componentDidMount..");
                select(); 
                // fetch();
              }, [])

        useEffect(()=>{ 
                setTimeout(() => { setMessage(""); }, 3000);  
              } , [message])

        const select=()=>{
                debugger;
                var helper = new XMLHttpRequest();
                // var data =  { "user_id": id };
                
                helper.onreadystatechange =()=> {
                    if (helper.readyState == 4 && helper.status == 200)
                    {
                        debugger;
                        var result = JSON.parse(helper.responseText);
                        setAppts(result);
                        console.log("appts Received");
                    }
                };
                helper.open("GET", "http://127.0.0.1:8181/appointment");
                helper.send();
                // helper.setRequestHeader("Content-Type", "application/json");
                // helper.send(JSON.stringify(data));

            }



    return (<>
                <Header/>

                <hr />
                <div>
                    <center>
                        {
                                appts.map( (appt) =>{
                                        return (<div>
                                                <br/> <br/>
                                                <h4>{appt.apointdate}</h4>
                                                <h4>{appt.slot}</h4>
                                                <h4>{appt.symptoms}</h4>
                                                <hr/> <hr/> <br/> <br/>
                                        </div>);
                                })
                        }
                    </center>
                </div>
                        
                        <Footer/>
            </>);
}

export default AppointmentShow;

{/* <center> <br /> <br /> <br />
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

<br />
</div>
</center> */}
