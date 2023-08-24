import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';

function StaffAvailability(props) 
{
   
    const [staffs, setStaffs] = useState([])
    
    useEffect(()=>{
        console.log("inside componentDidMount..");
        select(); 
      }, [])

    const select=()=>{
        debugger;
        const url= 'adminstaff';
        axios.get(`${BaseApi.server_url}${url}`)
        .then(res=>{
            setStaffs(res.data);
        })
    }

debugger;
    return (<>
<hr />
                <div>
                    <center>
                        {
                                staffs.map( (staff) =>{
                                        return (<div>
                                                <br/> 
                                                <h4>{staff.name}</h4>
                                                <h4>{staff.role}</h4>
                                                <h4>{staff.phone}</h4>
                                                <h4>{staff.email}</h4>
                                                <hr/> <hr/> 
                                        </div>);
                                })
                        }
                    </center>
                </div>
                        
            </>);
}

export default StaffAvailability;
