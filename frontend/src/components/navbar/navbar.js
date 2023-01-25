import React, { useState } from "react";
import logo from "../../assets/img/logos1.png";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="header_nav">
      <div className="logo_container">
        <a href="/home" className="logo-link">
          <img src={logo} className="logo" />
        </a>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <MenuIcon />
      </div>
      <ul className={`nav_links  ${showNavbar && "active"}`}>
        <li>
          <a href="#" className="nav_link">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="nav_link">
            About-Us
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            Contact-Us
          </a>
        </li>
        <li>
          <a href="#program" className="nav_link">
            Program
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            Apply
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
