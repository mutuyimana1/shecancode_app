import React, { useState } from "react";
import logo from "../../assets/img/logos1.png";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="header_nav">
      <div className="logo_container">
        <a href="/home" className="logo-link">
          <div className="logo-container">
            <img src={logo} className="logo" />
            <div className="tekContainer">
              <h3 className="tekCode">
                <span>&lt;</span> Tek-code /<span>&gt;</span>
              </h3>
            </div>
          </div>
        </a>
      </div>
      <div
        className="menu-icon"
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      >
        <MenuIcon />
      </div>
      <ul className={showNavbar ? "nav_links active" : "nav_links"}>
        <li>
          <a
            href="/"
            className="nav_link"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#aboutUs"
            className="nav_link"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            About-Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav_link"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            Contact-Us
          </a>
        </li>
        <li>
          <a
            href="#program"
            className="nav_link"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            Program
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav_link"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            Apply
          </a>
        </li>
        <li>
          <a href="/signin" className="nav_link">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
