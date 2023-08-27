import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EditPatient(props) {

        // const [pid, ]
        var {pid} = useParams();
        const [ppid, setPpid] = useState(pid)
        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        // const [dob, setDob] = useState("")
        const [address, setAddress] = useState("")


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
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                        // setDob(res.data.dob)
                })
                .catch(error=>{
                        debugger
                        toast.warning("Error, Patient doesn't exist")
                })
            }

        const update=()=>{
                debugger
                const url= `patient/${pid}`;
                axios.put(`${BaseApi.server_url}${url}`,
                {
                        name, dob, phone, address
                })
                .then(res=>{
                        debugger
                        console.log(res.data);
                        toast.success('Updates saved successfully')
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
                {/* <form> */}
                        <h1><center>Edit Patient</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
                        </div> <br />

                        <div className='form-group'>phone
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'>dob
                        <input type="date" className='form-control widthSize'
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)}/>
                        </div> <br />
                       
                        <div className='form-group'>address
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div> <br />
                        
                        <button className='btn btn-outline-success'
                                onClick={update}>
                                Apply changes
                        </button>
                        </div> <br />
                     
                {/* </form> */}
                </div>
                </center>
    </> );
}

export default EditPatient;