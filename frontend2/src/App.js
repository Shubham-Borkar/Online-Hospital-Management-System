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
import { Route, Routes,Link, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StaffList from './components/Doctor/StaffList';
import PatHistory from './components/Doctor/PatHistory';
import AppByDate from './components/Doctor/AppByDate';
import AppByDoctor from './components/Doctor/AppByDoctor';
import ManageApp from './components/Doctor/ManageApp';
import ManagePatients from './components/Admin/ManagePatients';
import EditPatient from './components/Admin/EditPatient';
import StaffAvailability from './components/Admin/StaffAvailability';
import DoctorProfile from './components/Doctor/DoctorProfile';
import ProtectedRoute from './components/Doctor/ProtectedRoute';
import { useSelector } from 'react-redux';
// import ResourceUpdate from './components/Doctor/ResourceUpdate';
// import DoctorProfile from './components/Doctor/DoctorProfile';

function App() {
  const loginStatus = useSelector((state) => state.auth.status)
  const role=useSelector((state) => state.auth.role)
  const Private = ({Component}) => {
    const auth = (loginStatus&& sessionStorage.getItem("token")) 
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}
  return (
    <div className="App">
        
        
        <Header/>
        <div><hr></hr><hr></hr><hr></hr><hr></hr>
        <Link to="/login">Login</Link>{"   |   "}
        
        <Link to="/patientLogin">Patient Login</Link>{"   |   "}
        <Link to="/doctorMenu"> doctor mp</Link>{"   |   "}
        <Link to="/doctorsDetails"> My Profile</Link>{"   |   "}
        <Link to="/staffList"> Staff List</Link>{"   |   "}
        <Link to="/patHistory"> Patient App History</Link>{"   |   "}
        <Link to="/appbydate"> Appointment by date</Link>{"   |   "}
        <Link to="/appbtdoctor">App by Doctor</Link>{"   |   "}
        <Link to="/resources"> Resources</Link>{"   |   "}
        <Link to="/manageApp"> Manage App</Link>{"   |   "}
        <Link to="/resourceUpdate"> resourceUpdate</Link>{"   |   "}
        <Link to="/doctorProfile"> doctorProfile </Link>{"   |   "}
        <Link to="/patientmenu">Patient Menu</Link>{"   |   "}
        <Link to="/adminmenu">Admin Menu</Link>{"   |   "}

        
        </div>
        
        <Routes>

        {/* <Route path="/doctorMenu" element={<Doctor/>} /> */}
        {/* <ProtectedRoute path="/doctorMenu"
                               component={Doctor}/> */}
     <Route path="/doctorMenu" element={<Private Component={Doctor} />} />
     <Route path="/patientmenu" element={<Private Component={Patient} />}/>
     <Route path="/adminmenu" element={<Private Component={Admin} />} />


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
          <Route path="/addDoctor" element={<AddDoctor />} />
          <Route path="/manageDoctors" element={<ManageDoctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/manageStaff" element={<ManageStaff />} />
          <Route path="/editStaff/:sid" element={<EditStaff />} />
          <Route path="/editDoctor/:did" element={<EditDoctor />} />
          <Route path="/patHistory" element={<PatHistory />} />
          <Route path="/appbydate" element={<AppByDate />} />
          <Route path="/appbtdoctor" element={<AppByDoctor />} />
          <Route path="/staffList" element={<StaffList />} />
          <Route path="/manageApp" element={<ManageApp />} />
          <Route path="/managePatient" element={<ManagePatients />} />
          <Route path="/editPatient" element={<EditPatient />} />
          <Route path="/staffAvail" element={<StaffAvailability />} />
          {/* <Route path="/resourceUpdate" element={<ResourceUpdate/>} /> */}
          <Route path="/doctorProfile" element={<DoctorProfile />} />
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
        {/* <div> */}
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
          />
        {/* </div> */}
        <br/><br/><br/><br/><br/><br/><br/><hr/>
        <Footer></Footer>
    </div>
  );
}

export default App;