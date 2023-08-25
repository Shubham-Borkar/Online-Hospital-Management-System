import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import AddDoctor from './AddDoctor';
import EditDoctor from './EditDoctor';
import { Link, Route, useNavigate } from 'react-router-dom';
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

    const editDoc=(args)=>{
        navigate(`/editDoctor/${args.target.value}`)
        // <Link to="/" state={args}>
        //   Go to : Profile
        // </Link>
        // <EditDoctor props{}/>
        // <Route path="/editDoctor" element={<Dashboard />} />
    }

    const deleteDoctor=(args)=>{
        debugger
        console.log("delete doctor called");
        console.log(args.target.value)
        toast.error(`doctor${args.target.value} delete called`)
    }

    const addDoc=()=>{
        navigate("/addDoctor")
    }

    const updateImg=(args)=>{
        debugger
        console.log(args.target.value)
        toast.warning(`doctor${args.target.value} photo updated`)
    }

debugger;
    return (<>
        <hr />
        <div>
            <center>
            <button className="btn btn-outline-primary" onClick={addDoc}>Add Doctor</button>
            <br />
                {
                    doctors.map( (doctor) =>{
                        let urll=`${BaseApi.server_url}adminstaff/getStaffImage/${doctor.id}`
                        let altImg=`doc${doctor.id} img`
                        return (<>
                                <div className="card mb-6 bg-light" style={{ maxWidth: 800 }}>
                                    <div className="row g-0" >
                                    <div className="col-md-4">
                                        <img style={{ width: 500, height: 250 }} 
                                        src={urll}
                                        className="img-fluid rounded-start" 
                                        alt={altImg} />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">{doctor.id}. Dr.{doctor.name} (Contact No:{doctor.phone}) </h5>
                                    <hr></hr>
    <p className="card-text">
    Dr.<b>{doctor.name}</b>  is a distinguished medical professional with a specialization in 
    <b>{doctor.speciality}</b>. They had completed their education as <b>{doctor.education}</b>,
    they are from <b>{doctor.address}</b>
    </p>
    <p className="card-text">
        <small className="text-muted">Date of Birth <b>{doctor.dob}</b></small>
    </p>
    <p>
        <button onClick={(e)=>editDoc(e)} className='btn btn-outline-success' value={doctor.id}>Edit</button> &emsp;&emsp;
        {/* <Link to='/editDoctor/:id' state={doctor.id}>
          Edit
        </Link> */}
        <button onClick={(e)=>updateImg(e)} className='btn btn-outline-info' value={doctor.id}>Update</button> &emsp;&emsp;
        <button onClick={(e)=>deleteDoctor(e)} className='btn btn-outline-danger' value={doctor.id}>Delete</button> &emsp;&emsp;
        {/* <a className="btn btn-outline-danger" role="button" value={doctor.id} onClick={(e)=>deleteDoctor(e)}>Delete</a> &emsp;&emsp;
        <a className="btn btn-outline-info" role="button" value={doctor.id} onClick={(e)=>updateImg(e)}>Update Image</a>  */}
    </p>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <br />
                                </>);
                    })
                }
            </center>
        </div>
</>);
}

{/* <> */}
            {/* <Header/> */}
            // <div className='table-responsive'> <br /><br /><br /><br />
            // <button className="btn btn-outline-primary" onClick={addDoc}>Add Doctor</button>
            //     <div className="row">
            //     {
            //     doctors.map((doctor)=>{
            //         return(
            //             <div className="col-sm-6 col-md-4">
            //                 <div className="thumbnail">
                            {/* <img src={doctor.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
                                {/* <div className="caption">
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
            </div> */}
            {/* <Footer/>    */}
            // </>
            
export default ManageDoctors;
