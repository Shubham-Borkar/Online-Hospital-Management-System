import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageStaff(props) {

    const navigate = useNavigate();
    const [staffs, setStaffs] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        console.log("inside componentDidMount..");
        select();
    }, [])

    const select = () => {
        debugger;
        var tokenn=sessionStorage.getItem("token")
        const url = 'adminstaff/helperstaff';
        axios.get(`${BaseApi.server_url}${url}`,
        { headers: {"Authorization" : `Bearer ${tokenn}`}})
            .then(res => {
                setStaffs(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleFileChange=(event) => {
        debugger;
        setSelectedFile(event.target.files[0]); 
      };

      const handleRefresh = () => {
        debugger
        // window.location.reload()
      };

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
      axios.post(`${BaseApi.server_url}${url}`, imageInput, {
        headers: {
            'Content-Type': 'multipart/form-data', 
        },
    })
    .then(response => {
        debugger;
        console.log(response)
        // handleRefresh() 
        toast.success(`staff id.${event.target.value} photo updated, please refresh`)
    })
    .catch(error => {
       debugger
        console.log('Image upload failed:', error);
        toast.info('Image updation failed, please try again')
    });
  }

    const editSt = (args) => {
        debugger;
        navigate(`/editStaff/${args.target.value}`)
    }

    const deleteStaff = (args) => {
        console.log("delete staff called");
        toast.error(`staff${args.target.value} delete called`)
    }

    const addSt = () => {
        debugger;
        navigate("/addStaff")
    }


    debugger;
    return (<>
        <hr />
        <div>
            <center>
                <button className="btn btn-outline-warning" onClick={addSt}>Add Staff</button>
                <br /> <br />

                {
                    staffs.map((staff) => {
                        let imgSrc = `${BaseApi.server_url}adminstaff/getStaffImage/${staff.id}`
                        console.log(imgSrc)
                        let altImg = `staff${staff.id} img`
                        
                        return (<>
                            <div className="card mb-6" style={{ maxWidth: 900, backgroundColor: 'skyblue' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img style={{ width: 500, height: 270 }}
                                            src={imgSrc}
                                            className="img-fluid rounded-start"
                                            alt={altImg} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title"> Staff : {staff.name} (Contact No:{staff.phone}) Id:{staff.id}</h5>
                                            <hr></hr>
                                            <p className="card-text">
                                            <h6>Gender : <b>{staff.gender}</b></h6>
                                            <h6>Date of birth : <b>{staff.dob}</b></h6>
                                            <h6>address : <b>{staff.address}</b></h6>
                                            </p>
                                            <p>
                                            <input type="file" name="image" id="imageInput" accept="image/*"   onChange={handleFileChange} ></input>
                                                
                                                <button onClick={(e) => handlefilesubmit(e)} className='btn btn-outline-primary' value={staff.id}>Update Image</button> &emsp;&emsp;&emsp;&emsp;
                                                <button onClick={(e) => editSt(e)} className='btn btn-outline-success' value={staff.id}>Edit Staff</button> &emsp;&emsp;
                                                <button onClick={(e) => deleteStaff(e)} className='btn btn-outline-danger' value={staff.id}>Delete Staff</button> &emsp;&emsp;
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

export default ManageStaff;

{/* <div className='table-responsive'> <br /><br /><br /><br />
            <button className="btn btn-outline-primary" onClick={addS}>Add Staff</button>
            <div className="row">
                {
                    staffs.map((staff) => {
                        return (
                            //    <div class="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    {/* <img src={emp.img} alt="Image 1" style={{height:"300px",width:"300px"}}/> */}
        //                             <div className="caption">
        //                                 <h3>{staff.name}</h3>
        //                                 <p>{staff.phone}</p>
        //                                 <p>{staff.email}</p>
        //                                 <p>
        //                                     <button onClick={editS} className='btn btn-primary'>Edit</button>
        //                                     <a class="btn btn-danger" role="button" onClick={deleteStaff}>Delete</a>
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     // </div>

        //                 );
        //             })
        //         }
        //     </div>

        // </div> 