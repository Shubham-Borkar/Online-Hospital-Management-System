import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import '../Patient/stylesheetsp/app.css';
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from "axios";

function AppointmentShow() 
{
        const [appts, setAppts] = useState([]);
        const [appt, setAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: ""});

        useEffect(()=>{
                console.log("inside componentDidMount..");
                select(); 
              }, [])

        // useEffect(()=>{ 
        //         setTimeout(() => { setMessage(""); }, 3000);  
        //       } , [message])

        const select=()=>{
                debugger;
                const url= 'appointment';
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        setAppts(res.data);
                })
            }



    return (<>
                <hr /> <center>
                <div className='table-responsive col-md-6'> <h4>All Appointments</h4>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                            <th>Appointment Id</th>
                            <th>Appointment Date</th>
                            <th>Slot</th>
                            <th>Symptoms</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        appts.map( (appt) =>{
                            return (<tr>
                                        <td>{appt.id}</td>
                                        <td>{appt.apointdate}</td>
                                        <td>{appt.slot}</td>
                                        <td>{appt.symptoms}</td>
                                    </tr>);
                            })
                        }
                        </tbody>
                    </table>
            </div>
            </center>
            </>);
}

export default AppointmentShow;

