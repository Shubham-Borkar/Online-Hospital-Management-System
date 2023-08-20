import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Naveber() {
    return (<div>
                <Navbar className={classnames("navbar", {
                    // "navbar--hidden": !this.state.visible
                })} bg="primary" text="white" var expand="lg">
                <Navbar.Brand style={{color:"white"}}>Lifescape Hospital Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/about">About</Nav.Link>                    
                    <Nav.Link className="text-white" href="/gallery">Gallery</Nav.Link>
                    <Nav.Link className="text-white" href="/contact">Contact Us</Nav.Link>
                    <Nav.Link className="text-white" href="/regPatient">Patient Register</Nav.Link>
                    <NavDropdown title="Login" id="basic-nav-dropdown" className="mr-5">
                        <NavDropdown.Item href="/patient/login">Patient Login</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors/login">Doctor Login</NavDropdown.Item>
                        <NavDropdown.Item href="/employee/login">Employee Login</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Admin Login</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>);
}

export default Naveber;