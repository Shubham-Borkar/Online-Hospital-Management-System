import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function DoctorList() {

  const [doctors, setDoctors] = useState([])
  // const [doctor, setDoctor] = useState({id: 0, name: "", gender: "", address: "", dob: "",
  //                                         phone: "", education: "", speciality: ""})

  useEffect(() => {
    console.log("inside componentDidMount..");
    select();
  }, [])

  const select = () => {
    debugger;
    const url = 'doctor';
    axios.get(`${BaseApi.server_url}${url}`)
      .then(res => {
        setDoctors(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (<>
    <hr />
    <div>
      <center>
        {
          doctors.map((doctor) => {
            let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${doctor.id}`
            console.log(imgSrc)
            let altImg = `doc${doctor.id} img`
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
                      <h5 className="card-title">{doctor.id}. Dr.{doctor.name} (Contact No:{doctor.phone}) </h5>
                      <hr></hr>
                      <p className="card-text">
                        Dr.<b>{doctor.name}</b>  is a distinguished medical professional with a specialization in &nbsp;
                        <b>{doctor.speciality}</b>. They had completed their education as <b>{doctor.education}</b>,
                        they are from <b>{doctor.address}</b>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Date of Birth <b>{doctor.dob}</b></small>
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

{/* <center>
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
</center> */}

// {
//     doctors.map( (doctor) =>{
//         return (<div>
//                     <br/> 
//                     <h4>{doctor.id}</h4>
//                     <h4>{doctor.name}</h4>
//                     <h4>{doctor.education}</h4>
//                     <h4>{doctor.speciality}</h4>
//                     <hr/> <hr/> 
//                 </div>);
//     })
// }

export default DoctorList;