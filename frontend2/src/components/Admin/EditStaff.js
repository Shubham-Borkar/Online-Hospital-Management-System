import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
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
        const [gender, setGender] = useState("")
        const [day, setDay] = useState("")
        var flagg = false

        useEffect(()=>{
                debugger
                
                console.log(sid)
                console.log("inside componentDidMount..");
                select(); 
                currentdate();
              }, [])

              const select=()=>{
                debugger;
                if (!flagg) {
                var tokenn=sessionStorage.getItem("token")
                const url= `adminstaff/${sid}`;
                axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                .then(res=>{
                        debugger
                        setAddress(res.data.address)
                        setDob(res.data.dob)
                        setName(res.data.name)
                        setPhone(res.data.phone)
                        setGender(res.data.gender)
                        toast.info(`HelperStaff: ${res.data.name} details`)
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                        toast.info("Error, HelperStaff doesn't exist")
                })
                flagg=true
        }
            }

            const currentdate=()=>{
                debugger
                var today, dd, mm, mmm, yyyy;
                today= new Date();
                dd=today.getDate()-1;
                mm=today.getMonth()+1;
                if(mm<10)
                        mm= '0'+mm
                yyyy=today.getFullYear();
                const dddd = yyyy+'-'+mm+'-'+dd;
                setDay(dddd)
        }

        //     const update=()=>{
        //         debugger
        //         var tokenn=sessionStorage.getItem("token")
        //         const url= `adminstaff/${sid}`;
        //         axios.put(`${BaseApi.server_url}${url}`,
        //         { headers: {"Authorization" : `Bearer ${tokenn}`}},
        //         {
        //                 name, phone, dob, address, gender
        //         })
        //         .then(res=>{
        //                 debugger
        //                 console.log(res.data);
        //                 toast.success('Changes applied successfully')
        //                 setAddress(res.data.address)
        //                 setDob(res.data.dob)
        //                 setName(res.data.name)
        //                 setPhone(res.data.phone)
        //                 setGender(res.data.gender)
        //         })
        //         .catch(error=>{
        //                 debugger
        //                 toast.info('please try again')
        //                 console.log(error)
        //         })
        //    }

        const update = () => {
                debugger;
                var tokenn = sessionStorage.getItem("token");
                const url = `adminstaff/${sid}`;
                
                const headers = {
                    "Authorization": `Bearer ${tokenn}`
                };
            
                const requestData = {
                    name,
                    phone,
                    dob,
                    address,
                    gender
                };
            
                axios.put(`${BaseApi.server_url}${url}`, requestData, { headers })
                    .then(res => {
                        debugger;
                        console.log(res.data);
                        toast.success('Changes applied successfully');
                        setAddress(res.data.address);
                        setDob(res.data.dob);
                        setName(res.data.name);
                        setPhone(res.data.phone);
                        setGender(res.data.gender);
                    })
                    .catch(error => {
                        debugger;
                        toast.info('please try again');
                        console.log(error);
                    });
            };
            

    debugger;
    return ( <div>
        <section className="vh-70 " style={{ backgroundColor: "#063d76" }}>
    <div className="container py-10 h-50">
      <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col col-xl-6">
          <div className="card" style={{ borderRadius: "2rem" }}>
            <div className="row g-0">
            <div className="col-md-12 col-lg-12 d-flex align-items-center">
                <div className="card-body p-10 p-lg-50 text-orange">
                  {/* <form> */}
                    <div className="align-items-center">
                      <span className="h6 fw-bold">
                        <img src={BaseApi.base_url+'assets/images/img.png'} style={{width:'100px', height: '60px'}}></img>
                        Mars Hospitals</span>
                    </div>
            <center> 
                <div style={{width:"600px"}}>
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

                        <div className='form-group'>Gender
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="gender"
                                value={gender}
                                onChange={e=> setGender(e.target.value)}/>
                        </div> <br />

                        <div className='form-group'>Contact No.
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="phone"
                                value={phone}
                                onChange={e=> setPhone(e.target.value)}/>
                        </div>  <br />

                        <div className='form-group'>Date of birth
                        <input type="date" className='form-control'
                                style={{width: 500}}
                                name="dob"
                                value={dob}
                                onChange={e=> setDob(e.target.value)} max={day}/>
                        </div> <br />

                        <div className='form-group'><h5>Address</h5>
                        <input type="text" className='form-control widthSize'
                                name="address"
                                value={address}
                                onChange={e=> setAddress(e.target.value)}/>
                        </div> <br />

                        <button className='btn btn-outline-info'
                                onClick={update}>
                                Apply Changes
                        </button>
                        </div> <br />
                     
                </div>
                </center>
                </div> 
                        </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </section>
    </div> );
}

export default EditStaff;