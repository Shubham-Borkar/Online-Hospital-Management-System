import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
function ManageApp() {
   const [aid,setAid]=useState(0);
   const [pre,setPre]=useState("");
   const [flagg,setFlag]=useState("");
   const [alist,setAlist]=useState([]);


   useEffect(()=>{
     select(); 
    }, [])
    useEffect(()=>{
        select(); 
       }, [flagg])

   const select=()=>{
    let did=1;
    const url= `appointment/doctor/${did}`;
     axios.get(`${BaseApi.server_url}${url}`)
     .then(res=>{
        setAlist(res.data);
        console.log(res.data)
             })
             .catch((err)=>console.log(err))
     }

     const changestatus=()=>{
    const url= `appointment/updatestatus/${aid}`;
     axios.post(`${BaseApi.server_url}${url}`)
     .then(res=>{
        console.log(res.data)
        setFlag("a");
             })
             .catch((err)=>console.log(err))
     }
     
     const addprescribtion=()=>{
        const url= `appointment/editprescription/${aid}/${pre}`;
        axios.post(`${BaseApi.server_url}${url}`)
        .then(res=>{
            setFlag("a");
           console.log(res.data)
                })
                .catch((err)=>console.log(err))
     }
   
    return ( <><h1>Hello Doctor !!!</h1>
               <h3>Manage Your Appointments Here</h3>
    <br></br>
    <input type="number" className="form-control" placeholder="Enter Appointment Id" aria-describedby="basic-addon2" value={aid} name='pid' onChange={e=>setAid(e.target.value)}/>
    <br/>

  <button type="button" class="btn btn-large btn-block btn-info" onClick={changestatus}>Type Aid and Press key to Change Status</button>
  <br/>
  <hr />

  <input type="text" className="form-control" placeholder="Type Aid and Prescribtion to update Prescribtion" aria-describedby="basic-addon2" value={pre} name='pid' onChange={e=>setPre(e.target.value)}/>
<br/>

  <button type="button" class="btn btn-large btn-block btn-info" onClick={addprescribtion}>Type Aid and Prescribtion to update Prescribtion</button>
  <br/>
  <hr />



  <div className='table-responsive'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th><th>Status</th></tr>
                        {
                        alist.map( (s)=> {
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
                                            <td colspan="5">
                                            <b>Patient Information  - </b>
                                        Gender={s.patient.gender} ,Dob={s.patient.dob} ,Contact Info={s.patient.phone} ,Prescribtion={s.prescribe}

                                            </td>
                                       
                                        </tr>
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
    
    </> );
}

export default ManageApp;