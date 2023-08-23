import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { useState } from 'react';

function PatientLogin() 
{
    const [credentials, setCredentials] = useState({email: "", password: ""})
 
    const OnTextChange=(args)=>{
        debugger;
        var copyOfUser = {...credentials};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
        copyOfUser[args.target.name] = args.target.value;
        setCredentials(copyOfUser);
   }

   const Login=()=>{
        // 1236547890
        console.log(credentials);
   }

    return (<>
                <Header/>
                <center> <br /><br /><br /><br />
                        <h1>Log in</h1> <br />
                        <div className="table-bordered"> <br />
                            <div className='form-group input-group-sm'>Email
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="email"
                                        value={credentials.email}
                                        onChange={OnTextChange}/>
                            </div> <br />
                            <div className='form-group input-group-sm'>Password
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="password"
                                        value={credentials.password}
                                        onChange={OnTextChange}/>
                            </div> <br />
                        
                            <button className='btn btn-success'
                                    onClick={Login}>
                                    Login
                            </button>
                            <br /> <br /><br />
                        </div>
                </center>
                <Footer/>
            </>);
}

export default PatientLogin;