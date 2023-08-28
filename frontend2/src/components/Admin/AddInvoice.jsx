import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BaseApi } from "../api/BaseApi";
import { toast } from "react-toastify";

function AddInvoice() {

    // const [ainvoice, setAinvoice] = useState([]);

        const [medFees, setMedFees] = useState("")
        const [docFees, setDocFees] = useState("")
        const [labTestFees, setLabTestFees] = useState("")
        const [otherFees, setOtherFees] = useState("")
        const [desc, setDesc] = useState("")
    // const [message, setMessage] = useState("");
    const [idate, setIdate] = useState("")
    var {aid} = useParams();

    const fileInvoice=()=>{
        debugger
        console.log(aid)
        const url = `invoice/add/${aid}`;
        axios.post(`${BaseApi.server_url}${url}`, 
        {
            idate, medFees, docFees, labTestFees, otherFees, desc
        })
        .then(res=>{
            debugger
            setIdate(res.data.id)
            setDocFees(res.data.docFees)
            setLabTestFees(res.data.labTestFees)
            setOtherFees(res.data.otherFees)
            setDesc(res.data.desc)
            // setAinvoice(res.data);
            // setMessage(res.data);
            toast.success('invoice added successfully')
        })
        .catch(error=>{
            debugger
            console.log(error)
            toast.warning('invoice not added')
        })
    }


    return ( <>
        <br /> <br />
        <center>
                <div className= 'alert alert-warning col-md-3'>
                <h3>Invoice for Appointment: {aid}</h3>
                    <table className='table table-bordered'>
                        <tr>
                        <th>Details</th>
                        <th>Value</th>
                        </tr>
                        <tr>
                            <td>date</td>
                            <td><input type="date" value={idate} onClick={e=>setIdate(e.target.value)}/>{idate}</td>
                        </tr>
                        <tr>
                            <td>medFees</td>
                            <td><input type="number" value={medFees} onClick={e=>setMedFees(e.target.value)}/>{medFees}</td>
                        </tr>
                        <tr>
                            <td>docFees</td>
                            <td><input type="number" value={docFees} onClick={e=>setDocFees(e.target.value)}/>{docFees}</td>
                        </tr>
                        <tr>
                            <td>labTestFees</td>
                            <td><input type="number" value={labTestFees} onClick={e=>setLabTestFees(e.target.value)}/>{labTestFees}</td>
                        </tr>
                        <tr>
                            <td>otherFees</td>
                            <td><input type="number" value={otherFees} onClick={e=>setOtherFees(e.target.value)}/>{otherFees}</td>
                        </tr>
                        <tr>
                            <td>description</td>
                            <td><input type="text" value={desc} onClick={e=>setDesc(e.target.value)}/>{desc}</td>
                        </tr>
                </table>
                <button className="btn btn-outline-success" onClick={fileInvoice}>File Invoice</button>
            </div>
            </center> </>);
}

export default AddInvoice;