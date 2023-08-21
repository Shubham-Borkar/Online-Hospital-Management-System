import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'

function StaffEdit(props) {
    const OnTextChange=()=>{}
    debugger;
    return ( <>
                <Navbaaaar/>
            <center> <br /><br /><br /><br />
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Please Enter New Changes</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        

                        <div className='form-group'>Name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value={props.name}
                                onChange={OnTextChange}/>
                        </div>



                        <div className='form-group'>Education
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value={props.education}
                                onChange={OnTextChange}/>
                        </div>

                        <div className='form-group'>Contact No.
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value={props.contact}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>Email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value={props.email}
                                onChange={OnTextChange}/>
                        </div>
                        
                        <button className='btn btn-success'
                                // onClick={update}
                                >
                                Conform Staff Edit
                        </button>
                        <br />
                        {/* {message} */}
                        <br />
                       
                        </div>
                     
                </form>
                </div>
                </center>
                   <Footer/>   
    </> );
}

export default StaffEdit;