import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const PrivateToDoctor = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
   // const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_DOCTOR"))
    return auth ? <Component /> : <Navigate to="/login" />
}


export const PrivateToHelper = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
    //const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_HELPER"))
    return auth ? <Component /> : <Navigate to="/login" />
}

export const PrivateToPatient = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
 //   const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_PATIENT"))
    return auth ? <Component /> : <Navigate to="/login" />
}

// export const PrivateToAdmin = ({ Component }) => {
//     debugger
//     const loginStatus = useSelector((state) => state.auth.status)
// //const userRole = useSelector((state) => state.auth.role)
//     const auth = ((loginStatus || sessionStorage.getItem("token")) && (sessionStorage.getItem("role") == "ROLE_ADMIN"))
//     return auth ? <Component /> : <Navigate to="/login" />
// }

export const PrivateToAandD = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")||(sessionStorage.getItem("role") == "ROLE_DOCTOR") ))
    return auth ? <Component /> : <Navigate to="/login" />
}

export const PrivateToAandDandH = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")||(sessionStorage.getItem("role") == "ROLE_DOCTOR")||(sessionStorage.getItem("role") == "ROLE_HELPER") ))
    return auth ? <Component /> : <Navigate to="/login" />
}

export const PrivateToAandH = ({ Component }) => {
    debugger
    const loginStatus = useSelector((state) => state.auth.status)
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")||(sessionStorage.getItem("role") == "ROLE_HELPER") ))
    return auth ? <Component /> : <Navigate to="/login" />
}


// export const PrivateToAandH = ({ Component }) => {
//     debugger
//     const loginStatus = useSelector((state) => state.auth.status)
// //const userRole = useSelector((state) => state.auth.role)
//     const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")||(sessionStorage.getItem("role") == "ROLE_HELPER") ))
//     if (!auth)
//     {
//         debugger
//         toast.warning(`You don't have access to that function`)
//     }
//     else
//     return <Component />
// }

export const PrivateToAdmin = ({ Component }) => {
    debugger
        const loginStatus = useSelector((state) => state.auth.status)
       
//const userRole = useSelector((state) => state.auth.role)
    const auth = ((loginStatus || sessionStorage.getItem("token")) && ((sessionStorage.getItem("role") == "ROLE_ADMIN")))
    if (!auth)
    {
        debugger
        toast.warning(`You don't have access to that function`)
    }
    else
    return <Component />
    
}