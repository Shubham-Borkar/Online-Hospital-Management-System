import './App.css';
// import './mystyle.css';
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
import Resources from './components/Admin/Resources'
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
import { Route, Routes, Link, Navigate } from 'react-router-dom';
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
import AddInvoice from './components/Admin/AddInvoice';
import Mission from './pages/Mission';
import { useSelector } from 'react-redux';
import { PrivateToDoctor, PrivateToAdmin, PrivateToPatient, PrivateToAandD, PrivateToHelper, PrivateToAandH, PrivateToAandDandH } from './components/Admin/ProtectedRoute';


function App() {

  // const loginStatus = useSelector((state) => state.auth.status)
  const role = useSelector((state) => state.auth.role)
  //   const Private = ({Component}) => {
  //     const auth = (loginStatus&& sessionStorage.getItem("token")) || true
  //     return auth ? <Component /> : <Navigate to="/login" />
  // }
  return (
    <div className="App">
     <section className="vh-400 back" style={{ backgroundColor: "#063d76", color: "orange" }}>
        {/* <div className="container py-5 h-100"> */}

        <Header />



        {/* </div> */}

        <Routes>

          {/* Helper Specific Protected Routes */}
          <Route path="/addInvoice/:aid" element=
            {<PrivateToHelper Component={AddInvoice} />} />





          <Route path="/addInvoice/:aid" element=
            {<PrivateToHelper Component={AddInvoice} />} />


          {/* Doctor Specific Protected Routes */}
          <Route path="/doctorMenu" element=
            {<PrivateToDoctor Component={Doctor} />} />

          <Route path="/doctorProfile" element=
            {<PrivateToDoctor Component={DoctorProfile} />} />

          <Route path="/patHistory" element=
            {<PrivateToDoctor Component={PatHistory} />} />

          <Route path="/appbydate" element=
            {<PrivateToDoctor Component={AppByDate} />} />

          <Route path="/appbtdoctor" element=
            {<PrivateToDoctor Component={AppByDoctor} />} />

          <Route path="/staffList" element=
            {<PrivateToDoctor Component={StaffList} />} />

          <Route path="/manageApp" element=
            {<PrivateToDoctor Component={ManageApp} />} />



          {/* Patient Specific Protected Routes */}
          <Route path="/patientmenu" element=
            {<PrivateToPatient Component={Patient} />} />

          <Route path="/bookAppointment" element=
            {<PrivateToPatient Component={BookAppointment} />} />

          <Route path="/profile" element=
            {<PrivateToPatient Component={Profile} />} />

          <Route path="/patientAppointment" element=
            {<PrivateToPatient Component={PatAppt} />} />

          <Route path="/consultOnline" element=
            {<PrivateToPatient Component={ConsultOnline} />} />

          <Route path="/getDoctors" element=
            {<PrivateToPatient Component={DoctorList} />} />

          <Route path="/healthCheckup" element=
            {<PrivateToPatient Component={HealthCheckup} />} />


          {/* Admin Specific Protected Routes */}
          <Route path="/addStaff" element=
            {<PrivateToAdmin Component={AddStaff} />} />

          <Route path="/manageStaff" element=
            {<PrivateToAdmin Component={ManageStaff} />} />

          <Route path="/editStaff/:sid" element=
            {<PrivateToAdmin Component={EditStaff} />} />

          <Route path="/editDoctor/:did" element=
            {<PrivateToAdmin Component={EditDoctor} />} />

          <Route path="/addDoctor" element=
            {<PrivateToAdmin Component={AddDoctor} />} />

          <Route path="/manageDoctors" element=
            {<PrivateToAdmin Component={ManageDoctors} />} />



          {/*Common to Admin and Doctor and Helper*/}
          <Route path="/resources" element=
            {<PrivateToAandDandH Component={Resources} />} />


          {/*Common to Admin and Helper*/}
          <Route path="/adminmenu" element=
            {<PrivateToAandH Component={Admin} />} />

          <Route path="/managePatient" element=
            {<PrivateToAandH Component={ManagePatients} />} />

          <Route path="/editPatient/:pid" element=
            {<PrivateToAandH Component={EditPatient} />} />

          <Route path="/appointmentsShow" element=
            {<PrivateToAandH Component={AppointmentShow} />} />

          <Route path="/staffAvail" element=
            {<PrivateToAandH Component={StaffAvailability} />} />


          {/* Non Protected Routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<PatientLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
            <Route path="/mission" element={<Mission />} />
          <Route path='*' element={<InvalidPage />} />

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
        <br /><br />
                {/* <div > */}

        {/* <Link to="/login">Login</Link>{"   |   "}
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
        <Link to="/adminmenu">Admin Menu</Link>{"   |   "} */}
        <Footer></Footer>
        {/* </div> */}
     </section>
    </div>
  );
}

export default App;