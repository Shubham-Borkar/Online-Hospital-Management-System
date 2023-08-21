import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history=useHistory();

    const OnTextChange =()=>{
      
    }

    const Registerr=()=>{
        history.push("/register")
    }

    const USignIn = ()=>{
        }
    

    return (  <>
    <Navbaaaar/>
          <center> <br /><br /><br /><br />
  
              <div className='table responsive' style={{display: 'flex',  justifyContent:'center', alignItems:'center',width:"400px",backgroundColor:"aliceblue"}}>
                        
                         <table><tr><td>
                <form>

                <div className="input-group">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" value="" name='username' onChange={OnTextChange}/>
  <span className="input-group-addon" id="basic-addon2">@gmail.com</span>
 
</div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email/UserName</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control"  placeholder="Enter Password" value="" name='password' onChange={OnTextChange}/>
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4" onClick={USignIn}>Sign in</button>


  <div className="text-center">
    Not a member?
    <button type="button" class="btn btn-link" onClick={Registerr}>Register Now</button>
  </div>
</form>
</td></tr></table>
                </div>

             
                </center>
                <Footer/>
              </>);
}

export default Login;