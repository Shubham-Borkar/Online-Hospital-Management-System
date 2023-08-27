import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { BaseApi } from '../api/BaseApi';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

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
        const form = useRef();

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                // select();
              }, [message])

        const clearFields=()=>{
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
        }

        const validate=()=> {
                debugger
                if(!password==confPass)
                setMessage("Passwords did not match")
               
                else 
                register()
        }

        // const EmailContactForm = () => {
        //         const form = useRef();
               
                const sendEmail = () => {
                        debugger
                //   e.preventDefault(); 
                  // prevents the page from reloading when you hit “Send”
               
                  emailjs.sendForm('service_kv8eu6x', 'template_wv6wan9', form.current, 'r7LqBferEnrpeUpWH')
                    .then((result) => {
                        debugger
                        toast.success('Email Sent')
                    }, (error) => {
                        debugger
                        toast.warning('invalid email')
                    });
                };
        

   const register=()=>{
        debugger;
        const url= 'patient/register'
        // sendEmail()
        axios.post(`${BaseApi.server_url}${url}`,
        {
                name, gender, dob, phone, address, email, password
        })
        .then(res=>{
                debugger
                console.log(res.data);
                
                toast.success('Registration successful')
                clearFields()
        })
        .catch(error=>{
                debugger
                toast.error('please try again')
                console.log(error)
               
        })
   }

    return (<>
                        <center>
                        <h1>Register here</h1>
                        <hr />
                        <div>{message}</div>
                        <div className="table-bordered">
                        <form ref={form}>
                        <div className='form-group'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>gender:
                        &emsp; &emsp;
                        <input type="radio" value="Male" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Male
                        <input type="radio" value="Female" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Female
                        <input type="radio" value="Rather not say" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Rather not say
                        </div> <br />
                         
                        <div className='form-group'>dob
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>phone
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>address
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>email
                        <input type="text" className='form-control widthSize'
                                name="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)} required/>
                        </div> <br />

                        <div className='form-group'>password
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
                        </form>
                        </div> <br />
                        </center>
            </>);
}

export default Register;
