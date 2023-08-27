import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './stylesheetsp/health.css'
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';

function HealthCheckup() 
{
        let [apointdate, setApointdate] = useState("")
        let [slot, setSlot] = useState("")
        const pid= sessionStorage.getItem("id")
        const [slottime, setSlotime] = useState(["10 AM", "12 PM", "2 PM", "4 PM"])
        let [slotsbooked, setSlotsbooked] = useState([])
        let [stoshow, setStoshow] = useState([])
        const [day, setDay] = useState("")
        const [mday, setMday] = useState("")

        useEffect(()=>{
                debugger
                console.log("inside componentDidMount..");
                currentdate()
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

        const addAppt=()=>{
                debugger
                const url3 = "appointment/addappointment"
                        debugger
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
                        toast.info('please try again')
                })
           }
        

    return (<>
                        <center>
                        <h1>Book Health Check-up</h1>
                        <hr />  <br />
                        <div className="table-bordered"> <br />
                        <div className='form-group input-group-sm appstyle'>Checkup Date
                        <input type="date" 
                                style={{width: 400}}
                                name="app_date"
                                onChange={slotFunbyDate} min={day} max={mday}/>
                        </div> <br />
                        
                        <div className='form-group input-group-sm appstyle'>Appointment Slot <br/>
                                <select id="slotno" onChange={handleChangeSlot} name="app_slotno" style={{width: 400, height:30}}>
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
                        </div> <br /><br /><br /><br /><br />
                        </center>
            </>);
}

export default HealthCheckup;
