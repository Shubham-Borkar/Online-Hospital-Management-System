import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageDoctors(props) {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    var flagg = false;

    useEffect(() => {
        console.log("inside componentDidMount..");
        select();
    }, [])

    const select = () => {
        debugger;
        if (!flagg) 
        {
            var tokenn=sessionStorage.getItem("token")
        const url = 'doctor';
        axios.get(`${BaseApi.server_url}${url}`,
        { headers: {"Authorization" : `Bearer ${tokenn}`}})
            .then(res => {
                debugger
                console.log(res.data)
                setDoctors(res.data);
            })
            .catch(error => {
                debugger
                console.log(error)
            })
    }
    flagg = true
}

         const handleFileChange=(event) => {
          debugger;
          setSelectedFile(event.target.files[0]); 
        };
        
        

        // const handleRefresh = () => {
        //   debugger
        //   window.location.reload();
        // };

    const handlefilesubmit=(event) => {
        debugger
        const imageInput = new FormData();
        console.log(selectedFile);
        imageInput.append('imageFile', selectedFile);
        // debugger
        // for (var key of imageInput.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        debugger
        var tokenn=sessionStorage.getItem("token")
        const url= `adminstaff/uploadStaffImage/${event.target.value}`;
        axios.post(`${BaseApi.server_url}${url}`, imageInput, 
        {
          headers: {
              'Content-Type': 'multipart/form-data', 
          },
      })
      .then(response => {
          debugger;
          console.log(response)
        //   handleRefresh() 
          toast.success(`Image will be updated shortly`)
      })
      .catch(error => {
         debugger
          console.error('Image upload failed:', error);
      });
    }

    const editDoc = (args) => {
        navigate(`/editDoctor/${args.target.value}`)
    }

    const deleteDoctor = (args) => {
        debugger
        console.log("delete doctor called");
        console.log(args.target.value)
        toast.error(`doctor${args.target.value} delete called`)
    }

    const addDoc = () => {
        navigate("/addDoctor")
    }


    debugger;
    return (<>
        <hr />
        <div>
            <center>
                <button className="btn btn-outline-warning" onClick={addDoc}>Add Doctor</button>
                <br /> <br />
                {
                    doctors.map((doctor) => {
                        debugger
                        let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${doctor.staffid}`
                        let altImg = `doc${doctor.id} img`
                        return (<>
                            <div className="card mb-6" style={{ maxWidth: 900, backgroundColor: 'skyblue' }}>
                                <div className="row g-0" >
                                    <div className="col-md-4">
                                        <img style={{ width: 500, height: 320 }}
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
                                            <p>
                                                 
                                                {/* <form onSubmit={handlefilesubmit}> */}
        <input type="file" name="image" id="imageInput" accept="image/*"   onChange={handleFileChange} ></input>
        {/* <button className="btn btn-outline-primary" name="image" id="imageFile" type="submit">Update Image</button> */}
        {/* </form> */}
                                                <button onClick={(e) => handlefilesubmit(e)} className='btn btn-outline-primary' value={doctor.staffid}>Update Image</button> &emsp;&emsp;&emsp;&emsp;&emsp;
                                                <button onClick={(e) => editDoc(e)} className='btn btn-outline-success' value={doctor.id}>Edit</button> &emsp;&emsp;
                                                <button onClick={(e) => deleteDoctor(e)} className='btn btn-outline-danger' value={doctor.id}>Delete</button>
                                                {/* <a className="btn btn-outline-danger" role="button" value={doctor.id} onClick={(e)=>deleteDoctor(e)}>Delete</a> &emsp;&emsp;
        <a className="btn btn-outline-info" role="button" value={doctor.id} onClick={(e)=>updateImg(e)}>Update Image</a>  */}
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

export default ManageDoctors;
