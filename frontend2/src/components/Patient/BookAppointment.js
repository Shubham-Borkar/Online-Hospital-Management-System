import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/app.css'
import { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';

function BookAppointment() 
{
        // const [appts, setAppts] = useState([]);
        const [patient, setPatient] = useState({id: 0, name: "", gender: "", dob: "", phone: "", 
                                                address: "", imagePath: ""})
        const [appt, setAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: "", patient});
        const [did, setDid] = useState(0)
        const [pid, setPid] = useState(2)
        const [apointdate, setApointdate] = useState("")
        const [slot, setSlot] = useState("")
        const [symptoms, setSymptoms] = useState("")
        const [doctor, setDoctor] = useState({id: 0, name: "", gender: "", address: "",  dob: "", 
                                                phone: "", education: "", speciality: ""})
        const [doctors, setDoctors] = useState([])
        const [patientt, setPatientt] = useState({me: "me"})


        useEffect(()=>{
                console.log("inside componentDidMount..");
                getDoct(); 
                getPat()
              }, [])

        const handleChangeDid=function(e){
                setDid({did:e.target.value});
              }

        const handleChangeSlot=function(e){
                setSlot({slot:e.target.value});
              }
//         const OnTextChange=(args)=>{
//         // var copyOfUser = {...user};
//         // copyOfUser[args.target.name] = args.target.value;
//         // setUser(copyOfUser);
//         console.log("value entered");
//    }

//    const update=()=>{
//         // 1236547890
//         alert('Are you sure to book appointment');
//         console.log("Button clicked");
//         // add
//    }

   
        // var helper = new XMLHttpRequest();
        // helper.onreadystatechange = ()=>{
        //     if(helper.readyState == 4 && helper.status == 200)
        //         {
        //             debugger;
        //             var responseReceived = JSON.parse(helper.responseText);
        //             if(responseReceived.affectedRows==1)
        //             {
        //                 // setMessage("Appointment added Successfully!")
        //                 setAppt({id: 0, date: "", slot: "", symptoms: ""});
        //             }
        //             else
        //             {
        //                 // setMessage("Something went wrong!, Please try again");
        //                 setAppt({id: 0, date: "", slot: "", symptoms: ""});
        //             }
        //         }
        // };
        // helper.open("POST","http://127.0.0.1:8181/appointment/add/"+pid+"/"+did);
        // helper.setRequestHeader("Content-Type", "application/json")
        // helper.send(JSON.stringify(appt));
        const getDoct=()=>{
                debugger
                const url1 = 'doctor'
                axios.get(`${BaseApi.server_url}${url1}`)
                .then(res=>{
                        debugger
                        setDoctors(res.data)
                })
        }

        const getPat=()=>{
                debugger
                const url2 = `patient/${pid}`
                axios.get(`${BaseApi.server_url}${url2}`)
                .then(res=>{
                        debugger
                        setPatient(res.data)
                })
        }

        const addAppt=()=>{
        debugger
        const url3 = "appointment/addappointment"
        axios.post(`${BaseApi.server_url}${url3}`,
        {
               pid, slot, symptoms, apointdate, did
        })
        .then(response=>{
                debugger
                console.log(response.data)
        })
        .catch(error=>{
                debugger
                console.log(error)
        })
   }

    return (<>
                        <center> <br /> <br /> <br />
                        <h1>Book Appointment</h1> <hr />

                        <div className="table-bordered"> 
                        <div className='form-group input-group-sm appstyle'>Appointment Date
                        <input type="date" className='form-control appstyle'
                                style={{width: 500}}
                                name="app_date"
                                onChange={e=> setApointdate(e.target.value)}/>
                        </div> <br />

                        <div className='form-group input-group-sm appstyle'>Appointment Slot <br/>
                                <select id="slotno" onChange={handleChangeSlot} name="app_slotno" style={{width: 500}}>
                                        <option value="10 am">10 am</option>
                                        <option value="11 am">11 am</option>
                                        <option value="12 pm">12 pm</option>
                                        <option value="1 pm">1 pm</option>
                                </select>
                        </div> <br />

                        <div className='form-group input-group-sm appstyle'>Symptoms
                        <input type="text" className='form-control appstyle'
                                style={{width: 500}}
                                name="symptoms"
                                onChange={e=> setSymptoms(e.target.value)}/>
                        </div> <br />

                        <div className='form-group appstyle'>Doctor
                                <select id="did" onChange={handleChangeDid} name="doctor" style={{width: 500}}>
                                {
                                        doctors.map( (doc)=> {
                                                return <option value={doc.id}>{doc.name} ({doc.speciality})</option>
                                        })
                                }
                                </select>
                        </div> 
                        
                        <button className='btn btn-success'
                                onClick={addAppt}>
                                Add Appointment
                        </button>
                        </div>
                        </center>
            </>);
}

export default BookAppointment;
