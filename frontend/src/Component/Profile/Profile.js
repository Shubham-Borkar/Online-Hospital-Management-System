import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

function Profile() 
{
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
                <Navbaaaar/>
                        <center>
                        <h1><center>My Profile</center></h1>
                        <hr />
                        <div className="table-bordered">
                                <br />
                        <div className='form-group input-group-sm'>first name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="first_name"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>last name
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="last_name"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>email
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="email"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group input-group-sm'>password
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="password"
                                value=""
                                onChange={OnTextChange}/>
                        </div>
                        <div className='form-group'>mobile
                        <input type="text" className='form-control'
                                style={{width: 500}}
                                name="mobile"
                                value=""
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