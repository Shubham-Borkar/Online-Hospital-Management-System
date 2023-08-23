import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

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
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
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
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3 text-secondary" /> New York, NY
              10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89
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
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

                
            </>);
}

export default Footer;