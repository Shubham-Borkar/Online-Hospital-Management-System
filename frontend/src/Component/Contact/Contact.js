import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

function Contact() 
{
    
    const OnTextChange=(args)=>{
        // var copyOfUser = {...user};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
   }

   const submit=()=>{
        // 1236547890
        console.log("Button clicked: ");
   }

    return (<>
                <Navbaaaar/>
                <div> <br/> <br/> <br /><br /> <br />
                    <h1 className="text-white" align="center" style={{marginTop: "0px"}}>
                        Contact Us
                    </h1>   <br/>

                <center>
                        <div className="table-bordered">
                                <br />
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="full_name"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="email"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>mobile no
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="mobile"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>feedback
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="feedback"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        
                        <button className='btn btn-success'
                                onClick={submit}>
                                Submit
                        </button>
                        <br /> <br />   
                        </div>
                        </center>

                </div>  
                <Footer/>
            </>);
}

export default Contact;