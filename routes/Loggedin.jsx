import { Navigate } from "react-router-dom";
import {  isAuthenticated } from "../Service/Service";

export function Loggedin(props) {
    if (isAuthenticated) {
        alert("please Login first");
        return <Navigate to="/login"></Navigate>
    } else {
        return props.children;  
    }
}
