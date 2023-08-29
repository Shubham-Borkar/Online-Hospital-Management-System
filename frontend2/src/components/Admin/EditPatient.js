import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseApi } from '../api/BaseApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EditPatient(props) {

        // const [pid, ]
        var { pid } = useParams();
        const [name, setName] = useState("")
        const [dob, setDob] = useState("")
        const [phone, setPhone] = useState(0)
        const [address, setAddress] = useState("")
        const [gender, setGender] = useState("")
        const [day, setDay] = useState("")
        var flagg = false


        useEffect(() => {
                debugger
                console.log("inside componentDidMount..");
                select();
                currentdate();
        }, [])

        const select = () => {
                debugger;
                if (!flagg) {
                        var tokenn = sessionStorage.getItem("token")
                        const url = `patient/${pid}`;
                        axios.get(`${BaseApi.server_url}${url}`,
                                { headers: { "Authorization": `Bearer ${tokenn}` } })
                                .then(res => {
                                        debugger
                                        setAddress(res.data.address)
                                        setDob(res.data.dob)
                                        setName(res.data.name)
                                        setPhone(res.data.phone)
                                        setGender(res.data.gender)
                                        toast.info(`Patient: ${res.data.name} details`)
                                })
                                .catch(error => {
                                        debugger
                                        console.log(error)
                                        toast.info("Error, Patient doesn't exist")
                                })
                        flagg=true
                }
        }

        const currentdate = () => {
                debugger
                var today, dd, mm, yyyy;
                today = new Date();
                dd = today.getDate() - 1;
                mm = today.getMonth() + 1;
                if (mm < 10)
                        mm = '0' + mm
                yyyy = today.getFullYear();
                const dddd = yyyy + '-' + mm + '-' + dd;
                setDay(dddd)
        }

        // const update=()=>{
        //         debugger
        //         var tokenn=sessionStorage.getItem("token")
        //         const url= `patient/${pid}`;
        //         axios.put(`${BaseApi.server_url}${url}`,
        //         { headers: {"Authorization" : `Bearer ${tokenn}`}},
        //         {
        //                 name, dob, phone, address
        //         })
        //         .then(res=>{
        //                 debugger
        //                 console.log(res.data);
        //                 toast.success('Updates saved successfully')
        //                 select();
        //         })
        //         .catch(error=>{
        //                 debugger
        //                 toast.error('please try again')
        //                 console.log(error)
        //         })
        //    }

        const update = () => {
                debugger;
                var tokenn = sessionStorage.getItem("token");
                const url = `patient/${pid}`;

                const headers = {
                        "Authorization": `Bearer ${tokenn}`
                };

                const requestData = {
                        name,
                        dob,
                        phone,
                        address,
                        gender
                };

                axios.put(`${BaseApi.server_url}${url}`, requestData, { headers })
                        .then(res => {
                                debugger;
                                console.log(res.data);
                                toast.success('Updates saved successfully');
                                select(); // Fetch the updated data
                        })
                        .catch(error => {
                                debugger;
                                toast.error('please try again');
                                console.log(error);
                        });
        };


        debugger;
        return (<>
                <section className="vh-70 " style={{ backgroundColor: "#063d76" }}>
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
                                                                                <center>
                                                                                        <div style={{ width: "600px" }}>
                                                                                                {/* <form> */}
                                                                                                <h1><center>Edit Patient</center></h1>
                                                                                                <hr />
                                                                                                <div className="table-bordered">

                                                                                                        <div className='form-group input-group-sm'>Full Name
                                                                                                                <input type="text" className='form-control widthSize'
                                                                                                                        name="name"
                                                                                                                        value={name}
                                                                                                                        onChange={e => setName(e.target.value)}
                                                                                                                />
                                                                                                        </div> <br />

                                                                                                        <div className='form-group'>Gender
                                                                                                                <input type="text" className='form-control widthSize'
                                                                                                                        name="gender"
                                                                                                                        value={gender}
                                                                                                                        onChange={e => setGender(e.target.value)} />
                                                                                                        </div> <br />

                                                                                                        <div className='form-group'>Phone
                                                                                                                <input type="text" className='form-control widthSize'
                                                                                                                        name="phone"
                                                                                                                        value={phone}
                                                                                                                        onChange={e => setPhone(e.target.value)} />
                                                                                                        </div> <br />

                                                                                                        <div className='form-group'>Date of Birth
                                                                                                                <input type="date" className='form-control widthSize'
                                                                                                                        name="dob"
                                                                                                                        value={dob}
                                                                                                                        onChange={e => setDob(e.target.value)} max={day} />
                                                                                                        </div> <br />

                                                                                                        <div className='form-group'>Address
                                                                                                                <input type="text" className='form-control widthSize'
                                                                                                                        name="address"
                                                                                                                        value={address}
                                                                                                                        onChange={e => setAddress(e.target.value)} />
                                                                                                        </div> <br />

                                                                                                        <button className='btn btn-outline-info'
                                                                                                                onClick={update}>
                                                                                                                Apply changes
                                                                                                        </button>
                                                                                                </div> <br />

                                                                                                {/* </form> */}
                                                                                        </div>
                                                                                </center>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        </>);
}

export default EditPatient;