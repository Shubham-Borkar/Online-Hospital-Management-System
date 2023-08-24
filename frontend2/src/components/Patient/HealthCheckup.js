import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import './stylesheetsp/health.css'
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function HealthCheckup() 
{
        let [apointdate, setApointdate] = useState("")
        let [slot, setSlot] = useState("")
        const [patient, setPatient] = useState({id: 0, name: "", gender: "", dob: "", phone: "", 
                                                address: ""})
        let [did, setDid] = useState("")
        const [pid, setPid] = useState(3)
        const [slottime, setSlotime] = useState(["10 AM", "12 PM", "2 PM", "4 PM"])
        let [slotsbooked, setSlotsbooked] = useState([])
        let [stoshow, setStoshow] = useState([])

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
              }, [])

        useEffect(()=>{
                debugger
                console.log("inside componentDidUpdate..");
                setSlotsbooked([])
                console.log(slotsbooked)
                setStoshow([])
                console.log(stoshow)
              }, [apointdate])

        const uniqueElement=()=>{
                debugger
                let array = slottime.filter(function(obj) { return slotsbooked.indexOf(obj) == -1; });
                console.log(array)
                setStoshow(array)
                console.log(stoshow)
        }

        const slotFunbyDate=(args)=>{
                debugger
                setApointdate(args.target.value)
                console.log(apointdate)
                const url = `appointment/appSlotList/0/${args.target.value}`
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

        const addAppt=()=>{
                debugger
                const url3 = "appointment/addappointment"
                axios.post(`${BaseApi.server_url}${url3}`,
                {
                       pid, slot, apointdate
                })
                .then(response=>{
                        debugger
                        console.log(response.data)
                        // toastfun()
                        toast.success('booking successful')
                })
                .catch(error=>{
                        debugger
                        console.log(error)
                        toast.success('please try again')
                })
           }
        

    return (<>
                        <center> <br /> <br /> <br /> <br />
                        <h1>Book Health Check-up</h1>
                        <div className="table-bordered"> <br />
                        <div className='form-group input-group-sm appstyle'>Checkup Date
                        <input type="date" className='form-control appstyle'
                                style={{width: 500}}
                                name="app_date"
                                onChange={slotFunbyDate}/>
                        </div>
                        
                        <div className='form-group input-group-sm appstyle'>Appointment Slot <br/>
                                <select id="slotno" onChange={handleChangeSlot} name="app_slotno" style={{width: 500}}>
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
                                Confirm Checkup
                        </button>
                        </div>
                        </center>
            </>);
}

export default HealthCheckup;
