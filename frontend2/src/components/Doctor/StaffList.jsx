import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BaseApi } from '../api/BaseApi';
import { hfortoken } from "../Admin/ProtectedRoute";
import { toast } from "react-toastify";

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
            setStaffs(result.data);
            console.log(setStaffs)})  
        .catch((error)=>{
            debugger
            toast.info('Error Getting Data')})  
     }
  

    return ( <>
    <h1>Staff List</h1>
    <center>
                        {/* {
                        staffs.map( (s)=> {
                                return <><tr>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.gender}</td>
                                        <td>{s.address}</td>
                                        <td>{s.dob}</td>
                                        <td>{s.phone}</td>
                                       </tr>
                                       <tr>&nbsp;</tr>
                                       </>
                                           })


                         //
                                        }
                                         */}
                                         {
                         staffs.map((staff) => {
                            let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${staff.id}`
                            console.log(imgSrc)
                            let altImg = "Staff Image Not Uploded"
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
                                            <h5>Staff Id : <b>{staff.id}</b></h5>
                                                <h5>Name : <b>{staff.name}</b></h5>
                                                <h5>Gender : <b>{staff.gender}</b></h5>
                                                <h5>Date of birth : <b>{staff.dob}</b></h5>
                                                <h5>phone : <b>{staff.phone}</b></h5>
                                                <h5>address : <b>{staff.address}</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </>);
                        })
                         
                         //
                        }
    </center>
    
    </> );
}

export default StaffList;