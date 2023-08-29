import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";

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
    var tokenn=sessionStorage.getItem("token")
    const url = 'doctor';
    axios.get(`${BaseApi.server_url}${url}`,
    { headers: {"Authorization" : `Bearer ${tokenn}`}})
      .then(res => {
        debugger
        setDoctors(res.data);
      })
      .catch(error => {
        debugger
        console.log(error)
      })
  }

  return (<>
    <hr />
    <div>
      <center>
        {
          doctors.map((doctor) => {
            let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${doctor.staffid}`
            console.log(imgSrc)
            let altImg = `Doctor${doctor.id} img`
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

export default DoctorList;