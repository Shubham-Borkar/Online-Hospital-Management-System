import { useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

function PatHistory() {
    const [pid,setPid]=useState(0);
    const [patAppts, setPatAppts] = useState([]);
    const [patAppt, setPatAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: "",patient:{id:0,name:"",gender:"",address:"",dob:"",phone:0}});

    useEffect(()=>{
            console.log("on pid update");
           // select(); 
            }, [pid])

    const select=()=>{
            debugger;
            var tokenn=sessionStorage.getItem("token")
            const url= `appointment/patient/${pid}`;
           // const url= `appointment/patient/1`;
            axios.get(`${BaseApi.server_url}${url}`,
            { headers: {"Authorization" : `Bearer ${tokenn}`}})
            .then(res=>{
                    setPatAppts(res.data);
                    if(res.data.length==0)
                    toast.info('No Appointments Available')
                    })
            .catch(()=>toast.info('No Appointments Available'))
            }


    return (  <><h1>Patient Appointment Data using pid</h1>
    <center><div className='table-responsive col-md-4'>
    <input type="text" className="form-control" placeholder="Enter Patient Id" aria-describedby="basic-addon2" value={pid} name='pid' onChange={e=>setPid(e.target.value)}/>
  <button type="button" class="btn btn-large btn-block btn-info" onClick={select}>Get Appointments</button>
  <hr></hr>
  
        
        </div></center>
 

 <center>
  <div className='table-responsive col-md-8'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th><th>Status</th></tr>
                        {
                        patAppts.map( (s)=> {
                                if(s.status)
                                    return <><tr>
                                            <td>{s.id}</td>
                                            <td>{s.patient.name}</td>
                                            <td>{s.apointdate}</td>
                                            <td>{s.slot}</td>
                                            <td>{s.symptoms}</td>
                                            <td><div class="text-success" role="status">
                                            <span class="sr-only">Checked</span>
                                            </div></td>
    
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                <b>Patient Information  - </b>
                                            Gender={s.patient.gender} ,Dob={s.patient.dob} ,Contact Info={s.patient.phone} ,Prescribtion={s.prescribe}
    
                                                </td>
                                               
                                           
                                            </tr>
                                            <tr><br></br></tr>
                                           </>
    
                                           return <><tr>
                                            <td>{s.id}</td>
                                            <td>{s.patient.name}</td>
                                            <td>{s.apointdate}</td>
                                            <td>{s.slot}</td>
                                            <td>{s.symptoms}</td>
                                            <td><div class="spinner-grow text-danger" role="status">
                                            <span class="sr-only"></span>
                                            </div></td>
                                            
                                            </tr>
                                            <tr>
                                                <td colspan="6">
                                                <b>Patient Information  - </b>
                                            Gender={s.patient.gender} ,Dob={s.patient.dob} ,Contact Info={s.patient.phone}
    
                                                </td>
                                           
                                            </tr>
                                            <tr><br></br></tr>
                                           </>
                                           
                                               })
                        }
                           </tbody>
    </table>
    </div>
    </center>
    

 
    
    </>);
}

export default PatHistory;