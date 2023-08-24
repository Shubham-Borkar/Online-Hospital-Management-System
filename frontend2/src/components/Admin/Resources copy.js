import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';


function Resources() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    debugger
    console.log("on pid update");
    select();
  }, [])

  const select = () => {
    debugger;
    const url = `resource`;
    axios.get(`${BaseApi.server_url}${url}`)
      .then(res => {
        debugger;
        setRes(res.data);
        debugger;
        console.log(res.data)
      })
  }

  const bed = 350;

  return (<>
   {/* 
   {
          res.map((s) => {
            let per=((s.availableCount)/s.totalCount)*500;
            return <>
            <h2>{s.resource}</h2>
            <h3>{per}</h3>
            </>
})
 } 
 */}
    <Header />
    <div> <br /><br /><br /><br />
      <center>

        {
          res.map((s) => {
            var per=((s.availableCount)/s.totalCount)*500;
            var sty="progress-bar bg-danger";
            if(per>150)
            sty="progress-bar bg-warning"
            if(per>300)
            sty="progress-bar bg-info"
            if(per>400)
            sty="progress-bar bg-success";
            
            
            
            return (<>

              <h2>{s.resource}</h2>
              <div className="progress" style={{ width: "500px", height: "50px" }}>
                <div
                  className={sty}
                  role="progressbar"
                  style={{ width: per }}>
                  <span className="sr-only">{per/5}Percent Available (success)</span>
                </div>
              </div>

            </>);
          })
        }





        <h2>Beds Occupied</h2>
        <div className="progress" style={{ width: "500px", height: "50px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: bed }}>
            <span className="sr-only">40% Complete (success)</span>
          </div>
        </div>
       
      </center>
    </div>

  </>)
}

export default Resources;