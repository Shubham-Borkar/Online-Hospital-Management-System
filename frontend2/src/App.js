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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Header/>
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
          <Route path="/staffEdit" element={<StaffEdit />} />

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
      </BrowserRouter>

    </div>
  );
}

export default App;
