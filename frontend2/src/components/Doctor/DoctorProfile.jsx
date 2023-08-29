import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import { toast } from "react-toastify";
function DoctorProfile() {
 
    const [doc,setDoc]=useState([])
    let [sidi,setSidi]=useState(0)
    const [selectedFile, setSelectedFile] = useState(null);
    const [flag,setFlag]=useState(0)
    // let [sidd,setSidd]=useState(0)
    const [imglink,setImglink]=useState("")
    useEffect(()=>{
        getdocinfo(); 
       }, [])
      //  useEffect(()=>{
      //   getdocinfo(); 
      //  }, [flag])
       
       
       const getdocinfo=()=>{
  
        debugger
        var tokenn=sessionStorage.getItem("token")
        const url= `doctor/${sessionStorage.getItem("did")}`;
         axios.get(`${BaseApi.server_url}${url}`,
         { headers: {"Authorization" : `Bearer ${tokenn}`}})
         .then(res=>{
            debugger;
            setDoc(res.data);
            setSidi(+res.data.staffid);
            let imagecall= `adminstaff/getStaffImage/${res.data.staffid}`
            setImglink(`${BaseApi.server_url}${imagecall}`)})
          .catch((err)=>console.log(err))
         }

         const handleFileChange=(event) => {
          debugger;
          setSelectedFile(event.target.files[0]); 
        };
        const handleRefresh = () => {
          debugger
         // window.location.reload();
        };



         const handlefilesubmit=(event) => {
          debugger
          event.preventDefault();
          const imageInput = new FormData();
          console.log(selectedFile);
          imageInput.append('imageFile', selectedFile);
          debugger
          for (var key of imageInput.entries()) {
              console.log(key[0] + ', ' + key[1]);
          }
          debugger
          const url= `adminstaff/uploadStaffImage/${sidi}`;
          axios.post(`${BaseApi.server_url}${url}`, imageInput, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        })
        .then(response => {
            debugger;
            // handleRefresh() 
            toast.success('Image added Sucessfully,Refresh to See latest Changes')
        })
        .catch(error => {
           debugger
            console.log(error);
            toast.info('image not submitted')
        });
          

        };

    return (  <><h1>Doctor profile details</h1>
    
    <center>
    <div className="card mb-6" style={{ maxWidth: 800 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img style={{ width: 500, height: 250 }} src={imglink} className="img-fluid rounded-start" alt="Please Upload the image" />
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

        <p>
        <form onSubmit={handlefilesubmit}>
        <input type="file" name="image" id="imageInput" accept="image/*"   onChange={handleFileChange} ></input>
        <button className="btn btn-info" name="image" id="imageFile" type="submit">Update Image</button>
        </form>
        </p>

      </div>
    </div>
  </div>
</div>


</center>
    
    </>);
}

export default DoctorProfile;