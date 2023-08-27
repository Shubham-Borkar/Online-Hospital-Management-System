import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateToDoctor = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
   // const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_DOCTOR"))
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}


export const PrivateToHelper = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
    //const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_HELPER"))
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}

export const PrivateToPatient = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
 //   const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_PATIENT"))
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}

export const PrivateToAdmin = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_ADMIN"))
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}

export const PrivateToAandD = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")||(sessionStorage.getItem("role") == "ROLE_DOCTOR") ))
    return auth ? <Component /> : <Navigate to="/patientLogin" />
}
