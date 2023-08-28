import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
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
        var tokenn=sessionStorage.getItem("token")
        const url= 'adminstaff';
        axios.get(`${BaseApi.server_url}${url}`,
        { headers: {"Authorization" : `Bearer ${tokenn}`}})
        .then(res=>{
            debugger
            setStaffs(res.data);
        })
        .catch(error=>{
            debugger
            console.log(error)
        })
    }

debugger;
    return (<>
<hr />
        <div>
            <center>

                {
                    staffs.map((staff) => {
                        debugger
                        let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${staff.id}`
                        console.log(imgSrc)
                        let altImg = `staff${staff.id} img`
                        debugger
                        if (staff.doctor != null)
                        
                        return (<>
                            <div className="card mb-6" style={{ maxWidth: 800, backgroundColor: 'skyblue' }}>
                                <div className="row g-0" >
                                    <div className="col-md-4">
                                        <img style={{ width: 500, height: 250 }}
                                            src={imgSrc}
                                            className="img-fluid rounded-start"
                                            alt={altImg} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Dr.{staff.name} (Contact No:{staff.phone}) Doc.id:{staff.doctor.id}</h5>
                                            <hr></hr>
                                            <p className="card-text">
                                                Dr.<b>{staff.name}</b>  is a distinguished medical professional with a specialization in
                                                <b>{staff.doctor.speciality}</b>. They had completed their education as <b>{staff.doctor.education}</b>,
                                                they are from <b>{staff.address}</b>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">Date of Birth <b>{staff.dob}</b></small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </>)
                        
                        else
                        return (<>
                            <div className="card mb-6" style={{ maxWidth: 800, backgroundColor: 'skyblue' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img style={{ width: 400, height: 230 }}
                                            src={imgSrc}
                                            className="img-fluid rounded-start"
                                            alt={altImg} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title"> Staff : {staff.name} (Contact No:{staff.phone}) Staff.id:{staff.id}</h5>
                                            <hr></hr>
                                            <p className="card-text">
                                            <h6>Gender : <b>{staff.gender}</b></h6>
                                            <h6>Date of birth : <b>{staff.dob}</b></h6>
                                            <h6>address : <b>{staff.address}</b></h6>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </>);
                    })
                }
            </center>
        </div>
                        
            </>);
}

export default StaffAvailability;
