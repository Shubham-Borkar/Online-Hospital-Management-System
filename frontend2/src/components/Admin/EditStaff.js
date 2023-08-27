import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function EditStaff(props) {

        var {sid} = useParams();
        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [email, setEmail] = useState("")

        useEffect(()=>{
                debugger
                console.log(sid)
                console.log("inside componentDidMount..");
                select(); 
              }, [])

              const select=()=>{
                debugger;
                const url= `adminstaff/${sid}`;
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                        setEmail(res.data.email)
                })
            }

            const update=()=>{
                debugger
                const url= `adminstaff/${sid}`;
                axios.put(`${BaseApi.server_url}${url}`,
                {
                        name, email, phone, dob, address
                })
                .then(res=>{
                        debugger
                        console.log(res.data);
                        toast.success('Changes applied successfully')
                        select();
                })
                .catch(error=>{
                        debugger
                        toast.error('please try again')
                        console.log(error)
                })
           }

    debugger;
    return ( <>
            <center> 
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Update HelperStaff</center></h1>
                        <hr />
                        <div className="table-bordered">
                        <br />
                        <div className='form-group'>Name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'>Email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="Email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'>Contact No.
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div>  <br />

                        <div className='form-group'>DOB
                        <input type="date" className='form-control'
                                style={{width: 500}}
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'><h5>address</h5>
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div> <br />

                        <button className='btn btn-success'
                                onClick={update}>
                                Apply Changes
                        </button>
                        </div> <br />
                     
                </form>
                </div>
                </center>
    </> );
}

export default EditStaff;