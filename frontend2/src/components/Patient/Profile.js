import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/common.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { toast } from 'react-toastify';

function Profile() 
{
        
        const [profile, setProfile] = useState({id: 0, name: "", gender: "", dob: "", phone: "",  
                                                address: "", imagePath: ""});
        // const [id, setId] = useState(0)
        const [name, setName] = useState("")
        const [gender, setGender] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [imagePath, setImagePath] = useState("")
        const [pid, setPid] = useState(4)

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                select(); 
              }, [])

        const select=()=>{
                debugger;
                const url= `patient/${pid}`;
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        setProfile(res.data);
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setGender(res.data.gender)
                        setImagePath(res.data.imagePath)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                })
            }

   const update=()=>{
        debugger
        const url= `patient/${pid}`;
        axios.put(`${BaseApi.server_url}${url}`,
        {
                name, gender, dob, phone, address, imagePath
        })

        .then(res=>{
                debugger
                console.log(res.data);
                toast.success('Updates saved successfully')
                select()
        })
        .catch(error=>{
                debugger
                toast.error('please try again')
                console.log(error)
        })
   }

    return (<>
                        <center>
                        <h1><center>My Profile</center></h1>
                        <hr />
                        <div className="table-bordered">
                                <br />
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
                        </div>
                        <div className='form-group input-group-sm'>gender
                        <input type="text" className='form-control widthSize'
                                name="gender"
                                value={gender}
                                onChange={e=> setGender(e.target.value)}/>
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
                        <div className='form-group'>image
                        <input type="text" className='form-control widthSize'
                                name="image"
                                value={imagePath}
                                onChange={e=> setImagePath(e.target.value)}/>
                        </div>
                        <button className='btn btn-success'
                                onClick={update}>
                                Save changes
                        </button>
                        </div>
                        </center>
            </>);
}

export default Profile;