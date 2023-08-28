import { toast } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useState } from 'react';
import { BaseApi } from '../api/BaseApi';

function ConsultOnline() 
{
    // useState[credentials, setCredentials] = { {email: "", password: ""} }
 
    const [name, setName] = useState("")
    const [details, setDetails] = useState("")
    const [query, setQuery] = useState("")
    

   const submit=()=>{
        // 1236547890
        debugger
        console.log("Button clicked: ");
        toast.success("thank you for your response")
        setDetails("")
        setName("")
        setQuery("")
   }

   const verify=()=>{
        debugger
        if (name == "")
        toast.info('Enter Name')
      else if (/^\d+$/.test(name))
                toast.info('Invalid, name contains numbers')

        else if (details == "")
        toast.info('Enter Details')
      else if (/^\d+$/.test(details))
                toast.info('Invalid, details contains numbers')
                else if (query == "")
                toast.info('Enter query')
                else if (/^\d+$/.test(query))
                toast.info('Invalid, query contains numbers')
              else
              submit()

   }

    return (<div>
        <section className="vh-50 " style={{ backgroundColor: "#063d76" }}>
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
                        <h1>Enter your query here</h1> <br />
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
                                    onClick={verify}>
                                    Submit
                            </button>
                            <br /> <br />
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
            </div>);
}

export default ConsultOnline;
