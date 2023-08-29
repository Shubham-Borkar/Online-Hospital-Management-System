import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';


function Resources() {
  const [res, setRes] = useState([]);
  const [id, setId] = useState(0)
  const [availableCount, setAvailableCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [resource, setResource] = useState("")
  var flagg = false

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
    if (!flagg) {
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
      })
      .catch(error => {
        debugger;
        console.log(error);
      });
      flagg=true
        }
  }

 
  const update = () => {
    debugger
    if (resource=="") { debugger
      console.log(resource)
      toast.info(`resource name can't be empty`)
    }
    
    else if( +availableCount <=0) {  
      debugger
      console.log(availableCount)
      toast.info(`available count can't be less than 1`)
    }
    
    else if ( +totalCount <=0) { 
      debugger
      console.log(totalCount)
      toast.info(`Total count can't be less than 1`)
    }
    else if( +availableCount > +totalCount) {  
        debugger
      toast.info(`Total count can't be less than Available Count`)
    }
    
  else
  {
    var tokenn = sessionStorage.getItem("token");
                        const url = "resource/saveorupdate";
                        const headers = {
                                "Authorization": `Bearer ${tokenn}`
                        };
                        const requestData = {
                          id, resource, totalCount, availableCount
                  };
                  axios.post(`${BaseApi.server_url}${url}`, requestData, { headers })
                                .then(response => {
                                        debugger;
                                        console.log(response.data);
                                        toast.success('Resource Updated successfully');
                                        setId(0)
                                        select()
                                })
                                .catch(error => {
                                        debugger;
                                        console.log(error);
                                        toast.info('something went wrong, please try again');
                                        setId(0)
                                });
  }
  }

  // const bed = 350;

  // if (!sessionStorage.getItem("role")== "ROLE_HELPER")
  if (id != 0)
    return (<>
      <br /> <br />
      <center>
        <div className='alert alert-warning col-md-8'>
          <h3>Add or update resource</h3>
          <h5>Resource id: {id}</h5>
          <table>
          <tr>
              <td>
                Resource Name
              </td>
              <td>
                <input className='col-md-9' type="text" onChange={e=>setResource(e.target.value)}/>
              </td>
              </tr>
            <tr>
              <td>
                Available Count
              </td>
              <td>
                <input className='col-md-9' type="number" onChange={e=>setAvailableCount(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                Total Count
              </td>
              <td>
                <input className='col-md-9' type="number" onChange={e=>setTotalCount(e.target.value)}/>
              </td>
            </tr>
          </table>
          <button className='btn btn-outline-dark' onClick={update}>Submit Resource</button>
        </div>
      </center>
    </>)
  else
    return (<div>
      <section className="vh-100 " style={{ backgroundColor: "#063d76" }}>
        <div className="container py-10 h-50">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col col-xl-6">
              <div className="card" style={{ borderRadius: "2rem" }}>
                <div className="row g-0">
                  <div className="col-md-12 col-lg-12 d-flex align-items-center">
                    <div className="card-body p-10 p-lg-50 text-orange">
                   
                      <div className="align-items-center">
                        <span className="h6 fw-bold">
                          <img src={BaseApi.base_url + 'assets/images/img.png'} style={{ width: '100px', height: '60px' }}></img>
                          Mars Hospitals</span>
                      </div>
                      <div>
                        <center>

                          {
                            res.map((s) => {
                              if (sessionStorage.getItem("role") != "ROLE_HELPER") {
                                var per = ((s.availableCount) / s.totalCount) * 500;
                                var sty = "progress-bar bg-danger";
                                if (per > 150)
                                  sty = "progress-bar bg-warning"
                                if (per > 300)
                                  sty = "progress-bar bg-info"
                                if (per > 400)
                                  sty = "progress-bar bg-success";


                                return (<>

                                  <h2 >{s.id}. &nbsp;
                                    {s.resource} ({s.availableCount}/{s.totalCount})</h2>
                                  <div className="progress" style={{ width: "500px", height: "50px" }}>
                                    <div
                                      className={sty}
                                      role="progressbar"
                                      style={{ width: per }}>
                                      <span className="sr-only">{per / 5}Percent Available (success)</span>
                                    </div>
                                    {/* <button className='btn btn-outline-dark' onClick={e=>setId(e.target.value)} value={s.id}>Update</button> */}
                                  </div> <br />


                                  <br />
                                </>);
                              }

                              else {
                                var per = ((s.availableCount) / s.totalCount) * 500;
                                var sty = "progress-bar bg-danger";
                                if (per > 150)
                                  sty = "progress-bar bg-warning"
                                if (per > 300)
                                  sty = "progress-bar bg-info"
                                if (per > 400)
                                  sty = "progress-bar bg-success";


                                return (<>

                                  <h2 >{s.id}. &nbsp;
                                    {s.resource} ({s.availableCount}/{s.totalCount})</h2>
                                  <div className="progress" style={{ width: "500px", height: "50px" }}>
                                    <div
                                      className={sty}
                                      role="progressbar"
                                      style={{ width: per }}>
                                      <span className="sr-only">{per / 5}Percent Available (success)</span>
                                    </div>
                                    <button className='btn btn-outline-dark' onClick={e => setId(e.target.value)} value={s.id}>Update</button>
                                  </div> <br />


                                  <br />
                                </>);
                              }
                            }
                            )
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