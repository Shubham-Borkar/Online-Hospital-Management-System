import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
function DoctorProfile() {
    // {
    //     "id": 1,
    //     "name": "Somya",
    //     "gender": "Male",
    //     "address": "Kolkata",
    //     "dob": "1990-01-01",
    //     "phone": 7418529630,
    //     "education": "MBBS",
    //     "speciality": "Heart"
    //   }

    const [doc,setDoc]=useState([])
    const [imglink,setImglink]=useState("")
    useEffect(()=>{
        getdocinfo(); 
       }, [])

       const getdocinfo=()=>{
        debugger
        let did=1;
        const url= `doctor/${did}`;
        
         axios.get(`${BaseApi.server_url}${url}`)
         .then(res=>{
            debugger;
            setDoc(res.data);
            setImglink(`${BaseApi.server_url}${res.image_path}`)
            console.log(imglink)
            console.log(res.data)
                 })
                 .catch((err)=>console.log(err))
         }
    return (  <><h1>Doctor profile details</h1>
    
    <center>
    <div className="card mb-6" style={{ maxWidth: 800 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{ width: 500, height: 250 }} src="http://localhost:8181/adminstaff/getStaffImage/3" className="img-fluid rounded-start" alt="Please Upload the image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Id.{doc.id} Dr.{doc.name} Contact No.{doc.phone} </h5>
        <hr></hr>
        <p className="card-text">
        
Dr.<b>{doc.name}</b>  is a distinguished medical professional with a specialization in <b>{doc.speciality}</b>. They had completed their education as <b>{doc.education}</b>,They are from <b>{doc.address}</b>
        </p>
        <p className="card-text">
          <small className="text-muted">Date of Birth <b>{doc.dob}</b></small>
        </p>
      </div>
    </div>
  </div>
</div>
</center>
    
    </>);
}

export default DoctorProfile;