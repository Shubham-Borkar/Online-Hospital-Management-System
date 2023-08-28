import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import Header from "../Layout/Header";
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';


function Resources() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    debugger
    console.log("on pid update");
    select();
  }, [])

  // const select = () => {
  //   debugger;
  //   var tokenn=sessionStorage.getItem("token")
  //   const url = `resource`;
  //   axios.get(`${BaseApi.server_url}${url}`,
  //   { headers: {"Authorization" : `Bearer ${tokenn}`}})
  //     .then(res => {
  //       debugger;
  //       setRes(res.data);
  //       debugger;
  //       console.log(res.data)
  //       toast.success('resources')
  //     })
  //     .catch(error => {
  //       debugger
  //       console.log(error)
  //       toast.info('resources api failed')
  //     })
  // }

  const select = () => {
    debugger;
    var tokenn = sessionStorage.getItem("token");
    const url = `resource`;
    
    const headers = {
        "Authorization": `Bearer ${tokenn}`
    };

    axios.get(`${BaseApi.server_url}${url}`, { headers })
        .then(res => {
            debugger;
            setRes(res.data);
            debugger;
            console.log(res.data);
            toast.success('resources')
        })
        .catch(error => {
            debugger;
            console.log(error);
            toast.info('resources api failed')
        });
};


  const update = (e) => {
    debugger
    console.log(e.target.value)
    let avail = e.target.value

  }

  const bed = 350;

  return (<div>
    <section className="vh-100 " style={{ backgroundColor: "#063d76" }}>
      <div className="container py-10 h-50">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-6">
            <div className="card" style={{ borderRadius: "2rem" }}>
              <div className="row g-0">
                <div className="col-md-12 col-lg-12 d-flex align-items-center">
                  <div className="card-body p-10 p-lg-50 text-orange">
                    {/* <form> */}
                    <div className="align-items-center">
                      <span className="h6 fw-bold">
                        <img src={BaseApi.base_url + 'assets/images/img.png'} style={{ width: '100px', height: '60px' }}></img>
                        Mars Hospitals</span>
                    </div>
                    <div>
                      <center>

                        {
                          res.map((s) => {
                            var per = ((s.availableCount) / s.totalCount) * 500;
                            var sty = "progress-bar bg-danger";
                            if (per > 150)
                              sty = "progress-bar bg-warning"
                            if (per > 300)
                              sty = "progress-bar bg-info"
                            if (per > 400)
                              sty = "progress-bar bg-success";




                            return (<>

                              <h2 onClick={update} value={s}>
                                {s.resource} ({s.availableCount}/{s.totalCount})</h2>
                              <div className="progress" style={{ width: "500px", height: "50px" }}>
                                <div
                                  className={sty}
                                  role="progressbar"
                                  style={{ width: per }}>
                                  <span className="sr-only">{per / 5}Percent Available (success)</span>
                                </div>
                              </div> <br />

                            </>);
                          })
                        }

                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>)
}

export default Resources;