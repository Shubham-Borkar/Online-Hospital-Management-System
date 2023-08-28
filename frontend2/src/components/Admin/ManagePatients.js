import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditPatient from './EditPatient';
import { toast } from 'react-toastify';

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
        var tokenn=sessionStorage.getItem("token")
                const url= 'patient';
                axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                .then(res=>{
                        setPatients(res.data);
                            })
                .catch(error=> {
                        console.log(error)
                            })
                }

    const editPat=(args)=>{
        navigate(`/editPatient/${args.target.value}`)
    }

    const deletePatient=()=>{
        console.log("delete doctor called");
        toast.warning('patient delete called')
    }

    const updateImg = (args) => {
        debugger
        console.log(args.target.value)
        toast.warning(`patient${args.target.value} photo updated`)
    }

    const addPatient=()=>{
        navigate("/register")
    }

debugger;
    return (<>
            <hr />
        <div>
            <center>
                <button className="btn btn-outline-warning" onClick={addPatient}>Register Patient</button>
                <br /> <br />

                {
                    patients.map((patient) => {
                        let imgSrc = `${BaseApi.base_url}assets/images/image1.jpg`
                        console.log(imgSrc)
                        let altImg = `patient${patient.id} img`
                        return (<>
                            <div className="card mb-6" style={{ maxWidth: 800, backgroundColor: 'skyblue' }}>
                                <div className="row g-0">
                                <div className="col-md-4">
                                        <img style={{ width: 400, height: 250 }}
                                            src={imgSrc}
                                            className="img-fluid rounded-start"
                                            alt={altImg} />
                                    </div>
                                    <div className="col-md-8">

                                        <div className="card-body">
                                            <h5>Name : <b>{patient.name}</b></h5>
                                            <h5>Gender : <b>{patient.gender}</b></h5>
                                            <h5>Date of birth : <b>{patient.dob}</b></h5>
                                            <h5>phone : <b>{patient.phone}</b></h5>
                                            <h5>address : <b>{patient.address}</b></h5>
                                            <p>
                                                <button onClick={(e) => editPat(e)} className='btn btn-outline-success' value={patient.id}>Edit</button> &emsp;&emsp;
                                                <button onClick={(e) => updateImg(e)} className='btn btn-outline-primary' value={patient.id}>Update</button> &emsp;&emsp;
                                                <button onClick={(e) => deletePatient(e)} className='btn btn-outline-danger' value={patient.id}>Delete</button> &emsp;&emsp;
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

export default ManagePatients;

{/* <Header/> */}
{/* <div className='table-responsive'> <br /><br /><br /><br />
<button className="btn btn-outline-primary" onClick={addPatient}>Add Patient</button>
    <div className="row">
    {
    patients.map((patient)=>{
        return(
        //    <div class="row">
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                {/* <img src={doctor.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
//                     <div className="caption">
//                         <h3>{patient.name}</h3>
//                         <p>{patient.phone}</p>
//                         <p>{patient.email}</p>
//                         <p>{patient.password}</p>
//                         <p>
//                             <button onClick={editPat} className='btn btn-primary'>Edit</button>
//                             <a class="btn btn-danger" role="button" onClick={deletePatient}>Delete</a>
//                         </p>
//                     </div>
//                 </div>
//             </div> 
//         );       
//     })       
//     }
//     </div>
// </div> 