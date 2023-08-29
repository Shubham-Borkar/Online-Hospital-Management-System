import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import { toast } from "react-toastify";
function ManageApp() {
   const [aid,setAid]=useState(0);
   const [pre,setPre]=useState("");
   const [flagg,setFlagg]=useState(0);
   const [alist,setAlist]=useState([]);


   useEffect(()=>{
    console.log("values"+aid+pre+flagg+alist)
     select(); 
    }, [])
    useEffect(()=>{
        select(); 
       }, [flagg])

   const select=()=>{
    var tokenn=sessionStorage.getItem("token");
    const url= `appointment/doctor/${sessionStorage.getItem("did")}`;
     axios.get(`${BaseApi.server_url}${url}`,
     { headers: {"Authorization" : `Bearer ${tokenn}`}})
     .then(res=>{
        setAlist(res.data);
        debugger
        console.log(res.data)
             })
             .catch((err)=>{debugger; console.log(err)})
     }

     const changestatus=()=>{
        var tokenn=sessionStorage.getItem("token")
    const url= `appointment/updatestatus/${aid}`;
     axios.post(`${BaseApi.server_url}${url}`,{},
     {
          headers:{
           Authorization : `Bearer ${tokenn}`,
         },
     })
     .then(res=>{
        debugger
        toast.success('Appointment Status Changed Sucessfully')
        console.log(res.data)
        var b=flagg+1;
        setFlagg(b);
             })
             .catch((err)=>{
                debugger
                console.log(err)})
     }
     
     const addprescribtion=()=>{
        const url= `appointment/editprescription/${aid}/${pre}`;
        var tokenn=sessionStorage.getItem("token")
        axios.post(`${BaseApi.server_url}${url}`,
        {},
        {
             headers:{
              Authorization : `Bearer ${tokenn}`,
            },
        }
        )
        .then(res=>{
            debugger
            var x=flagg+1;
            setFlagg(x);
            toast.success('Prescription Added Sucessfully')
           console.log(res.data)
                })
                .catch((err)=>{
                    toast.info('Error While Inserting Prescription')
                debugger
                console.log(err)})
     }
   
    return ( <><h1>Hello Doctor !!!</h1>
               <h3>Manage Your Appointments Here</h3>
    <br></br>
    <center>
        <div className='table-responsive col-md-6'>
            <table>
            <tr>
                <td> <input type="number" className="form-control" placeholder="Enter Appointment Id" aria-describedby="basic-addon2" value={aid} name='pid' onChange={e=>setAid(e.target.value)}/></td>
                <td>&emsp;</td>
                <td>
                <button type="button" class="btn btn-outline-info" onClick={changestatus}>Enter the Aid to Mark it as Checked</button>
                </td>
            </tr>

            <tr>
                <td>
                <input type="text" className="form-control" placeholder="Type Aid and Prescribtion to update Prescribtion" aria-describedby="basic-addon2" value={pre} name='pid' onChange={e=>setPre(e.target.value)}/>
                </td>
                <td>&emsp;</td>
                <td>
                <button type="button" class="btn btn-outline-info" onClick={addprescribtion}>Text to be inserted in a Prescribtion</button>
                </td>
            </tr>
            </table>
       
    <br/>
        </div>


  <div className='table-responsive col-md-8'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Appointment Id</th><th>Name</th><th>Date</th><th>Slot</th><th>Symptoms</th><th>Status</th></tr>
                            <tr><br></br></tr>
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
                                        Gender={s.patient.gender} ,Dob={s.patient.dob} ,Contact Info={s.patient.phone},Prescribtion={s.prescribe}

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
    </> );
}

export default ManageApp;