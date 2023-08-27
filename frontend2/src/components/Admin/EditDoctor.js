import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EditDoctor(props) {

        // const did = props.data
        var {did} = useParams();
        const [name, setName] = useState("")
        const [education, setEducation] = useState("")
        const [speciality, setSpeciality] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [imagePath, setImagePath] = useState("")


        useEffect(()=>{
                debugger
                console.log(did)
                console.log("inside componentDidMount..");
                select(); 
              }, [])

        const select=()=>{
                debugger;
                const url= `doctor/${did}`;
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
                <form>
                        <h1><center>Edit Doctor</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        <div className='form-group input-group-sm'><h5> full name</h5>
                        <input type="text" className='form-control widthSize'
                                name="name"
                                value={name}
                                onChange={e=> setName(e.target.value)}
                                />
                        </div> <br />

                        <div className='form-group input-group-sm'><h5> education</h5>
                        <input type="text" className='form-control widthSize'
                                name="education"
                                value={education}
                                onChange={e=> setEducation(e.target.value)}/>
                        </div> <br />
                        <div className='form-group input-group-sm'><h5>speciality</h5>
                        <input type="text" className='form-control widthSize'
                                name="speciality"
                                value={speciality}
                                onChange={e=> setSpeciality(e.target.value)}/>
                        </div> <br />
                        <div className='form-group'><h5>phone</h5>
                        <input type="text" className='form-control widthSize'
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div> <br />
                       
                        <div className='form-group'><h5>address</h5>
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
                     
                </form>
                </div>
                </center>
                   {/* <Footer/>    */}
    </> );
}

export default EditDoctor;