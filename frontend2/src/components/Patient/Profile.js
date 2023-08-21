import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { useEffect, useState } from "react";

function Profile() 
{
        // const [appts, setAppts] = useState([]);
        const [profile, setProfile] = useState({id: 0, name: "", gender: "", email: "", password: "",
                                                mobile: "", dob: "", address: ""});
        const [message, setMessage] = useState("");

        useEffect(()=>{
                console.log("inside componentDidMount..");
                select(); 
                // fetch();
              }, [])

        useEffect(()=>{ 
                setTimeout(() => { setMessage(""); }, 3000);  
              } , [message])

        const select=()=>{
                debugger;
                var helper = new XMLHttpRequest();
                // var data =  { "user_id": id };
                
                helper.onreadystatechange =()=> {
                    if (helper.readyState == 4 && helper.status == 200)
                    {
                        debugger;
                        var result = JSON.parse(helper.responseText);
                        setProfile(result);
                        console.log("appts Received");
                    }
                };
                helper.open("GET", "http://127.0.0.1:8181/patient/1");
                helper.send();
                // helper.setRequestHeader("Content-Type", "application/json");
                // helper.send(JSON.stringify(data));
            }

    const OnTextChange=(args)=>{
        // var copyOfUser = {...user};
        // copyOfUser[args.target.name] = args.target.value;
        // setUser(copyOfUser);
   }

   const update=()=>{
        // 1236547890
        console.log("Button clicked: ");
   }

    return (<>
                <Header/>
                        <center>
                        <h1><center>My Profile</center></h1>
                        <hr />
                        <div className="table-bordered">
                                <br />
                        <div className='form-group input-group-sm'>full name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="full_name"
                                value={profile.name}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>gender
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="gender"
                                value={profile.gender}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="email"
                                value={profile.email}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>password
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="password"
                                value={profile.password}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>phone
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="phone"
                                value={profile.phone}
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>dob
                        <input type="date" className='form-control'
                                style={{width: 500}}
                                name="dob"
                                value={profile.dob}
                                onChange={OnTextChange}/>
                        </div>  
                        <div className='form-group'>address
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="address"
                                value={profile.address}
                                onChange={OnTextChange}/>
                        </div>
                        {/* <button className='btn btn-primary'
                                onClick={edit}>
                                Edit
                        </button> */}
                        <button className='btn btn-success'
                                onClick={update}>
                                Save changes
                        </button>
                        <br />
                        {/* {message} */}
                        <br />
                        </div>
                        </center>
                        <Footer/>
            </>);
}

export default Profile;