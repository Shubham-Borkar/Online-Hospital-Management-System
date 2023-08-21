import { Route } from "react-router-dom";
function ProtectedRoute(props)
{
    debugger;
    return <Route path={props.path} exact
    component={props.component}/>
}


export default ProtectedRoute;

