import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useState } from 'react';

function EditStaff(props) {

        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [email, setEmail] = useState("")

    debugger;
    return ( <>
                <Header/>
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
                        </div>
                     
                </form>
                </div>
                </center>
                   <Footer/>   
    </> );
}

export default EditStaff;