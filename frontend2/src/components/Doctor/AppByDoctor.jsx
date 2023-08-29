import axios from "axios";
import { useState } from "react";
import { BaseApi } from '../api/BaseApi';
import { toast } from "react-toastify";

function AppByDoctor() {
    const [date,setDate]=useState("");
    const [pattAppts, setPattAppts] = useState([]);

    const getlist=()=>{
        var tokenn=sessionStorage.getItem("token")
       const url=`appointment/getAppList/${date}/${sessionStorage.getItem("did")}`
       axios.get(`${BaseApi.server_url}${url}`,
       { headers: {"Authorization" : `Bearer ${tokenn}`}})
        .then(res=>{
                debugger;
                setPattAppts(res.data);
                if(res.data.length==0)
                toast.info('No Appointments for Given data')
                })
                .catch((error)=>{
                    toast.info('Error getting data')
                    console.log(error)})  
        }

    return (  <><h1>Appointments for Doctor by date</h1>
     <br/>
    <center>
    <div className='table-responsive col-md-6' >
        <table >
        <tr>
            <td> <input type="date"id="input" class="form-control" title="" placeholder="Enter the Date to Get Appointment"  value={date} name="date" onChange={e=>setDate(e.target.value)}/><td>
            </td>  <button type="button" class="btn btn-outline-info" onClick={getlist}>Get Appointments By Date</button></td>
        </tr>
        </table>
        </div>
 
    <div className='table-responsive col-md-8'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th><th>Status</th></tr>
                        {
                       pattAppts.map( (s)=> {
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

export default AppByDoctor;