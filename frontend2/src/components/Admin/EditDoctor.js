import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';

function EditDoctor(props) {

        
        const [name, setName] = useState("")
        const [education, setEducation] = useState("")
        const [speciality, setSpeciality] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [imagePath, setImagePath] = useState("")


        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                select(); 
              }, [])

        const select=()=>{
                debugger;
                const url= 'doctor/1';
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setEducation(res.data.education)
                        setSpeciality(res.data.speciality)
                        setImagePath(res.data.imagePath)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                })
            }

        const update=()=>{
                debugger
                const url= 'patient/1';
                axios.put(`${BaseApi.server_url}${url}`,
                {
                        name, education, speciality, phone, address
                })
                .then(res=>{
                        debugger
                        console.log(res.data);
                        select();
                })
                .catch(error=>{
                        console.log(error)
                })
           }

    debugger;
    return ( <>
                {/* <Header/> */}
            <center> <br /><br /><br /><br />
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Edit Doctor</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
                        </div>
                        <div className='form-group input-group-sm'>education
                        <input type="text" className='form-control widthSize'
                                name="education"
                                value={education}
                                onChange={e=> setEducation(e.target.value)}/>
                        </div>
                        <div className='form-group input-group-sm'>speciality
                        <input type="text" className='form-control widthSize'
                                name="speciality"
                                value={speciality}
                                onChange={e=> setSpeciality(e.target.value)}/>
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
                        
                        <button className='btn btn-success'
                                onClick={update}>
                                Save changes
                        </button>
                        </div>
                     
                </form>
                </div>
                </center>
                   {/* <Footer/>    */}
    </> );
}

export default EditDoctor;