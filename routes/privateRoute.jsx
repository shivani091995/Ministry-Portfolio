import { Navigate } from "react-router-dom"
import { isAdminAuthenticated, isAuthenticated } from "../Service/Service" 

export function PrivateRoute(props) {  
    if (isAuthenticated()) {
        return props.children
    } else {
       return <Navigate to="/loggedin"></Navigate>
    } 
}
export function PrivateAdminRoute(props) {  
    if (isAdminAuthenticated()) {
        return props.children
    } else {
       return <Navigate to="/adminloggedin"></Navigate>
    } 
}