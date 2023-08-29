import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { BaseApi } from '../components/api/BaseApi';

function Contact() 
{
        const [a,setA]=useState("")
        const [b,setB]=useState("")
        const [c,setC]=useState("")
        const [d,setD]=useState("")
    
    const OnTextChange=(args)=>{
        // var copyOfUser = {...user};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
   }

   const submit=()=>{
        if((a.length&&b.length&&c.length&&d.length)==0)
        toast.warning('Fields cannot be Empty')
        else
      toast.info('Thank you !! we will get back to you soon!!')
   }

    return (<>
   <h1>
                        Contact Us
                    </h1>
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
                <div>
                 

                <center>
                        <div className="table-bordered">
                                <br />
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="full_name"
                                value={a}
                                onChange={e=>setA(e.target.value)}/>
                        </div>
                        <div className='form-group input-group-sm'>email
                        <input type="email" className='form-control'
                                style={{width: 500}}
                                name="email"
                                value={b}
                                onChange={e=>setB(e.target.value)}/>
                        </div>
                        <div className='form-group'>mobile no
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="mobile"
                                value={c}
                                onChange={e=>setC(e.target.value)}/>
                        </div>
                        <div className='form-group input-group-sm'>feedback
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="feedback"
                                value={d}
                                onChange={e=>setD(e.target.value)}/>
                        </div>
                        
                        <button className='btn btn-success'
                                onClick={submit}>
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
    </div>
  </section>
            </>);
}

export default Contact;