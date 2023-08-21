import Navbaaaar from "../Component/Navber/Navbaaaar";
import Footer from "../Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../mystyle.css'

function Resources() {
    const ambulance=400;
    const bed=350;
    const ward=220;
    const blood=300;
    const stretchers=450;
    return (<>
        <Navbaaaar/>
<div> <br /><br /><br /><br />
    <center>

<h2>Beds Occupied</h2>
<div className="progress" style={{width: "500px",height: "50px"}}>
  <div
    className="progress-bar progress-bar-info"
    role="progressbar"
    style={{ width: bed }}>
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>

<h2>Reserved Blood</h2>
<div className="progress" style={{width: "500px",height: "50px"}}>
  <div
    className="progress-bar progress-bar-warning"
    role="progressbar"
    style={{ width: bed }}>
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>

<h2>Rooms Occupied</h2>
<div className="progress" style={{width: "500px",height: "50px"}}>
  <div
    className="progress-bar progress-bar-info"
    role="progressbar"
    style={{ width: ward }}>
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>

<h2>Ambulance Available</h2>
<div className="progress" style={{width: "500px",height: "50px"}}>
  <div
    className="progress-bar progress-bar-danger"
    role="progressbar"
    style={{ width: ambulance }}>
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>


<h2>Stretchers Available</h2>
<div className="progress" style={{width: "500px",height: "50px"}}>
  <div
    className="progress-bar progress-bar-success"
    role="progressbar"
    style={{ width: stretchers }} >
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>
</center>
</div>
<Footer/>
        </>) 
}

export default Resources;