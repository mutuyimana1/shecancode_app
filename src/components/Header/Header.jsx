// import React from 'react'
import {Link} from "react-router-dom";


import"./Header.css"
export default function Header() {
    const user=true;

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
                    <li className="topListItem"> <Link className="link" to="/Register">Register</Link></li>
                    <li className="topListItem"> <Link className="link" to="/Login">Login</Link></li>



                   


                </ul>
            </div>
            <div className = "right">
            <i className="topicon fab fa-facebook-square"></i>
            <i className="topicon fab fa-twitter-square"></i>
            <i className="topicon fab fa-linkedin"></i>            
            <i className="topicon fab fa-instagram-square"></i>
            <i className="searchIcon fas fa-search"></i>

            
            </div>  
                      
        </div>
    )
}
