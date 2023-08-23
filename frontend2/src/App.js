import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home/Home'
import Appointment from './components/Patient/Appointment';
import AppointmentShow from './components/Admin/AppointmentShow';
import InvalidPage from './pages/InvalidPage';
import PatientLogin from './components/Patient/PatientLogin'
import ConsultOnline from './components/Patient/ConsultOnline'
import HealthCheckup from './components/Patient/HealthCheckup'
import Patient from './components/Patient/Patient'
import Profile from './components/Patient/Profile'
import Register from './components/Patient/Register'
import Admin from './components/Admin/Admin'
import DoctorAdd from './components/Admin/DoctorAdd'
import DoctorsDetails from './components/Admin/DoctorsDetails'
import Login from './components/Admin/Login'
import Resources from './components/Admin/Resources'
import StaffAdd from './components/Admin/StaffAdd'
import StaffDetails from './components/Admin/StaffDetails'
import StaffEdit from './components/Admin/StaffEdit'
import Doctor from './components/Doctor/Doctor'
import Contact from './pages/Contact'
import { Route, Routes,Link } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import StaffList from './components/Doctor/StaffList';
import PatHistory from './components/Doctor/PatHistory';
import Footer from './components/Layout/Footer';
import AppByDate from './components/Doctor/AppByDate';
import AppByDoctor from './components/Doctor/AppByDoctor';



function App() {
  return (
    <div className="App">
        
        
        <Header/>
        <div><hr></hr><hr></hr><hr></hr><hr></hr>
        <Link to="/doctor"> doctor mp</Link>{"   |   "}
        <Link to="/doctorsDetails"> My Profile</Link>{"   |   "}
        <Link to="/stafflist"> Staff List</Link>{"   |   "}
        <Link to="/patHistory"> Patient App History</Link>{"   |   "}
        <Link to="appbydate"> Appointment by date</Link>{"   |   "}
        <Link to="/appbtdoctor">App by Doctor</Link>{"   |   "}
        <Link to="/doctor"> My Profile</Link>{"   |   "}
        </div>
        
        <Routes>
          <Route path="/" element={<PatientLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointmentShow" element={<AppointmentShow />} />
          <Route path="/consultOnline" element={<ConsultOnline />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/healthCheckup" element={<HealthCheckup />} />
          <Route path="/patientLogin" element={<PatientLogin />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorAdd" element={<DoctorAdd />} />
          <Route path="/doctorsDetails" element={<DoctorsDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/staffAdd" element={<StaffAdd />} />
          <Route path="/staffDetails" element={<StaffDetails />} />
          <Route path="/stafflist" element={<StaffList />} />
          <Route path="/staffEdit" element={<StaffEdit />} />
          <Route path="/patHistory" element={<PatHistory />} />
          <Route path="/appbydate" element={<AppByDate />} />
          <Route path="/appbtdoctor" element={<AppByDoctor />} />
          {/* <Route path="/doctorCar" element={<Doctorscar2 />} /> */}


          {/* <Route
            path="/doctor/patientDetails"
            element={<PatientDetailsDoctor />}
          /> */}
          {/* <Route
            path="/reception/patientDetails"
            element={<PatientDetailsReception />}
          /> */}
          {/* <Route
            path="/accountant/patientDetails"
            element={<PatientDetailsAccountant />}
          /> */}
          <Route path='*' element={<InvalidPage/>} />
        </Routes>
        <ToastContainer theme="colored" />
        <br/><br/><br/><br/><br/><br/><br/><hr/>
        <Footer></Footer>
    </div>
  );
}

export default App;
