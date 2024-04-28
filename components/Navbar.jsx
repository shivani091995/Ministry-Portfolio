import React, { useState } from "react";
import "./navstyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Logo from "../assets/logo.png";
import { NavDropdown } from "react-bootstrap";
import { AdminLoggedIn, AdminLogout, UserLoggedin, UserLogout } from "../Service/Logout";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      {/* <h3 className="navbar-logo">
        <img alt="minImg" src={Logo} />
      </h3> */}
      <h5 className="logoname">Ministerial Portfolio Display</h5>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <NavDropdown title={<span style={{ color: 'white' }}><i className="logNav" aria-hidden="true"></i> LogIn</span>} id="NavDrop-custom" >
      <div className="custom-dropdown" id="collasible-nav-dropdown">
        {UserLoggedin() ? (
          <NavDropdown.Item className="dropdown-item" onClick={UserLogout}>User Logout</NavDropdown.Item>
        ) : (
          <Link to="/login" className="dropdown-item">User LogIn</Link>
        )}
        {AdminLoggedIn() ? (
          <NavDropdown.Item className="dropdown-item" onClick={AdminLogout}>Admin Logout</NavDropdown.Item>
        ) : (
          <Link to="/adminloggedin" className="dropdown-item">Admin LogIn</Link>
        )}
        <Link to="/signUp" className="dropdown-item">Sign Up</Link>
      </div>
    </NavDropdown>
    </nav>
  );
};

 export default Navbar;

