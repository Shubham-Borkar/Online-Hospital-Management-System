import { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { BaseApi } from "../api/BaseApi";

function DoctorsDetails(props) 
{
    debugger;
        const [emps,setEmps] =  
            useState([
                {quote_id: 0,text : "doctor 1 data", author: "AA aa a aa",user_id: 1,
                    img: `${BaseApi.base_url}assets/adminimg/doctors/d1.png`},
                {quote_id: 0,text : "doctor 2 data", author: "AA a a a a a a aa",user_id: 2,
                    img: `${BaseApi.base_url}assets/adminimg/doctors/d2.png`},
                {quote_id: 0,text : "doctor 3 data", author: "AA a a a a a a aa",user_id: 3,
                    img: `${BaseApi.base_url}assets/adminimg/doctors/d3.jpg`},
                {quote_id: 0,text : "doctor 4 data", author: "AA a a a a a a aa",user_id: 4,
                    img: `${BaseApi.base_url}assets/adminimg/doctors/d4.png`}
                ]);

//     const OnTextChange=(args)=>{
//         // var copyOfUser = {...user};
//         // copyOfUser[args.target.name] = args.target.value;
//         // setUser(copyOfUser);
//         console.log("value entered");
//    }

   const updatedoctor=()=>{
        console.log("Update doctor called");
   }
   const editdoctor=()=>{
        console.log("edit doctor called");
   }
   const deletedoctor=()=>{
        console.log("delete doctor called");
   }
   const adddoctor=()=>{
    debugger;
    // history.push("/adddoctor")
}
debugger;
    return (<>


<Header/>
<div className='table-responsive'> <br /><br /><br /><br />
<button className="btn btn-outline-primary"
                                    onClick={adddoctor}>Add Doctor</button>
             <div className="row">
                {
                        emps.map((emp)=>{
                                return(
                                //    <div class="row">
                                    <div className="col-sm-6 col-md-4" >
                                        <div className="thumbnail">
                                        <img src={emp.img} alt="Image 1" style={{height:"300px",width:"300px"}}/>
                                        <div className="caption">
                                            <h3>Thumbnail label</h3>
                                            <p>{emp.text}</p>
                                            <p><a href="#" class="btn btn-primary" role="button">Edit</a> 
                                            <a href="#" class="btn btn-danger" role="button">Delete</a></p>
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

export default DoctorsDetails;
