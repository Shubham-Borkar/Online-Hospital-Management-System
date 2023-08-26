import { useSelector } from 'react-redux';
import PatientLogin from '../Patient/PatientLogin';
import { Route } from 'react-router-dom';
function ProtectedRoute(props) {
    const loginStatus = useSelector((state) => state.auth.status)
    debugger
    console.log(props.path)

    ///if(loginStatus && sessionStorage.getItem("token")!=null )
    if(true)
    {
    return <Route path={props.path} exact
    component={props.component}/>
    }
    else{
        return <PatientLogin/>
    }
}

export default ProtectedRoute;