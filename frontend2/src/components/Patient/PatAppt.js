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
            <Header/>
            <hr />
            <div>
                <center>
                    {
                        patAppts.map( (appt) =>{
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
        
        <Footer/>
    </>);
}

export default PatAppt;