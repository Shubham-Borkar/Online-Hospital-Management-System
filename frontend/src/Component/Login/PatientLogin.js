import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

function PatientLogin() 
{
    // useState[credentials, setCredentials] = { {email: "", password: ""} }
 
    const OnTextChange=(args)=>{
        var copyOfUser = {email: "", password: ""};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
        copyOfUser[args.target.name] = args.target.value;
   }

   const Login=()=>{
        // 1236547890
        console.log("Button clicked: ");
   }

    return (<>
                <Navbaaaar/>
                <center> <br /><br /><br /><br />
                        <h1>Log in</h1> <br />
                        <div className="table-bordered"> <br />
                            <div className='form-group input-group-sm'>Email
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="email"
                                        value=""
                                        onChange={OnTextChange}/>
                            </div> <br />
                            <div className='form-group input-group-sm'>Password
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="password"
                                        value=""
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