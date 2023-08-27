import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';

function Footer() {
    return (<>
                {/* <footer className="page-footer font-small   pt-4 default-color">
                <div className="container-fluid text-center text-md-left backcolor footer"> 
                    <div className="row backcolor"> 
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        <div className="col-md-6 mt-md-0 mt-3"> 
                            <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
                            <p>EMAIL: marshospital@gmail.com</p>
                            <p>Phone no: 9876543210</p>
                        </div>
                        
                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">Address:</h5>
                            <p> 47/77 Hinjewadi-1 Pune-700031</p>
                            <p> 47/77 Hinjewadi-1 Pune-700031</p>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3 default-color-dark backcolor">© 2023 Copyright:
                        <span> marshospitalltd.com</span>
                    </div> 
                </div>
                </footer> */}

                {/* new footer */}
                <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-white text-muted">
    {/* Section: Social media */}
    {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor: "cyan"}}> */}
      {/* Left */}
      {/* <div className="me-5 d-none d-lg-block"style={{backgroundColor: "cyan"}}>
        <span>Get connected with us on social networks:</span>
      </div> */}
      {/* Left */}
      {/* Right */}
      {/* <div style={{backgroundColor: "cyan"}} >
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-github" />
        </a>
      </div> */}
      {/* Right */}
    {/* </section> */}
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="" style={{backgroundColor: "skyblue"}}>
      <div className="container text-center text-md-start mt-0" >
        {/* Grid row */}
        <div className="row mt-0">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"> <br/>
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4"> 
              <i className="fas fa-gem me-3 text-secondary" />
              MARS Hospital
            </h6>
            <p>
            "Mars Hospital: Leading medical facility specializing in advanced   treatments and compassionate care. Experts in innovative healthcare,  committed to patient well-being and cutting-edge medical practices."
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> <br/>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Our Assets</h6>
            <p>
              Ambulance
            </p>
            <p>
              Emergency
            </p>
            <p>
              Blood Bank
            </p>
            <p>
              Laboratory
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> <br/>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
            <p>
                Book Appointment
            </p>
            <p>
                Book health checkup
            </p>
            <p>
              Online Consultation
            </p>
            <p>
              Effective patient care
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4"> <br/>
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4"> Contact</h6>
            <p>
              <i className="fas fa-home me-0 text-secondary"/>Hinjewadi,Phase1,
              411057,MH,India.
            </p>
            <p>
              <i className="fas fa-envelope me-0 text-secondary" />
              mars@healthcare.com
            </p>
            <p>
              <i className="fas fa-phone me-0 text-secondary" /> + 91 9234 567 88
            </p>
            <p>
              <i className="fas fa-print me-0 text-secondary" /> + 91 8234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "blanchedalmond" }}
    >
    {/* rgba(0, 0, 0, 0.025) */}
      © 2023 Copyright : &nbsp;
      <a className="text-reset fw-bold" href="http://localhost:3000/assets/images/developers.jpg">
        MarsHospital.com click to know the developers
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

                
            </>);
}

export default Footer;