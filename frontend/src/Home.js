import Navbaaaar from "./Component/Navber/Navbaaaar";
import DoctorsCar from "./DoctorsCar";
import Footer from "./Footer";
import Mission from "./Mission";
import MyCard from "./MyCard";
import './mystyle.css'

function Home() {
    debugger;
    console.log("inside Home")
    return (<>
                <div className="bg-primary backcolor">
                <Navbaaaar/>
                <MyCard/>
                <Mission/>
                <br /> <br />
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br />
                <DoctorsCar/>
                <br /> <br /> <br />
                <Footer/>
                </div>
    </> );
}

export default Home;