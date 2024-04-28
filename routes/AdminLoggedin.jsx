import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../Service/Service";

export function AdminLoggedin(props) {
    if (isAdminAuthenticated()) {
        alert("please Login first");
        return <Navigate to="/admin-login"></Navigate>
    } else {
        
        return props.children;  
    }
}