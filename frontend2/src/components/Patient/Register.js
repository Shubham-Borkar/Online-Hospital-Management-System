import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { BaseApi } from '../api/BaseApi';
import { useState } from 'react';

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

   const register=()=>{
        debugger;
        const url= 'patient/register'
        axios.post(`${BaseApi.server_url}${url}`,
        {
                name, gender, dob, phone, address, email, password
        })
        .then(res=>{
                console.log(res.data);
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
        })
   }

    return (<>
                <Header/>
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
                        </div> <br />

                        <div className='form-group'>gender:
                        &emsp; &emsp;
                        <input type='radio' id='male' name='gender' value='male'/>
                        <label for="male">Male</label> &emsp; &emsp; &emsp;
                        <input type='radio' id='female' name='gender' value='female'/>
                        <label for="female">Female</label> &emsp; &emsp; &emsp;
                        <input type='radio' id='rather not say' name='gender' value='rather not say'/>
                        <label for="rather not say">Rather not say</label>
                        </div> <br />
                         
                        <div className='form-group'>dob
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)}/>
                        </div> <br />

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

                        <div className='form-group'>email
                        <input type="text" className='form-control widthSize'
                                name="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'>password
                        <input type="text" className='form-control widthSize'
                                name="password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}/>
                        </div> <br />
                        
                        <button className='btn btn-success'
                                onClick={register}>
                                Register
                        </button>
                        </div>
                        </center>
                        <Footer/>
            </>);
}

export default Register;
