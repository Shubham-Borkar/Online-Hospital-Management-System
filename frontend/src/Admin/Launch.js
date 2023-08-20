import { Link,Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client'


import Admin from "./Admin";
import Navbaaaar from "./Navbaaaar";
import DoctorsDetails from "./DoctorsDetails";
import DoctorAdd from "./DoctorAdd";
import StaffDetails from "./StaffDetails";
import StaffAdd from "./StaffAdd";
import Resources from "./Resources";
import StaffEdit from "./StaffEdit";
import Doctor from "./Doctor";
import Login from "./Login";



function  Launch()
{
      debugger;
      const history = useHistory(); 

   debugger;
    return <>
           <div className="">
                <Navbaaaar></Navbaaaar>
                  <hr></hr>   
                 <Link to="/about">About Us</Link>
                 {"   |   "}   
                   <Link to="/adminpage"> Admin Page</Link>
                 {"   |   "} 
                 <Link to="/doctorsdetails"> Doctory Details</Link>
                 {"   |   "} 
                 <Link to="/adddoctor">Add Doctory</Link>
                 {"   |   "}  
                 <Link to="/staffdetails"> Staff Details</Link>
                 {"   |   "} 
                 <Link to="/addstaff"> Add Staff</Link>
                 {"   |   "}
                 <Link to="/editstaff"> Edit Staff</Link>
                 {"   |   "}
                 <Link to="/resources"> Resources</Link>
                 {"   |   "}
                 <Link to="/doctorpage"> Doctors Page</Link>
                 {"   |   "}
                 <Link to="/login"> Login</Link>
                 {"   |   "}
                   <Switch>
                   {/* <Route path="/adminpage" 
                                exact
                               component={Admin}/> */}

                  
                                 <ProtectedRoute path="/adminpage"
                               component={Admin}/>
                                <ProtectedRoute path="/doctorsdetails"
                               component={DoctorsDetails}/>
                                <ProtectedRoute path="/adddoctor"
                               component={DoctorAdd}/>
                                <ProtectedRoute path="/staffdetails"
                               component={StaffDetails}/>
                                <ProtectedRoute path="/addstaff"
                               component={StaffAdd}/>
                                <ProtectedRoute path="/editstaff"
                               component={StaffEdit}/>
                               <ProtectedRoute path="/resources"
                               component={Resources}/>
                                 <ProtectedRoute path="/doctorpage"
                               component={Doctor}/>
                                      <ProtectedRoute path="/login"
                               component={Login}/>
                            
                   
            
                   </Switch>
             
                </div>
            </>
}

export default Launch;