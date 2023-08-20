import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'

function DoctorAdd() {
    const OnTextChange=()=>{}
    return ( <>
                <Navbaaaar/>
            <center> <br /><br /><br />
                <div style={{width:"600px"}}>
                <form>
                        <h1><center>Add Doctor</center></h1>
                        <hr />
                        <div className="table-bordered">
                    
                        

                        <div className='form-group'>Name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value=""
                                onChange={OnTextChange}/>
                        </div>



                        <div className='form-group'>Education
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value=""
                                onChange={OnTextChange}/>
                        </div>

                        <div className='form-group'>Contact No.
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>Email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="doctor"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        
                        <button className='btn btn-success'
                                // onClick={update}
                                >
                                Add Doctor
                        </button>
                        <br />
                        {/* {message} */}
                        <br />
                       
                        {/* <div className='form-group'>Email address
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: 500}}></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div> */}
                        </div>
                     
                </form>
                </div>
                </center>
                     <Footer/> 
    </> );
}

export default DoctorAdd;