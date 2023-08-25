import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import axios from "axios";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function PatAppt() {

    const [patAppts, setPatAppts] = useState([]);
    const [patAppt, setPatAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: ""});

    useEffect(()=>{
            console.log("inside componentDidMount..");
            select(); 
            }, [])

    const select=()=>{
            debugger;
            const url= 'appointment/patient/1';
            axios.get(`${BaseApi.server_url}${url}`)
            .then(res=>{
                    setPatAppts(res.data);
                    })
            }

    return (<>
            <hr />
            <div className='table-responsive'>
                <center>
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
                        patAppts.map( (appt) =>{
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
                </center>
            </div>
    </>);
}

export default PatAppt;