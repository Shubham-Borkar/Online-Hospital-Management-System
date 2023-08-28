import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BaseApi } from '../api/BaseApi';
import { hfortoken } from "../Admin/ProtectedRoute";

function StaffList() {
    const [staffs,setStaffs] =  useState([]);
    const [staff,setstaff]=useState({id:0,name:"",gender:"",address:"",dob:"",phone:0});
    const [name,setName]=useState();
    
    useEffect(() => {
        loadStaff();
     }, []); 

     function loadStaff() {
        debugger
        var tokenn=sessionStorage.getItem("token");
        const url= 'adminstaff/helperstaff';
        debugger;
        axios.get(`${BaseApi.server_url}${url}`,
        { headers: {"Authorization" : `Bearer ${tokenn}`}}
        )
        .then((result)=>{
            debugger
            setStaffs(result.data);console.log(setStaffs)})  
        .catch((error)=>{
            debugger
            console.log(error)})  
     }
  

    return ( <>
    <div className='table-responsive'>
    <table className='table table-bordered myTable'>
                           <tbody>
                            <tr><th>Helper Staff Id</th><th>Name</th><th>Gender</th><th>Address</th><th>Dob</th><th>Phone</th></tr>
                        {
                        staffs.map( (s)=> {
                                return <tr>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.address}</td>
                                        <td>{s.dob}</td>
                                        <td>{s.phone}</td>
                                       </tr>
                                           })
                        }
                           </tbody>
    </table>
    <h5>{name}</h5>
    </div>
    
    </> );
}

export default StaffList;