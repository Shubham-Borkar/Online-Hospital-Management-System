import { toast } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useState } from 'react';

function ConsultOnline() 
{
    // useState[credentials, setCredentials] = { {email: "", password: ""} }
 
    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    const [query, setQuery] = useState("")
    

   const submit=()=>{
        // 1236547890
        console.log("Button clicked: ");
        toast.success("thank you for your response")
        setDetails("")
        setName("")
        setQuery("")
   }

    return (<>
                <center> 
                        <h1>Please, Enter your query here</h1> <br />
                        <div className="table-bordered"> <br />
                            <div className='form-group input-group-sm'>Patient's Full Name
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="name"
                                        value={name}
                                        onChange={e=>setName(e.target.value)} required/>
                            </div> <br />

                            <div className='form-group input-group-sm'>Patient's details
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="details"
                                        value={details}
                                        onChange={e=>setDetails(e.target.value)} required/>
                            </div> <br />

                            <div className='form-group input-group-sm'>Patient's Query
                                <textarea className='form-control'
                                        style={{width: 500}}
                                        name="query"
                                        value={query}
                                        onChange={e=>setQuery(e.target.value)} required/>
                            </div> <br />
                        
                            <button className='btn btn-success'
                                    onClick={submit}>
                                    Submit
                            </button>
                            <br /> <br /><br />
                        </div>
                </center>
            </>);
}

export default ConsultOnline;
