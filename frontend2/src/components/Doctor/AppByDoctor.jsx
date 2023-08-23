import axios from "axios";
import { useState } from "react";
import { BaseApi } from '../api/BaseApi';

function AppByDoctor() {
    const [date,setDate]=useState("");
    const [patAppts, setPatAppts] = useState([]);

    const getlist=()=>{
        debugger;
        const did=1;
        const url= `appointment/get/${date}/${did}`;
       // const url= `appointment/patient/1`;
        axios.get(`${BaseApi.server_url}${url}`)
        .then(res=>{
                debugger;
                setPatAppts(res.data);
                console.log(res.data)
                })
        }

    return (  <><h1>Appointments by date</h1>
    
    <input type="date"id="input" class="form-control" title="" placeholder="Enter the Date to Get Appointment"  value={date} name="date" onChange={e=>setDate(e.target.value)}/>
    <button type="button" class="btn btn-large btn-block btn-info" onClick={getlist}>Get Appointments By Date</button>


    <div className='table-responsive'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th></tr>
                        {
                        patAppts.map( (s)=> {
                                return <><tr>
                                        <td>{s.id}</td>
                                        <td>{s.patient.name}</td>
                                        <td>{s.apointdate}</td>
                                        <td>{s.slot}</td>
                                        <td>{s.symptoms}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="5">
                                            <b>Patient Information  - </b>
                                        Gender={s.patient.gender} ,Dob={s.patient.dob} ,Contact Info={s.patient.phone}

                                            </td>
                                       
                                        </tr>
                                       </>
                                       
                                           })
                        }
                           </tbody>
    </table>
    </div>
    
    
    </>);
}

export default AppByDoctor;