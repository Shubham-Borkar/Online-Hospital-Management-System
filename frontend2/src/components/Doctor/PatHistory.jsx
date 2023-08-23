import { useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from "axios";
import { useEffect } from "react";

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
            const url= `appointment/patient/${pid}`;
           // const url= `appointment/patient/1`;
            axios.get(`${BaseApi.server_url}${url}`)
            .then(res=>{
                    setPatAppts(res.data);
                    })
            }


    return (  <><h1>Patient Appointment Data using pid</h1>
  <input type="text" className="form-control" placeholder="Enter Patient Id" aria-describedby="basic-addon2" value={pid} name='pid' onChange={e=>setPid(e.target.value)}/>
  <br></br>
  <button type="button" class="btn btn-large btn-block btn-info" onClick={select}>Get Appointments</button>
  


  <div className='table-responsive'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th></tr>
                        {
                        patAppts.map( (s)=> {
                                return <tr>
                                        <td>{s.id}</td>
                                        <td>{s.id}</td>
                                        <td>{s.apointdate}</td>
                                        <td>{s.slot}</td>
                                        <td>{s.symptoms}</td>
                                       </tr>
                                           })
                        }
                           </tbody>
    </table>
    </div>
    

 
    
    </>);
}

export default PatHistory;