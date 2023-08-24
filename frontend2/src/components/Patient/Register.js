import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { BaseApi } from '../api/BaseApi';
import { useState } from 'react';
import { toast } from 'react-toastify';

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

        const clearFields=()=>{
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
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
                                <br /><br />
                        <h1><center>Register here</center></h1>
                        <hr />
                        <div className="table-bordered">
                              
                        <div className='form-group'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}/>
                        </div>

                        <div className='form-group'>gender:
                        &emsp; &emsp;
                        <input type="radio" value="Male" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Male
                        <input type="radio" value="Female" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Female
                        <input type="radio" value="Rather not say" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Rather not say
                        </div>
                         
                        <div className='form-group'>dob
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)}/>
                        </div>

                        <div className='form-group'>phone
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div>

                        <div className='form-group'>address
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div>

                        <div className='form-group'>email
                        <input type="text" className='form-control widthSize'
                                name="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}/>
                        </div>

                        <div className='form-group'>password
                        <input type="text" className='form-control widthSize'
                                name="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}/>
                        </div> 
                        
                        <button className='btn btn-success'
                                onClick={register}>
                                Register
                        </button>
                        </div>
                        </center>
            </>);
}

export default Register;
