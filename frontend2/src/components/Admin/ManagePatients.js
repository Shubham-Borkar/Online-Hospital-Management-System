import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditPatient from './EditPatient';

function ManagePatients(props) 
{
    const navigate=useNavigate();
    const [patients,setPatients] =  useState([])
    // const [doctor, setDoctor] = useState({id: 0, name: "", gender: "", address: "", dob: "",
    //                                         phone: "", education: "", speciality: ""})

    useEffect(()=>{
            console.log("inside componentDidMount..");
            select(); 
                }, [])
                                    
    const select=()=>{
        debugger;
                const url= 'patient';
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        setPatients(res.data);
                            })
                .catch(error=> {
                        console.log(error)
                            })
                }

    const editPat=()=>{
        navigate("/editPatient")
    }

    const deletePatient=()=>{
        console.log("delete doctor called");
    }

    const addPatient=()=>{
        navigate("/register")
    }

debugger;
    return (<>
            {/* <Header/> */}
            <div className='table-responsive'> <br /><br /><br /><br />
            <button className="btn btn-outline-primary" onClick={addPatient}>Add Patient</button>
                <div className="row">
                {
                patients.map((patient)=>{
                    return(
                    //    <div class="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                            {/* <img src={doctor.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
                                <div className="caption">
                                    <h3>{patient.name}</h3>
                                    <p>{patient.phone}</p>
                                    <p>{patient.email}</p>
                                    <p>{patient.password}</p>
                                    <p>
                                        <button onClick={editPat} className='btn btn-primary'>Edit</button>
                                        <a class="btn btn-danger" role="button" onClick={deletePatient}>Delete</a>
                                    </p>
                                </div>
                            </div>
                        </div> 
                    );       
                })       
                }
                </div>
            </div>
            {/* <Footer/>    */}
            </>);
}

export default ManagePatients;
