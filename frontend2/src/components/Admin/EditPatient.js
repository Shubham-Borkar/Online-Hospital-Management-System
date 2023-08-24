import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';

function EditPatient(props) {

        
        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")


        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                select(); 
              }, [])

        const select=()=>{
                debugger;
                const url= 'patient/1';
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                })
            }

        const update=()=>{
                debugger
                const url= 'patient/1';
                axios.put(`${BaseApi.server_url}${url}`,
                {
                        name, dob, phone, address
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
            <center> <br /><br /><br /><br />
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Edit Patient</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
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
    </> );
}

export default EditPatient;