import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function DoctorList() {

    const [doctors, setDoctors] = useState([])
    const [doctor, setDoctor] = useState({id: 0, name: "", gender: "", address: "", dob: "",
                                            phone: "", education: "", speciality: ""})

    useEffect(()=>{
            console.log("inside componentDidMount..");
            select(); 
                }, [])

    const select=()=>{
            debugger;
            const url= 'doctor';
            axios.get(`${BaseApi.server_url}${url}`)
            .then(res=>{
                    setDoctors(res.data);
                        })
            .catch(error=> {
                console.log(error)
            })
            }

    return (<>
            <Header/>
            <hr />
            <div>
                <center>
                    {
                        doctors.map( (doctor) =>{
                            return (<div>
                                        <br/> 
                                        <h4>{doctor.id}</h4>
                                        <h4>{doctor.name}</h4>
                                        <h4>{doctor.education}</h4>
                                        <h4>{doctor.speciality}</h4>
                                        <hr/> <hr/> 
                                    </div>);
                        })
                    }
                </center>
            </div>
        
        <Footer/>
    </>);
}

export default DoctorList;