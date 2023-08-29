import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import '../Patient/stylesheetsp/app.css';
import { useEffect, useState } from "react";
import { BaseApi } from '../api/BaseApi';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AppointmentShow() 
{
        const navigate = useNavigate()
        const [appts, setAppts] = useState([]);
        const [ainvoice, setAinvoice] = useState([]);
        const [medFees, setMedFees] = useState("")
        const [docFees, setDocFees] = useState("")
        const [labTestFees, setLabTestFees] = useState("")
        const [otherFees, setOtherFees] = useState("")
        const [desc, setDesc] = useState("")
    const [message, setMessage] = useState("");
    const [idate, setIdate] = useState("")
    var aid=""
        // const [appt, setAppt] = useState({id: 0, apointdate: "", slot: "", symptoms: ""});

        useEffect(()=>{
                console.log("inside componentDidMount..");
                select(); 
              }, [])

              useEffect(()=>{
                setTimeout(() => 
                {
                    setMessage("");
                }, 6000);
            }, [message])

        const select=()=>{
                debugger;
                var tokenn=sessionStorage.getItem("token")
                const url= 'appointment';
                axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                .then(res=>{
                    debugger
                        setAppts(res.data);
                })
                .catch(error=>{
                    debugger
                    console.log(error)
                })
            }


        const viewInvoice=(e)=>{
                debugger
                aid=e.target.value;
                var tokenn=sessionStorage.getItem("token")
                const url= `invoice/${e.target.value}`;
                    axios.get(`${BaseApi.server_url}${url}`,
                { headers: {"Authorization" : `Bearer ${tokenn}`}})
                    .then(res=>{
                        debugger
                            setAinvoice(res.data);
                            setMessage(res.data);
                            if(res.data.id!=null)
                            {
                                toast.success(`invoice ${e.target.value}`)
                            }
                        else if (sessionStorage.getItem("role") != "ROLE_ADMIN")
                        {
                            navigate(`/addInvoice/${e.target.value}`)
                            toast.info(`invoice ${e.target.value} not yet filed`)
                        }
                        else
                        {
                            debugger
                            toast.info(`invoice ${e.target.value} not yet filed`)
                        }
                            })
                    .catch(error=>{
                        debugger
                        console.log(error)
                    })
            }


            if(message!="")
    return(<>
<br /> <br />
<center>
        <div className= 'alert alert-warning col-md-6'>
        <h3>Invoice for Appointment:{ainvoice.appoint.id} details</h3>
        <h6>date: {ainvoice.idate}</h6>
        <h6>medFees: {ainvoice.medFees}</h6>
        <h6>docFees: {ainvoice.docFees}</h6>
        <h6>labTestFees: {ainvoice.labTestFees}</h6>
        <h6>otherFees: {ainvoice.otherFees}</h6>
        <h6>description: {ainvoice.desc}</h6>
    </div>
    </center> </>)
    
    return (<>
                <hr /> <center>
                <div className='table-responsive col-md-6'> <h4>All Appointments</h4>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                            <th>Appointment Id</th>
                            <th>Appointment Date</th>
                            <th>Slot</th>
                            <th>Symptoms</th>
                            <th>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        appts.map( (appt) =>{
                            return (<tr>
                                        <td>{appt.id}</td>
                                        <td>{appt.apointdate}</td>
                                        <td>{appt.slot}</td>
                                        <td>{appt.symptoms}</td>
                                        <td><button className="btn btn-outline-success" value={appt.id} onClick={e=>viewInvoice(e)}>Get/File Invoice</button></td>
                                    </tr>);
                            })
                        }
                        </tbody>
                    </table>
            </div>
            </center>
            </>);
}

export default AppointmentShow;

