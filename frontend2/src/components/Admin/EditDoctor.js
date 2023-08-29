import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EditDoctor(props) {

        var {did} = useParams();
        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [gender, setGender] = useState("")
        const [sid, setSid] = useState("")
        const [day, setDay] = useState("")
        var flagg = false


        useEffect(()=>{
                debugger
                console.log(did)
                console.log("inside componentDidMount..");
                select(); 
                currentdate();
              }, [])

        const select=()=>{
                debugger;
                if (!flagg) {
                var tokenn=sessionStorage.getItem("token")
                const url= `doctor/${did}`;
                axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                .then(res=>{
                        debugger
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setGender(res.data.gender)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                        setSid(res.data.staffid)
                        toast.info(`Doctor: ${res.data.name} details`)
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                        toast.info("Error, Doctor doesn't exist")
                })
                flagg=true
        }

            }

            const currentdate=()=>{
                debugger
                var today, dd, mm, yyyy;
                today= new Date();
                dd=today.getDate()-1;
                mm=today.getMonth()+1;
                if(mm<10)
                        mm= '0'+mm
                yyyy=today.getFullYear();
                const dddd = yyyy+'-'+mm+'-'+dd;
                setDay(dddd)
        }

        // const update=()=>{
        //         debugger
        //         var tokenn=sessionStorage.getItem("token")
        //         const url= `adminstaff/${sid}/ROLE_DOCTOR`;
        //         axios.put(`${BaseApi.server_url}${url}`,
        //         { headers: {"Authorization" : `Bearer ${tokenn}`}},
        //         {
        //                 name, education, speciality, phone, address
        //         })
        //         .then(res=>{
        //                 debugger
        //                 console.log(res.data);
        //                 // select();
        //                 toast.success('Updates saved successfully')
        //                 setAddress(res.data.address)
        //                 setDob(res.data.dob)
        //                 setEducation(res.data.education)
        //                 setSpeciality(res.data.speciality)
        //                 // setImagePath(res.data.imagePath)
        //                 setName(res.data.name)
        //                 setPhone(res.data.phone)
        //                 setSid(res.data.staffid)
        //         })
        //         .catch(error=>{
        //                 debugger
        //                 console.log(error)
        //                 toast.info('please try again')
        //         })
        //    }

        const update = () => {
                debugger;
                var tokenn = sessionStorage.getItem("token");
                const url = `adminstaff/${sid}`;
                
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
                        setSid(res.data.staffid);
                    })
                    .catch(error => {
                        debugger;
                        console.log(error);
                        toast.info('please try again');
                    });
            };

            

    debugger;
    return ( <div>
        <section className="vh-70 " style={{ backgroundColor: "#063d76" }}>
    <div className="container py-10 h-50">
      <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col col-xl-6">
          <div className="card" style={{ borderRadius: "2rem" }}>
            <div className="row g-0">
            <div className="col-md-12 col-lg-12 d-flex align-items-center">
                <div className="card-body p-10 p-lg-50 text-orange">
                  {/* <form> */}
                    <div className="align-items-center">
                      <span className="h6 fw-bold">
                        <img src={BaseApi.base_url+'assets/images/img.png'} style={{width:'100px', height: '60px'}}></img>
                        Mars Hospitals</span>
                    </div>
            <center> 
                <div style={{width:"600px"}}>
                        <h1><center>Edit Doctor</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group input-group-sm'><h5> Full Name</h5>
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
                        </div> <br />

                        <div className='form-group input-group-sm'><h5> Gender</h5>
                        <input type="text" className='form-control widthSize'
                                name="gender"
                                value={gender}
                                onChange={e=> setGender(e.target.value)}/>
                        </div> <br />
                        <div className='form-group input-group-sm'><h5>Date Of Birth</h5>
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)} max={day}/>
                        </div> <br />
                        <div className='form-group'><h5>Phone</h5>
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div> <br />
                       
                        <div className='form-group'><h5>Address</h5>
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div> <br />
                        
                        <button className='btn btn-outline-info'
                                onClick={update}>
                                Apply changes
                        </button>
                        </div> <br />
                </div>
                </center>
                </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div> );
}

export default EditDoctor;