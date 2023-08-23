import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from "react";
import StaffEdit from './EditStaff';
import { BaseApi } from '../api/BaseApi';
import EditStaff from './EditStaff';
import AddStaff from './AddStaff';
import axios from 'axios';

function ManageStaff(props) 
{

    const [staffs,setStaffs] =  useState([])

    useEffect(()=>{
        console.log("inside componentDidMount..");
        select(); 
            }, [])

    const select=()=>{
        debugger;
        const url= 'doctor';
        axios.get(`${BaseApi.server_url}${url}`)
            .then(res=>{
                setStaffs(res.data);
                        })
            .catch(error=> {
                console.log(error)
                        })
                }

    const editS=()=>{
        debugger;
        <EditStaff/>
            }

   const deleteStaff=()=>{
        console.log("delete staff called");
   }

   const addS=()=>{
    debugger;
    <AddStaff/>
}
debugger;
    return (<>
<Header/>
<div className='table-responsive'> <br /><br /><br /><br />
<button className="btn btn-outline-primary" onClick={addS}>Add Staff</button>
        <div className="row">
            {
                staffs.map((staff)=>{
                    return(
                    //    <div class="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                            {/* <img src={emp.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
                                <div className="caption">
                                    <h3>{staff.name}</h3>
                                    <p>{staff.phone}</p>
                                    <p>{staff.email}</p>
                                    <p>
                                        <button onClick={editS} className='btn btn-primary'>Edit</button>
                                        <a class="btn btn-danger" role="button" onClick={deleteStaff}>Delete</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                                    // </div>
                                   
                                );       
                                })       
            }
        </div>

</div>



<Footer/>
                        
            </>);
}

export default ManageStaff;
