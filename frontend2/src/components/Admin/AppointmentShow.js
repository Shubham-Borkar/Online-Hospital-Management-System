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
                <hr />
                <div>
                    <center>
                        {
                                appts.map( (appt) =>{
                                        return (<div>
                                                <br/> 
                                                <h4>{appt.apointdate}</h4>
                                                <h4>{appt.slot}</h4>
                                                <h4>{appt.symptoms}</h4>
                                                <hr/> <hr/> 
                                        </div>);
                                })
                        }
                    </center>
                </div>
            </>);
}

export default AppointmentShow;

