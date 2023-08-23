import Navbaaaar from "../Navber/Navbaaaar";
import Footer from "../../Footer";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'

function About() {
    return (<>
                <Navbaaaar/>
                <div> <br/> <br/> <br /><br /> <br />
                    <h1 className="text-white" align="center" style={{marginTop: "0px"}}>
                        About Us
                    </h1>   <br/> <br/>
                <p className="text-white container">
                    "Welcome to Mars Hospital, your premier destination for exceptional healthcare. Established on March 17, 2023, 
                    we are proud to bring world-class medical services to the community of Hinjewadi City and its surrounding regions."
                </p>        <br/>
                <p className = "text-white container">
                    At Mars Hospital, we are committed to providing comprehensive and compassionate care to our patients. 
                    Our state-of-the-art facility is equipped with cutting-edge technology, 
                    allowing us to deliver advanced treatments and therapies across a wide range of medical disciplines.
                    We are honored to serve the people of Mars City and the surrounding areas, and we remain steadfast in our 
                    commitment to improving lives and fostering a healthier future. Thank you for entrusting us with your healthcare needs. 
                    Welcome to Mars Hospital.
                </p>        <br/> <br/>
                </div> 
                <Footer/>
            </>);
}

export default About;