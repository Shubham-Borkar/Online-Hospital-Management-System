import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function AddDoctor() {

        const [name, setName] = useState("")
        const [gender, setGender] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState("")
        const [address, setAddress] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [education, setEducation] = useState("")
        const [speciality, setSpeciality] = useState("")
        const [day, setDay] = useState("")


        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                currentdate();
              }, [])

        const currentdate=()=>{
                debugger
                var today, dd, mm, mmm, yyyy;
                today= new Date();
                dd=today.getDate()-1;
                mm=today.getMonth()+1;
                if(mm<10)
                        mm= '0'+mm
                yyyy=today.getFullYear();
                const dddd = yyyy+'-'+mm+'-'+dd;
                setDay(dddd)
        }

        const clearFields=()=>{
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
                setEducation("")
                setSpeciality("")
        }

//     const addDoc=()=>{
//         debugger;
//         var tokenn=sessionStorage.getItem("token")
//         const url= `adminstaff/register/doctor/${education}/${speciality}`
//         axios.post(`${BaseApi.server_url}${url}`,
//         { headers: {"Authorization" : `Bearer ${tokenn}`}},
//         {
//                 name, gender, dob, phone, address, email, password
//         })
//         .then(res=>{
//                 debugger
//                 console.log(res.data);
//                 clearFields()
//                 toast.success('Registration successful')
//         })
//         .catch(error=>{
//                 debugger
//                 console.log(error)
//                 toast.error('please try again')
//         })
//     }

const addDoc = () => {
        debugger;
        var tokenn = sessionStorage.getItem("token");
        const url = `adminstaff/register/doctor/${education}/${speciality}`;
        
        const headers = {
            "Authorization": `Bearer ${tokenn}`
        };
    
        const requestData = {
            name,
            gender,
            dob,
            phone,
            address,
            email,
            password
        };
    
        axios.post(`${BaseApi.server_url}${url}`, requestData, { headers })
            .then(res => {
                debugger;
                console.log(res.data);
                clearFields();
                toast.success('Registration successful');
            })
            .catch(error => {
                debugger;
                console.log(error);
                toast.error('please try again');
            });
    };
    

    return ( <div>
        <section className="vh-100 " style={{ backgroundColor: "#063d76" }}>
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
                {/* <form> */}
                        <h1><center>Add Doctor</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group'><h5>Full name</h5>
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'><b> Gender:</b>
                        &emsp; &emsp;
                        <input type="radio" value="Male" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Male &emsp;
                        <input type="radio" value="Female" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Female &emsp;
                        <input type="radio" value="Rather not say" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Rather not say
                        </div> <br />

                        <div className='form-group'><h5>Education</h5>
                        <input type="text" className='form-control widthSize'
                                name="education"
                                value={education}
                                onChange={e=> setEducation(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'><h5>Speciality</h5>
                        <input type="text" className='form-control widthSize'
                                name="speciality"
                                value={speciality}
                                onChange={e=> setSpeciality(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'><h5>Date of birth</h5>
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

                        <div className='form-group'><h5>Email</h5>
                        <input type="text" className='form-control widthSize'
                                name="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'><h5>Password</h5>
                        <input type="password" className='form-control widthSize'
                                name="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}/>
                        </div> <br />

                        <button className='btn btn-outline-info'
                                onClick={addDoc}>
                                Add Doctor
                        </button>
                        </div> <br /> 
                     
                {/* </form> */}
                </div> 
                </center>
                </div> 
                        </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </section> <br /><br /><br /><br /><br /><br /><br /><br />
    </div> );
}

export default AddDoctor;