import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { BaseApi } from '../api/BaseApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login,setAsAdmin,setAsDoctor,setAsHelper,setAsPatient } from '../../redux/authSlice'

function PatientLogin() 
{
 const dispatch = useDispatch()
 const loginStatus = useSelector((state) => state.auth.status)
 //
    
 const [email,setEmail]=useState();
 const [password,setPassword]=useState();
 const navigate = useNavigate()

   const loginn=()=>{
       
        console.log("Button clicked: "+email+""+password);
        
        const url= `hms/authenticate`;
        axios.post(`${BaseApi.server_url}${url}`,  {
            email,password
         })
      .then(response => {
        debugger
        toast.success(`Sucessful Login!! Welcome ${response.data.role}`)
      console.log(response.data)

      
      debugger
      console.log("getting redux state"+loginStatus)
      dispatch(login())
      sessionStorage.setItem("token",response.data.jwt);

      if(response.data.role=="ROLE_PATIENT"){
        dispatch(setAsPatient())
        sessionStorage.setItem("role",response.data.role);
        navigate("/patientmenu")
      }
      if(response.data.role=="ROLE_HELPER"){
        dispatch(setAsHelper())
        sessionStorage.setItem("role",response.data.role);
        navigate("/adminmenu")
      }
      if(response.data.role=="ROLE_DOCTOR"){
        dispatch(setAsDoctor())
        sessionStorage.setItem("role",response.data.role);
        navigate("/doctorMenu")
      }
      if(response.data.role=="ROLE_ADMIN"){
        dispatch(setAsAdmin())
        sessionStorage.setItem("role",response.data.role);
        navigate("/adminmenu")
      }
     
     
      })
      .catch(error => {
         toast.error('Opss wrong ')
          console.error('Image upload failed:', error);
      });
   }

    return (<>
    <section className="vh-100" style={{ backgroundColor: "#063d76" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
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
                        type="button" onClick={loginn}
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <a href="#!" style={{ color: "#393f81" }}>
                        Register here
                      </a>
                    </p>
                    <a href="#!" className="small text-muted">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </form>
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