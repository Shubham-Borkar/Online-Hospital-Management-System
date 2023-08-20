import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import StaffEdit from './StaffEdit';

function StaffDetails(props) 
{
    const [emps,setEmps] =  
    useState([{name:"Name of Staff",text : "staff 1 data staff 1 data staff 1 data staff 1 data staff 1 data staff 1 data staff 1 data staff 1 data", author: "AA aa a aa",user_id: 1,img:
    "http://localhost:3000/adminimg/doctors/d1.png"},
    {name:"Name of Staff",text : "staff 2 data staff 2 data staff 2 data staff 2 data staff 2 data staff 2 data staff 2 data staff 2 data staff 2 data", author: "AA a a a a a a aa",user_id: 1,img:
    "http://localhost:3000/adminimg/doctors/d2.png"},
    {name:"Name of Staff",text : "staff 3 data staff 3 data staff 3 data staff 3 data staff 3 data staff 3 data staff 3 data staff 3 data staff 3 data", author: "AA a a a a a a aa",user_id: 1,img:
    "http://localhost:3000/adminimg/doctors/d3.jpg"},
    {name:"Name of Staff",text : "staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data staff 4 data", author: "AA a a a a a a aa",user_id: 1,img:
    "http://localhost:3000/adminimg/doctors/d4.png"}]);
    debugger;
    const history=useHistory();
        debugger;
    const OnTextChange=(args)=>{
        // var copyOfUser = {...user};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
        console.log("value entered");
   }
   

   const updatestaff=()=>{
        console.log("Update doctor called");
   }
   const editstaff=()=>{
    debugger;
       <StaffEdit ></StaffEdit>
   }
   const deletedstaff=()=>{
        console.log("delete doctor called");
   }
   const addstaff=()=>{
    debugger;
    history.push("/addstaff")
}
debugger;
    return (<>
<Navbaaaar/>
<div className='table-responsive'> <br /><br /><br /><br />
<button className="btn btn-outline-primary"
                                    onClick={addstaff}>Add Staff</button>
             <div className="row">
                {
                        emps.map((emp)=>{
                                return(
                                //    <div class="row">
                                    <div className="col-sm-6 col-md-4">
                                        <div className="thumbnail">
                                        <img src={emp.img} alt="Image 1" style={{height:"300px",width:"300px"}}/>
                                        <div className="caption">
                                            <h3>Thumbnail label</h3>
                                            <p>{emp.text}</p>
                                            <p><button onClick={editstaff} className='btn btn-primary'>Editt</button><a  class="btn btn-primary" role="button" >Edit</a> <a href="#" class="btn btn-danger" role="button">Delete</a></p>
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

export default StaffDetails;
