// import React from 'react'
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";



import"./Header.css"
export default function Header() {
    const { user, dispatch } = useContext(Context);
    // const PF = "http://localhost:5000/images/"
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };
    // const user=true;

    return (
        <div className="top">
            <div className="left">
                <img className="logo" src="https://www.shecancodeschool.org/uploads/logos1.png"/>

            </div>
            <div className = "center">
                <ul className="topList">
                    <li className="topListItem"> 
                    <Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"> <Link className="link" to="/">About</ Link></li>
                    <li className="topListItem"><Link className="link" to="/">  Categories </Link></li>
                    <li className="topListItem"> <Link className="link" to="/Publish">Publish</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                      {user && "Logout"}
                    </li>
                    



                   


                </ul>
            </div>
            <div className = "right">
            <i className="searchIcon fas fa-search"></i>
            <i className="topicon fab fa-facebook-square"></i>
            <i className="topicon fab fa-twitter-square"></i>
            <i className="topicon fab fa-linkedin"></i>            
            <i className="topicon fab fa-instagram-square"></i>
            <ul className="topList">
            <li className="topListItem"> <Link className="link" to="/Register">Register</Link></li>
            <li className="topListItem"> <Link className="link" to="/Login">Login</Link></li>
            </ul>

            
            </div>  
            
                      
        </div>
    )
}
