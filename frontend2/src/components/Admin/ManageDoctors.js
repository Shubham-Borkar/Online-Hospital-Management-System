import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import AddDoctor from './AddDoctor';
import EditDoctor from './EditDoctor';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageDoctors(props) 
{
    const navigate=useNavigate();
    const [doctors,setDoctors] =  useState([])
    // const [doctor, setDoctor] = useState({id: 0, name: "", gender: "", address: "", dob: "",
    //                                         phone: "", education: "", speciality: ""})

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

    const editDoc=()=>{
        navigate("/editDoctor")
    }

    const deleteDoctor=()=>{
        console.log("delete doctor called");
        toast.warning('doctor delete called')
    }

    const addDoc=()=>{
        navigate("/addDoctor")
    }

debugger;
    return (<>
            {/* <Header/> */}
            <div className='table-responsive'> <br /><br /><br /><br />
            <button className="btn btn-outline-primary" onClick={addDoc}>Add Doctor</button>
                <div className="row">
                {
                doctors.map((doctor)=>{
                    return(
                    //    <div class="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                            {/* <img src={doctor.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
                                <div className="caption">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.phone}</p>
                                    <p>{doctor.education}</p>
                                    <p>{doctor.speciality}</p>
                                    <p>
                                        <button onClick={editDoc} className='btn btn-primary'>Edit</button>
                                        <a class="btn btn-danger" role="button" onClick={deleteDoctor}>Delete</a>
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

export default ManageDoctors;
