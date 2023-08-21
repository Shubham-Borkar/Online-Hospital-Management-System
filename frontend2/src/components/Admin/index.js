import React from 'react';
import ReactDOM from 'react-dom/client';
import Launch from './Launch';
import {BrowserRouter} from 'react-router-dom';
import DoctorAdd from './DoctorAdd';


debugger;
const root = 
ReactDOM.createRoot(document.getElementById('root'));

debugger;
console.log("Inside Index.js");

// root.render(<Emp></Emp>)
// root.render(<Home></Home>)
// root.render(<Dashboard1></Dashboard1>)
// root.render(<Patient></Patient>)
root.render(<BrowserRouter>
    <Launch/>
  </BrowserRouter>)
//root.render(<DoctorAdd></DoctorAdd>)
 //root.render(<Profile></Profile>)
// root.render(<Appointment></Appointment>)