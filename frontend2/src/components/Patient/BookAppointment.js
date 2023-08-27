import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/app.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function BookAppointment() 
{
        // const [appts, setAppts] = useState([]);
        const [patient, setPatient] = useState({id: 0, name: "", gender: "", dob: "", phone: "", 
                                                address: "", imagePath: ""})
        let [did, setDid] = useState("")
        const [pid, setPid] = useState(sessionStorage.getItem("id"))
        let [apointdate, setApointdate] = useState("")
        let [slot, setSlot] = useState("")
        const [symptoms, setSymptoms] = useState("")
        const [doctors, setDoctors] = useState([])
        const [slottime, setSlotime] = useState(["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM",
                                                "4 PM", "5 PM"])
        let [slotsbooked, setSlotsbooked] = useState([])
        let [stoshow, setStoshow] = useState([])
        const [day, setDay] = useState("")
        const [mday, setMday] = useState("")

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                getDoct(); 
                getPat();
                currentdate();
              }, [])

        useEffect(()=>{
                debugger
                console.log("inside componentDidUpdate..");
                setSlotsbooked([])
                console.log(slotsbooked)
                setStoshow([])
                console.log(stoshow)
              }, [did, apointdate])

        // useEffect(()=>{
        //         debugger
        //         console.log("inside componentDidUpdate..");
        //         setSlotsbooked([])
        //         console.log(slotsbooked)
        //         setStoshow([])
        //         console.log(stoshow)
        //       }, [apointdate])

        const uniqueElement=()=>{
                debugger
                let array = slottime.filter(function(obj) { return slotsbooked.indexOf(obj) == -1; });
                console.log(array)
                setStoshow(array)
                console.log(stoshow)
        }

        const currentdate=()=>{
                debugger
                var today, dd, mm, mmm, yyyy;
                today= new Date();
                dd=today.getDate()+1;
                mm=today.getMonth()+1;
                if(mm<10)
                        mm= '0'+mm
                mmm=today.getMonth()+3;
                if(mmm<10)
                        mmm= '0'+mmm
                yyyy=today.getFullYear();
                const dddd = yyyy+'-'+mm+'-'+dd;
                setDay(dddd)
                const ddd = yyyy+'-'+mmm+'-'+dd;
                setMday(ddd)
        }

        const slotFunbydid=(args)=>{
                debugger
                setDid(+args.target.value)
                const url = `appointment/appSlotList/${args.target.value}/${apointdate}`
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        let arr = res.data
                        arr.map( (a)=>{
                                slotsbooked.push(a)
                        })
                        console.log(slotsbooked)
                        uniqueElement()
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                })
        }

        const slotFunbyDate=(args)=>{
                debugger
                setApointdate(args.target.value)
                console.log(apointdate)
                const url = `appointment/appSlotList/${did}/${args.target.value}`
                axios.get(`${BaseApi.server_url}${url}`)
                .then(res=>{
                        debugger
                        let arr = res.data
                        arr.map( (a)=>{
                                slotsbooked.push(a)
                        })
                        console.log(slotsbooked)
                        uniqueElement()
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                })
        }

        const handleChangeSlot=function(e){
                debugger
                setSlot(e.target.value);
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
                var p=sessionStorage.getItem("id")
                setPid(p)
                console.log(pid)
                // Comment this later//////////////////////////////////
                if(pid==0)
                toast.error("wrong pid")
                const url2 = `patient/${sessionStorage.getItem("id")}`
                axios.get(`${BaseApi.server_url}${url2}`)
                .then(res=>{
                        debugger
                        setPatient(res.data)
                })
        }

        const addAppt=()=>{
        debugger
        console.log(pid)
        if(pid==0)
                toast.error("wrong pid")
        const url3 = "appointment/addappointment"
        axios.post(`${BaseApi.server_url}${url3}`,
        {
               pid, slot, symptoms, apointdate, did
        })
        .then(response=>{
                debugger
                console.log(response.data)
                toast.success('booking successful')
        })
        .catch(error=>{
                debugger
                console.log(error)
                toast.success('please try again')
        })
   }

    return (<>
            <center>

    <section className="vh-100 " style={{ backgroundColor: "#063d76" }}>
    <div className="container py-10 h-50"> <br /><br /><br />
      <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col col-xl-6">
          <div className="card" style={{ borderRadius: "2rem" }}>
            {/* <div className="row g-0"> */}
            {/* <div className="col-md-2 col-lg-1 d-flex align-items-center"> */}
                {/* <div className="card-body p-0 p-lg-0 text-orange"> */}
                       
                        <h1>Book Appointment</h1> <hr />
                        <div className="table-bordered"> 
                        <div className='form-group input-group-sm appstyle'>Appointment Date
                        <input type="date" className='form-control appstyle'
                                style={{width: 400}}
                                name="app_date"
                                onChange={slotFunbyDate} min={day} max={mday}/>
                                {/* e=> setApointdate(e.target.value) */}
                        </div> <br />

                        <div className='form-group input-group-sm appstyle'>Symptoms
                        <input type="text" className='form-control appstyle'
                                style={{width: 400}}
                                name="symptoms"
                                onChange={e=> setSymptoms(e.target.value)}/>
                        </div> <br />

                        <div className='form-group input-group-sm appstyle'>Doctor
                                <select  id="did" onChange={slotFunbydid} name="doctor" style={{width: 400, height: 30}}>
                                {
                                        doctors.map( (doc)=> {
                                                return <option value={doc.id} id={doc.id}>{doc.name} ({doc.speciality})</option>
                                        })
                                }
                                </select>
                        </div> <br />

                        <div className='form-group input-group-sm appstyle'>Appointment Slot <br/>
                                <select  id="slotno" onChange={handleChangeSlot} name="app_slotno" style={{width: 400, height: 30}}>
                                {
                                        stoshow.map( (sl)=> {
                                                debugger
                                                return <option value={sl} id={sl}>{sl}</option>
                                        })

                                }
                                </select>
                        </div> <br />
                        
                        <button className='btn btn-success'
                                onClick={addAppt}>
                                Add Appointment
                        </button>
                        </div> <br /> <br /><br />
                        {/* </div> */}

                        
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  </center>
            </>);
}

export default BookAppointment;
