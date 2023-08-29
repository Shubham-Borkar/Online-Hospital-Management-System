import { useEffect, useState } from "react";
import { BaseApi } from "../api/BaseApi";
import axios from "axios";
import { toast } from "react-toastify";

function PatAppt() {

    const [patAppts, setPatAppts] = useState([]);
    const [ainvoice, setAinvoice] = useState([]);
    const [message, setMessage] = useState("");

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

    // const select=()=>{
    //         debugger;
    //         var tokenn=sessionStorage.getItem("token")
    //         const url= `appointment/patient/${sessionStorage.getItem("id")}`;
    //         axios.get(`${BaseApi.server_url}${url}`,
    //         { headers: {"Authorization" : `Bearer ${tokenn}`}})
    //         .then(res=>{
    //             debugger
    //                 setPatAppts(res.data);
    //                 toast.success('apt got from api')
    //                 })
    //         .catch(error=>{
    //             debugger
    //             console.log(error)
    //             toast.info('get apt api failed')
    //         })
    //         }

    const select = () => {
        debugger;
        var tokenn = sessionStorage.getItem("token");
        const url = `appointment/patient/${sessionStorage.getItem("id")}`;
        
        const headers = {
            "Authorization": `Bearer ${tokenn}`
        };
    
        axios.get(`${BaseApi.server_url}${url}`, { headers })
            .then(res => {
                debugger;
                setPatAppts(res.data);
                toast.success('apt got from api');
            })
            .catch(error => {
                debugger;
                console.log(error);
                toast.info('get apt api failed');
            });
    };
    

    const viewInvoice=(e)=>{
        debugger
        var tokenn=sessionStorage.getItem("token")
        const url= `invoice/${e.target.value}`;
            axios.get(`${BaseApi.server_url}${url}`,
            { headers: {"Authorization" : `Bearer ${tokenn}`}})
            .then(res=>{
                debugger
                    setAinvoice(res.data);
                    setMessage(res.data);
                    if(res.data.id!=null)
                    toast.success(`invoice ${e.target.value}`)
                else
                    toast.info(`invoice ${e.target.value} not yet filed`)
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
            <hr /><center>
            <div className='table-responsive col-md-6'>
                <h5>My Appointments</h5>
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
                        patAppts.map( (appt) =>{
                            return (<tr>
                                        <td>{appt.id}</td>
                                        <td>{appt.apointdate}</td>
                                        <td>{appt.slot}</td>
                                        <td>{appt.symptoms}</td>
                                        <td><button className="btn btn-outline-success" value={appt.id} onClick={e=>viewInvoice(e)}>View Invoice</button></td>
                                    </tr>);
                            })
                        }
                        </tbody>
                    </table>
                        
                
            </div></center> <br /><br /><br /><br />
    </>);
    
}

export default PatAppt;