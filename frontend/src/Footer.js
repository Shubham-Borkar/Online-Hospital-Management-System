import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/mystyle.css'

function Footer() {
    return (<>
                <footer className="page-footer font-small   pt-4 default-color">
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
                        <span> marshospitalltd.com</span> <br /><br />
                    </div> 
                </div>
                </footer>
            </>);
}

export default Footer;