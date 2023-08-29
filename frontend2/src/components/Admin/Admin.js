import { toast } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';
import { useNavigate } from 'react-router-dom';

function Admin() {
  var userr=sessionStorage.getItem("role")

    const navigate=useNavigate();

    const getManageDoc=()=>{
      navigate("/manageDoctors")
    }

    const getManageStaff=()=>{
      navigate("/manageStaff")
    }

    const getManagePatient=()=>{
      navigate("/managePatient")
    }

    const getResources=()=>{
      navigate("/resources")
    }

    const getAppt=()=>{
      navigate("/appointmentsShow")
    }

    const getStaffAvail=()=>{
      navigate("/staffAvail")
    }

    

    return ( <>
      <center> <br /><br /><br />
          <h1>{userr.substring(5)}   &nbsp; Panel</h1> <br />
          </center>
          <center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> getManageDoc() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/doctor.png'} alt="Image 1"/>
                  <span><b>Manage Doctors</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getManageStaff() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/staff.png'} alt="Image 2"/>
                  <span><b>Manage Staff</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getManagePatient() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/patient.png'} alt="Image 3"/>
                  <span><b>Manage Patients</b></span>
                </div>
              </div>
            </div>
          </div>

          <center>
          </center>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="button" onClick={()=> getResources() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/resources.png'} alt="Image 4"/>
                  <span><b>Resources</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getAppt() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/appointments.png'} alt="Image 5"/>
                  <span><b>View all Appointment</b></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button" onClick={()=> getStaffAvail() }>
                  <img src={BaseApi.base_url+'assets/adminimg/pngs/avail.png'} alt="Image 6"/>
                  <span><b>Staff Availability</b></span>
                </div>
              </div>
            </div>
          </div>
          </center>
          </> );
}

export default Admin;