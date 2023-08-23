import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home/Home'
import BookAppointment from './components/Patient/BookAppointment';
import AppointmentShow from './components/Admin/AppointmentShow';
import InvalidPage from './pages/InvalidPage';
import PatientLogin from './components/Patient/PatientLogin'
import ConsultOnline from './components/Patient/ConsultOnline'
import HealthCheckup from './components/Patient/HealthCheckup'
import Patient from './components/Patient/Patient'
import Profile from './components/Patient/Profile'
import Register from './components/Patient/Register'
import Admin from './components/Admin/Admin'
import DoctorAdd from './components/Admin/AddDoctor'
//import DoctorsDetails from './components/Admin/DoctorsDetails'
import Login from './components/Admin/Login'
import Resources from './components/Admin/Resources'
import StaffAdd from './components/Admin/AddStaff'
import StaffDetails from './components/Admin/ManageStaff'
import StaffEdit from './components/Admin/EditStaff'
import Doctor from './components/Doctor/Doctor'
import Contact from './pages/Contact'
import PatAppt from './components/Patient/PatAppt';
import DoctorList from './components/Patient/DoctorsList';
import AddDoctor from './components/Admin/AddDoctor';
import AddStaff from './components/Admin/AddStaff';
import ManageStaff from './components/Admin/ManageStaff';
import ManageDoctors from './components/Admin/ManageDoctors';
import Footer from './components/Layout/Footer';
import EditStaff from './components/Admin/EditStaff';
import EditDoctor from './components/Admin/EditDoctor';
import { Route, Routes,Link } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import StaffList from './components/Doctor/StaffList';
import PatHistory from './components/Doctor/PatHistory';



function App() {
  return (
    <div className="App">
        
        
        <Header/>
        <div><hr></hr><hr></hr><hr></hr><hr></hr>
        <Link to="/doctor"> doctor mp</Link>{"   |   "}
        <Link to="/doctorsDetails"> My Profile</Link>{"   |   "}
        <Link to="/stafflist"> Staff List</Link>{"   |   "}
        <Link to="/patHistory"> Patient App History</Link>{"   |   "}
        <Link to="/doctor"> My Profile</Link>{"   |   "}
        <Link to="/doctor"> My Profile</Link>{"   |   "}
        <Link to="/doctor"> My Profile</Link>{"   |   "}
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />
          <Route path="/appointmentsShow" element={<AppointmentShow />} />
          <Route path="/patientAppointment" element={<PatAppt />} />
          <Route path="/consultOnline" element={<ConsultOnline />} />
          <Route path="/getDoctors" element={<DoctorList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/healthCheckup" element={<HealthCheckup />} />
          <Route path="/patientLogin" element={<PatientLogin />} />
          <Route path="/patientMenu" element={<Patient />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminMenu" element={<Admin />} />
          <Route path="/doctorMenu" element={<Doctor />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
          <Route path="/manageDoctors" element={<ManageDoctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/manageStaff" element={<ManageStaff />} />
          <Route path="/editStaff" element={<EditStaff />} />
          <Route path="/editDoctor" element={<EditDoctor />} />
          <Route path="/patHistory" element={<PatHistory />} />
          
          <Route path='*' element={<InvalidPage/>} />
        </Routes>
        <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
