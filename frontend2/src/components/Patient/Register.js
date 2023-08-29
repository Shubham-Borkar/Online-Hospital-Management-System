import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import { BaseApi } from '../api/BaseApi';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Register() 
{
        debugger
        const [name, setName] = useState("")
        const [gender, setGender] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState("")
        const [address, setAddress] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confPass, setConfPass] = useState("")
        const [message, setMessage] = useState("")
        const [day, setDay] = useState("")
        const [mday, setMday] = useState("")

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                currentdate();
              }, [])

        useEffect(()=>{
                debugger
                console.log("inside componentDidUpdate..");
              }, [message])

        const clearFields=()=>{
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
                setConfPass("")
        }

        const currentdate=()=>{
                debugger
                var today, dd, mm, mmm, yyyy;
                today= new Date();
                dd=today.getDate()-1;
                mm=today.getMonth()+1;
                if(mm<10)
                        mm= '0'+mm
                mmm=today.getMonth()+1;
                if(mmm<10)
                        mmm= '0'+mmm
                yyyy=today.getFullYear();
                const dddd = yyyy+'-'+mm+'-'+dd;
                setDay(dddd)
                const ddd = yyyy+'-'+mmm+'-'+dd;
                setMday(ddd)
        }

        const validate=()=> {
                debugger
                // const abc = [name, gender, dob, phone, address, email, password]
                // abc.map((a)=>{
                //         debugger
                //         if (a=="")
                //         toast.warning(`Please, Enter full ${a}`)
                // })
                // var em=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
                // /\S+@\S+\.\S+/
                // const em=/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
                if (name  =="") 
                toast.info('Please, Enter full name')
                else if (/^\d+$/.test(name))
                toast.info('Invalid, name contains numbers')
                else if (gender=="")
                toast.info('Please, Choose Gender')
                else if (dob=="")
                toast.info('Please, Enter date of birth')
                else if (phone=="")
                toast.info('Please, Enter phone')
                else if (!(/^\d{10}$/.test(phone)))
                // else if (/^[0-9]{10}$/.test(phone))
                toast.info('Incorrect Phone no')
                else if (address=="")
                toast.info('Please, Enter address')
                else if (/^\d+$/.test(address))
                toast.info('Invalid, address contains numbers')
                else if (email=="")
                toast.info('Please, Enter email')
                else if (!(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email)))
                toast.info('Please, Enter valid email')
                else if (password=="")
                toast.info('Please, Enter password')
                // else if (^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$.test(password))
                // toast.warning('Password must contain at least 1 capital, 1 small, a no & 1 special character')
                else if(password!=confPass)
                toast.info("Passwords did not match")
                else
                register()
        }

   const register=()=>{
        debugger;
        const url= 'patient/register'
        axios.post(`${BaseApi.server_url}${url}`,
        {
                name, gender, dob, phone, address, email, password
        })
        .then(res=>{
                debugger
                console.log(res.data);
                clearFields()
                toast.success('Registration successful')
        })
        .catch(error=>{
                debugger
                toast.info('spmething went Wrong. Please, try again')
                console.log(error)
               
        })
   }
 
    return (<div>
        {/* ////////////////////////////// */}
        <section className="vh-50 " style={{ backgroundColor: "#063d76" }}>
    <div className="container py-1 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
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
            
                        <center>
                        <h1>Register here</h1>
                        <hr />
                        <div>{message}</div>
                        <div className="table-bordered">
                        {/* <form ref={form}> */}
                        <div className='form-group'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group box'>Gender:
                        &emsp; &emsp;
                        <input type="radio" value="Male" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Male &emsp;&emsp;
                        <input type="radio" value="Female" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Female &emsp;&emsp;
                        <input type="radio" value="Rather not say" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Rather not say
                        </div> <br />
                         
                        <div className='form-group'>Date of Birth
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)} max={mday} required/>
                        </div> <br />

                        <div className='form-group'>Phone
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>Address
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>Email
                        <input type="text" className='form-control widthSize'
                                name="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>Password
                        <input type="password" className='form-control widthSize'
                                name="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>Confirm password
                        <input type="password" className='form-control widthSize'
                                name="confPass"
                                value={confPass}
                                onChange={e=> setConfPass(e.target.value)} required/>
                        </div> <br />
                        
                        <button className='btn btn-outline-success'
                                onClick={validate}>
                                Register
                        </button> 
                        </div> <br />Already registered ?
                        <Link to="/login" className="small">Click here</Link>
                        </center>
                        </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
            </div>);
}

export default Register;
