import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

function ConsultOnline() 
{
    // useState[credentials, setCredentials] = { {email: "", password: ""} }
 
    const OnTextChange=(args)=>{
        // var copyOfUser = {name: "", details: "", query: ""};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
        // copyOfUser[args.target.name] = args.target.value;
   }

   const submit=()=>{
        // 1236547890
        console.log("Button clicked: ");
   }

    return (<>
                <Navbaaaar/>
                <center> <br /><br /><br /><br />
                        <h1>Please, Enter your query here</h1> <br />
                        <div className="table-bordered"> <br />
                            <div className='form-group input-group-sm'>Patient's Full Name
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="name"
                                        value=""
                                        onChange={OnTextChange}/>
                            </div> <br />
                            <div className='form-group input-group-sm'>Patient's details
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="details"
                                        value=""
                                        onChange={OnTextChange}/>
                            </div> <br />
                            <div className='form-group input-group-sm'>Patient's Query
                                <input type="text" className='form-control'
                                        style={{width: 500}}
                                        name="query"
                                        value=""
                                        onChange={OnTextChange}/>
                            </div> <br />
                        
                            <button className='btn btn-success'
                                    onClick={submit}>
                                    Submit
                            </button>
                            <br /> <br /><br />
                        </div>
                </center>
                <Footer/>
            </>);
}

export default ConsultOnline;
