import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { toast } from 'react-toastify';

function Profile() 
{
        
        // const [id, setId] = useState(0)
        // const [profile, setProfile] = useState({name:"", gender:"", dob:"", phone:"", address:"", imagePath:"" })
        const [name, setName] = useState("")
        const [gender, setGender] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState("")
        const [address, setAddress] = useState("")
        // const [imagePath, setImagePath] = useState("")
        // const [pid, setPid] = useState(0)
        // const [pemail, setPEmail] = useState("")
        var pid=sessionStorage.getItem("id")
        

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                // getPat()
                select(); 
              }, [])

        //       useEffect(()=>{
        //         debugger
        //         console.log("inside componentDidMount..");
                // getPat()
                // select(); 
        //       }, [name, gender, dob, phone, address, imagePath])

        //       useEffect(()=>{
        //         debugger
        //         console.log("inside componentDidMount..");
        //         setProfile(name, gender, dob, phone, address, imagePath)
        //       }, [name, gender, dob, phone, address, imagePath])

        // const getPat=()=>{
        //         debugger
        //         pemail = sessionStorage.getItem("email");
        //         pid = sessionStorage.getItem("email");
        //         console.log(pemail)
        //         const url= `entry/ptemail/${pemail}`
        //         axios.get(`${BaseApi.server_url}${url}`)
        //         .then(res=>{
        //                 debugger
        //                 console.log(res.data)
        //                 setPid(res.data.id)
        //                 console.log(pid)
        //         })
        //         .catch(error=>{
        //                 debugger
        //                 console.log(error)
        //         })
        // }

        const select = ()=>{
                debugger;
                pid = sessionStorage.getItem("id");
                var tokenn=sessionStorage.getItem("token")
                const url= `patient/${sessionStorage.getItem("id")}`;
                axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                .then(res=>{
                        debugger
                        // setProfile(res.data);
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setGender(res.data.gender)
                        // setImagePath(res.data.imagePath)
                        setName(res.data.name)
                        setPhone(res.data.phone) 
                //         if(phone==0)
                // toast.info("wrong phone")
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                })
            };

//    const update= ()=>{
//         debugger
//         var tokenn=sessionStorage.getItem("token")
//         const url= `patient/${localStorage.getItem("id")}`;
//         axios.put(`${BaseApi.server_url}${url}`,
//         { headers: {"Authorization" : `Bearer ${tokenn}`}},
//         {
//                 name, gender, dob, phone, address
//         })

//         .then(res=>{
//                 debugger
//                 console.log(res.data);
//                 toast.success('Updates saved successfully')
//                 setAddress(res.data.address)
//                         setDob(res.data.dob)
//                         setGender(res.data.gender)
//                         setName(res.data.name)
//                         setPhone(res.data.phone)
//         })
//         .catch(error=>{
//                 debugger
//                 toast.info('please try again')
//                 console.log(error)
//         })
//    };

const update = () => {
        debugger;
        var tokenn = sessionStorage.getItem("token");
        const url = `patient/${sessionStorage.getItem("id")}`;
        
        const headers = {
            "Authorization": `Bearer ${tokenn}`
        };
    
        const requestData = {
            name,
            gender,
            dob,
            phone,
            address
        };
    
        axios.put(`${BaseApi.server_url}${url}`, requestData, { headers })
            .then(res => {
                debugger;
                console.log(res.data);
                toast.success('Updates saved successfully');
                setAddress(res.data.address);
                setDob(res.data.dob);
                setGender(res.data.gender);
                setName(res.data.name);
                setPhone(res.data.phone);
            })
            .catch(error => {
                debugger;
                toast.info('please try again');
                console.log(error);
            });
    };
    



    return (<div>
{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
<section className="vh-70 " style={{ backgroundColor: "#063d76" }}>
    <div className="container py-10 h-50">
      <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col col-xl-6">
          <div className="card" style={{ borderRadius: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-12 col-lg-12 d-flex align-items-center">
                <div className="card-body p-1 p-lg-5 text-orange">
                  {/* <form> */}
                    <div className="align-items-center">
                      <span className="h6 fw-bold">
                        <img src={BaseApi.base_url+'assets/images/img.png'} style={{width:'100px', height: '60px'}}></img>
                        Mars Hospitals</span>
                    </div>
                    {/* Form start////////////////////////////////////////////////////////// */}
                    <h1><center>My Profile</center></h1>
                        <hr />
                        <div className="table-bordered">
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}/>
                        </div> <br />

                        <div className='form-group input-group-sm'>gender
                        <input type="text" className='form-control widthSize'
                                name="gender"
                                value={gender}
                                onChange={e=> setGender(e.target.value)}/>
                        </div> <br />
                         <div className='form-group'>dob
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)}/>
                        </div>  <br />

                        <div className='form-group'>phone
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div> <br />
                       
                        <div className='form-group'>address
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div> <br />

                        {/* <div className='form-group'>image
                        <input type="text" className='form-control widthSize'
                                name="image"
                                value={imagePath}
                                onChange={e=> setImagePath(e.target.value)}/>
                        </div> <br /> */}

                        <button className='btn btn-outline-info'
                                onClick={update}>
                                Save changes
                        </button>
                        </div>
                    {/* Form end////////////////////////////////////////////////////////// */}
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
            </div>);
}

export default Profile;