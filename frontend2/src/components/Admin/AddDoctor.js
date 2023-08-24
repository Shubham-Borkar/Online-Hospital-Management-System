import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useState } from 'react';
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

        const clearFields=()=>{
                setName("") 
                setGender("")
                setDob("")
                setPhone("")
                setAddress("")
                setEmail("")
                setPassword("")
        }

    const addDoc=()=>{
        debugger;
        // const url= 'adminstaff/register/doctor/'+{education}+'/'+{speciality}
        const url= `adminstaff/register/doctor/${education}/${speciality}`
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

    return ( <>
                <Header/>
            <center> <br /><br /><br />
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Add Doctor</center></h1>
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
                        <input type="radio" value="Male" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Male
                        <input type="radio" value="Female" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Female
                        <input type="radio" value="Rather not say" name="gender" 
                                onChange={e=>setGender(e.target.value)}/> Rather not say
                        </div>

                        <div className='form-group'>education
                        <input type="text" className='form-control widthSize'
                                name="education"
                                value={education}
                                onChange={e=> setEducation(e.target.value)}/>
                        </div> 

                        <div className='form-group'>speciality
                        <input type="text" className='form-control widthSize'
                                name="speciality"
                                value={speciality}
                                onChange={e=> setSpeciality(e.target.value)}/>
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
                                onClick={addDoc}>
                                Add Doctor
                        </button>
                        </div>
                     
                </form>
                </div>
                </center>
                     {/* <Footer/>  */}
    </> );
}

export default AddDoctor;