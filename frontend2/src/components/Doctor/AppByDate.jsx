import axios from "axios";
import { useState } from "react";
import { BaseApi } from '../api/BaseApi';
import { toast } from "react-toastify";

function AppByDate() {
    const [date,setDate]=useState("");
    const [patAppts, setPatAppts] = useState([]);

    const getlist=()=>{
        debugger;
        var tokenn=sessionStorage.getItem("token")
        const url= `appointment/get/${date}`;
        axios.get(`${BaseApi.server_url}${url}`,
        { headers: {"Authorization" : `Bearer ${tokenn}`}})
        .then(res=>{
                debugger;
                setPatAppts(res.data);
                })
        .catch((err)=>console.log(err))
        }

    return (  <><h1>Appointments by Date</h1>
    
    <input type="date"id="input" class="form-control" title="" placeholder="Enter the Date to Get Appointment"  value={date} name="date" onChange={e=>setDate(e.target.value)}/>
    <button type="button" class="btn btn-large btn-block btn-info" onClick={getlist}>Get Appointments By Date</button>

   <center>
    <div className='table-responsive col-md-8'>
    <table className='table table-bordered myTable'>
    <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th><th>Status</th></tr>
                            <tr><br></br></tr>
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

export default AppByDate;