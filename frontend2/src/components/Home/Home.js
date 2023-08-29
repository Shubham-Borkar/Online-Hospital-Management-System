import MyCard from "../../pages/MyCard";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Mission from '../../pages/Mission'
import DoctorsCar from "./DoctorsCar";
import '../../mystyle.css'

function Home() {
    debugger;
    console.log("inside Home")
    return (<>
                <div className="bg-primary backcolor">
                
                <MyCard/>
                <Mission/>
                <br /> <br />
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br />
                <DoctorsCar/>
                
                <br /> <br /> <br />
                {/* <Footer/> */}
                </div>
    </> );
}

export default Home;