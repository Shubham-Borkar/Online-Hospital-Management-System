import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch ,useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login,setAsAdmin,setAsDoctor,setAsHelper,setAsPatient,setEmail,setId } from '../../redux/authSlice'

function PatientLogin() 
{
 const dispatch = useDispatch()
 const loginStatus = useSelector((state) => state.auth.status)
 const evalue = useSelector((state) => state.auth.email)
 const [message, setMessage] = useState(0);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const navigate = useNavigate()
//  const [ootp, setOotp] = useState(0);
 const [passEnt, setPassEnt] = useState(0);
 const [nPass,setnPass]=useState("");
 const [vPass,setvPass]=useState("");
 var sid = 0;
 

 const setPass=()=>{
  debugger
  if (email != "")
  {
    debugger
    console.log(email)
    toast.info('calling email verify / obtain otp api')
    // var tokenn=sessionStorage.getItem("token")
    // ,
    // { headers: {"Authorization" : `Bearer ${tokenn}`}}
    const url= `entry/getotp/${email}`
    axios.get(`${BaseApi.server_url}${url}`)
    .then(res=>{
      debugger
      setMessage("OTP obtained")
      console.log(res.data)
      sessionStorage.setItem("OTP", res.data)
      console.log(sessionStorage.getItem("OTP"))
      toast.info('correct email; ss saved; check & enter otp')
    })
    .catch(error=>{
      debugger
      console.log(error)
      toast.warning('this email is not registered, try register with us')
    })
  }
  else
  {
    debugger
    toast.warning('Please enter Email')
  }
}

const setNewPass=()=>{
  debugger
  if (sessionStorage.getItem("OTP") != passEnt)
  {
    debugger
    toast.warning('incorrect otp, please try again')
  }
  else if (nPass != vPass)
  {
    debugger
    toast.warning('Passwords did not match')
    setMessage("")
  }
  else {
    debugger
    var tokenn=sessionStorage.getItem("token")
    const url = `entry/update/${email}/${nPass}`;
    axios.put(`${BaseApi.server_url}${url}`,
    { headers: {"Authorization" : `Bearer ${tokenn}`}})
    .then(res=>{
      debugger
      console.log(res.data)
      toast.success('password set successfully')
    })
    .catch(error=>{
      debugger
      console.log(error)
      toast.warning('something went wrong, try again')
      setMessage("")
    })
  }
}

   const loginn=()=>{
       debugger
        console.log("Button clicked: "+email+""+password);
        // var tokenn=sessionStorage.getItem("token")
        // ,
        // { headers: {"Authorization" : `Bearer ${tokenn}`}}
        const url= `hms/authenticate`;
        axios.post(`${BaseApi.server_url}${url}`,  
        {
            email,password
         })
      .then(response => {
        debugger
        toast.success(`Sucessful Login!! Welcome ${response.data.role}`)
      console.log(response.data)
      sessionStorage.setItem("email",email);
      
      debugger
      console.log("getting redux state"+loginStatus)
      dispatch(login())
      console.log(loginStatus)
      sessionStorage.setItem("token",response.data.jwt);

      if(response.data.role=="ROLE_PATIENT"){
        debugger
        dispatch(setAsPatient())
        sessionStorage.setItem("role",response.data.role);
        navigate("/patientmenu")
      }
      if(response.data.role=="ROLE_HELPER"){
        debugger
        dispatch(setAsHelper())
        sessionStorage.setItem("role",response.data.role);
        navigate("/adminmenu")
        // //////////////////////////////////
      }
      if(response.data.role=="ROLE_DOCTOR"){
        debugger
        dispatch(setAsDoctor())
        sessionStorage.setItem("role",response.data.role);
        navigate("/doctorMenu")
      }
      if(response.data.role=="ROLE_ADMIN"){
        debugger
        dispatch(setAsAdmin())
        sessionStorage.setItem("role",response.data.role);
        navigate("/adminmenu")
      }
     
     
      })
      .catch(error => {
        debugger
        console.log(error)
         toast.error('Oopss something went wrong')
         console.log(error)
      });
   }


   if(message!="")
    return(<>
<br /> <br />
<center>
        <div className= 'alert alert-warning col-md-6'>
        <table>
          
          <tr>
            <td>Enter OTP received</td>
            <td><input type="number" onChange={e=>setPassEnt(e.target.value)}/></td>
          </tr>

          <tr>
            <td>Set New Password</td>
            <td><input type="password" value={nPass} onChange={e=>setnPass(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Confirm New Password</td>
            <td><input type="password" value={vPass} onChange={e=>setvPass(e.target.value)}/></td>
          </tr>
          <tr>
            <td colSpan={2}><button className='btn btn-outline-success' onClick={setNewPass}>Set New Password</button></td>
          </tr>
        </table>
    </div>
    </center> </>)

    return (<>
    <section className="vh-100" style={{ backgroundColor: "#063d76" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src={BaseApi.base_url+'assets/images/md.png'}
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem" ,height:768}}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h3 fw-bold mb-0">
                        <img src={BaseApi.base_url+'assets/images/img.png'}></img>
                        Mars Hospitals</span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        value={email}
                        className="form-control form-control-lg"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Email address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form2Example27">
                        Password
                      </label>
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button" onClick={loginn}>
                        Login
                      </button>
                    </div>
                    <p className="small text-muted" onClick={setPass}>Forgot password?</p>
                    
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account ?{"    "}
                      <Link to="/register" style={{ color: "#393f81" }}>Register here</Link>
                    </p>
                    
                    {/* <Link to="/register" className="small text-muted">Terms of use.</Link> */}
                    
                    {/* <Link to="/register" className="small text-muted">Privacy policy</Link> */}
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

export default PatientLogin;