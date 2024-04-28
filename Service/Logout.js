import { useNavigate } from "react-router-dom";


export function AdminLogout() { 
  // const navigate = useNavigate();
    if (localStorage.getItem("role") === "admin") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      // navigate("/");
      return true ;
    }else 
    return false ;
  }

  export function UserLogout() { 
    if (localStorage.getItem("role") === "user") {
        localStorage.removeItem("role")
      localStorage.removeItem("token");
      return true;
    }else 
    return false ;
  }

  export function AdminLoggedIn() { 
    return localStorage.getItem("role") === "admin" ;
  }

  export function UserLoggedin() { 
    return localStorage.getItem("role") === "user" ;
  }


  