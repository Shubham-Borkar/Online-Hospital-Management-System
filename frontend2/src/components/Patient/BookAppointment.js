import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/app.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function BookAppointment() {
        // const [appts, setAppts] = useState([]);
        const [patient, setPatient] = useState({
                id: 0, name: "", gender: "", dob: "", phone: "",
                address: "", imagePath: ""
        })
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

        useEffect(() => {
                debugger
                console.log("inside componentDidMount..");
                getDoct();
                getPat();
                currentdate();
        }, [])

        useEffect(() => {
                debugger
                console.log("inside componentDidUpdate..");
                setSlotsbooked([])
                console.log(slotsbooked)
                setStoshow([])
                console.log(stoshow)
        }, [did, apointdate])

        const clearFields = () => {
                setDid("")
                setApointdate("")
                setSlot("")
        }

        const uniqueElement = () => {
                debugger
                let array = slottime.filter(function (obj) { return slotsbooked.indexOf(obj) == -1; });
                console.log(array)
                setStoshow(array)
                console.log(stoshow)
        }

        const currentdate = () => {
                debugger
                var today, dd, mm, mmm, yyyy;
                today = new Date();
                dd = today.getDate() + 1;
                mm = today.getMonth() + 1;
                if (mm < 10)
                        mm = '0' + mm
                mmm = today.getMonth() + 3;
                if (mmm < 10)
                        mmm = '0' + mmm
                yyyy = today.getFullYear();
                const dddd = yyyy + '-' + mm + '-' + dd;
                setDay(dddd)
                const ddd = yyyy + '-' + mmm + '-' + dd;
                setMday(ddd)
        }

        const slotFunbydid = (args) => {
                debugger
                setDid(+args.target.value)
                var tokenn = sessionStorage.getItem("token")
                const url = `appointment/appSlotList/${args.target.value}/${apointdate}`
                if(apointdate!="")
                axios.get(`${BaseApi.server_url}${url}`,
                        { headers: { "Authorization": `Bearer ${tokenn}` } })
                        .then(res => {
                                debugger
                                let arr = res.data
                                arr.map((a) => {
                                        slotsbooked.push(a)
                                })
                                console.log(slotsbooked)
                                uniqueElement()
                        })
                        .catch(error => {
                                debugger
                                console.log(error)
                        })
        }

        const slotFunbyDate = (args) => {
                debugger
                setApointdate(args.target.value)
                console.log(apointdate)
               
                
                var tokenn = sessionStorage.getItem("token")
                const url = `appointment/appSlotList/${did}/${args.target.value}`
                if(did!="") 
                axios.get(`${BaseApi.server_url}${url}`,
                        { headers: { "Authorization": `Bearer ${tokenn}` } })
                        .then(res => {
                                debugger
                                let arr = res.data
                                arr.map((a) => {
                                        slotsbooked.push(a)
                                })
                                console.log(slotsbooked)
                                uniqueElement()
                        })
                        .catch(error => {
                                debugger
                                console.log(error)
                        })
        }

        const handleChangeSlot = (e) => {
                debugger
                setSlot(e.target.value);
        }

        const getDoct = () => {
                debugger
                var tokenn = sessionStorage.getItem("token")
                const url1 = 'doctor'
                axios.get(`${BaseApi.server_url}${url1}`,
                        { headers: { "Authorization": `Bearer ${tokenn}` } })
                        .then(res => {
                                debugger
                                setDoctors(res.data)
                        })
                        .catch(error => {
                                debugger
                                console.log(error)
                        })
        }

        const getPat = () => {
                debugger
                var p = sessionStorage.getItem("id")
                setPid(p)
                console.log(pid)
                var tokenn = sessionStorage.getItem("token")
                const url2 = `patient/${sessionStorage.getItem("id")}`
                axios.get(`${BaseApi.server_url}${url2}`,
                        { headers: { "Authorization": `Bearer ${tokenn}` } })
                        .then(res => {
                                debugger
                                setPatient(res.data)
                        })
                        .catch(error => {
                                debugger
                                console.log(error)
                        })
        }

        //         const addAppt=()=>{
        //         debugger
        //         console.log(pid)
        //         if(pid==0)
        //                 toast.error("wrong pid")
        //         var tokenn=sessionStorage.getItem("token")
        //         const url3 = "appointment/addappointment"
        //         axios.post(`${BaseApi.server_url}${url3}`,
        //         { headers: {"Authorization" : `Bearer ${tokenn}`}},
        //         {
        //                pid, slot, symptoms, apointdate, did
        //         })
        //         .then(response=>{
        //                 debugger
        //                 console.log(response.data)
        //                 toast.success('booking successful')
        //         })
        //         .catch(error=>{
        //                 debugger
        //                 console.log(error)
        //                 toast.warning('please try again')
        //         })
        //    }

        const addAppt = () => {
                debugger;
                console.log(pid);
                if (apointdate == "")
                        toast.info('please select a date')
                else if (did == "")
                        toast.info('please select doctor')
                else if (slot == "")
                        toast.info('please select slot')
                else if (apointdate != "" && did != "" && slot != "") {
                        var tokenn = sessionStorage.getItem("token");
                        const url3 = "appointment/addappointment";

                        const headers = {
                                "Authorization": `Bearer ${tokenn}`
                        };

                        const requestData = {
                                pid,
                                slot,
                                symptoms,
                                apointdate,
                                did
                        };

                        axios.post(`${BaseApi.server_url}${url3}`, requestData, { headers })
                                .then(response => {
                                        debugger;
                                        console.log(response.data);
                                        toast.success('Appointment Booked successfully');
                                        clearFields()
                                })
                                .catch(error => {
                                        debugger;
                                        console.log(error);
                                        toast.info('something went wrong, please try again');
                                        clearFields()
                                });
                }
        };



        return (<>
                <center>

                        <section className="vh-70 " style={{ backgroundColor: "#063d76" }}>
                                <div className="container py-10 h-50"> <br /><br /><br />
                                        <div className="row d-flex justify-content-center align-items-center h-50">
                                                <div className="col col-xl-6">
                                                        <div className="card" style={{ borderRadius: "2rem" }}>
                                                                <div className="row g-0">
                                                                        <div className="col-md-12 col-lg-12 d-flex align-items-center">
                                                                                <div className="card-body p-10 p-lg-50 text-orange">
                                                                                        <div className="align-items-center">
                                                                                                <span className="h6 fw-bold">
                                                                                                        <img src={BaseApi.base_url + 'assets/images/img.png'} style={{ width: '100px', height: '60px' }}></img>
                                                                                                        Mars Hospitals</span>
                                                                                        </div>
                                                                                        <h1>Book Appointment</h1> <hr />
                                                                                        <div className="table-bordered">

                                                                                        <div className='form-group input-group-sm appstyle'>Doctor
                                                                                                        <select id="did" onChange={slotFunbydid} name="doctor" style={{ width: 400, height: 30 }}>
                                                                                                                <option value="" disabled selected hidden>Choose Doctor</option>
                                                                                                                {
                                                                                                                        doctors.map((doc) => {
                                                                                                                                return <option value={doc.id} id={doc.id}>{doc.name} ({doc.speciality})</option>
                                                                                                                        })
                                                                                                                }
                                                                                                        </select>
                                                                                                </div> <br />

                                                                                                

                                                                                                <div className='form-group input-group-sm appstyle'>Symptoms
                                                                                                        <input type="text" className='form-control appstyle'
                                                                                                                style={{ width: 400 }}
                                                                                                                name="symptoms"
                                                                                                                onChange={e => setSymptoms(e.target.value)} />
                                                                                                </div> <br />

                                                                                                <div className='form-group input-group-sm appstyle'>Appointment Date
                                                                                                        <input type="date" className='form-control appstyle'
                                                                                                                style={{ width: 400 }}
                                                                                                                name="app_date"
                                                                                                                onChange={slotFunbyDate} min={day} max={mday} />
                                                                                                        {/* e=> setApointdate(e.target.value) */}
                                                                                                </div> <br />

                                                                                                
                                                                                                <div className='form-group input-group-sm appstyle'>Appointment Slot <br />
                                                                                                        <select id="slotno" onChange={handleChangeSlot} name="app_slotno" style={{ width: 400, height: 30 }}>
                                                                                                                <option value="" disabled selected hidden>Choose Slot</option>
                                                                                                                {
                                                                                                                        stoshow.map((sl) => {
                                                                                                                                debugger
                                                                                                                                return <option value={sl} id={sl}>{sl}</option>
                                                                                                                        })

                                                                                                                }
                                                                                                        </select>
                                                                                                </div> <br />

                                                                                                <button className='btn btn-outline-info'
                                                                                                        onClick={addAppt}>
                                                                                                        Add Appointment
                                                                                                </button>
                                                                                        </div> <br /> <br /><br />
                                                                                </div>


                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </center>
        </>);
}

export default BookAppointment;
