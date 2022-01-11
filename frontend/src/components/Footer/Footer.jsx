import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import {useHistory} from "react-router-dom";
import axios from "axios"
import { useContext, useEffect, useState } from "react"

// import { DropDownList } from "@progress/kendo-react-dropdowns";
import apiCall from '../../helpers/apiCall'

export default function Footer() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get(apiCall+"/category/all");
        console.log("hhhdhdhhd",res)
        setCats(res.data.data);
      };
      getCats();
    }, []);
      
    const history = useHistory();
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      history.push("/")

    };
    return (
        <div className="footerMain">
            <footer class="footer">
                <div class="footer__addr">
                {/* <div className="left"> */}
                <h2><img className="logo" src="https://www.shecancodeschool.org/uploads/logos1.png"/></h2>

            {/* </div> */}
                    {/* <h1 class="footer__logo">SheCanCODE</h1> */}
                    <h2>Contact</h2>
                    <address>
                        KG 549 St 36 Kigali-Rwanda
                       <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>
                <ul class="footer__nav">
                    <li class="nav__item">
                        <h2 class="nav__title">Media</h2>
                <ul class="nav__ul">
                <ul className="sidebarList">
                {cats.map((c) => (
           
            <Link to={`/?cat=${c._id} `} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
         
            
          ))}


        </ul>
                </ul>
                </li>
                <li class="nav__item nav__item--extra">
                  <h2 class="nav__title">Technology</h2>
                <ul class="nav__ul nav__ul--extra">
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Technology </a></li>
                    <li><a href="#">Language </a></li>
                    <li><a href="#">ReactJS</a></li>
                    <li><a href="#">NodeJS</a></li>
                    <li><a href="#">Hackton</a></li>
                </ul>
                </li>
                <li class="nav__item">
                    <h2 class="nav__title">Legal</h2>
                <ul class="nav__ul"> 
                <li><a href="#">Privacy Policy</a></li>
                <li> <a href="#">Terms of Use</a></li>
                {/* <li><a href="#">Sitemap</a></li> */}
                </ul>
                <div className = "righte">
            {/* <i className="searchIcon fas fa-search"></i> */}
           {/* <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank"> <i className="topicon fab fa-facebook-square"></i></a> */}
           {/* <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-twitter-square"></i></a> */}
           {/* <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-linkedin"></i> </a>            */}
           {/* <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-instagram-square"></i></a> */}
              {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (

            <ul className="topListe">
                 
            <li className="topListIteme">
                 {/* <i className="fa fa-user"> </i>  */}
                <Link className="link" to="/Register">Register</Link></li>
            <li className="topListIteme"> <Link className="link" to="/Login">Login</Link></li>
            </ul>

        )}
            </div>  
                </li>
                </ul>
    <div class="legal">
         <p>&copy; 2021 SheCanCODE. All rights reserved.</p>
         <div class="legal__links">
             <span>Developed with<span class="heart">♥</span>by SheCan<span>CODE</span></span>
        
          </div>
    </div>
</footer>
            
        </div>
    )
}
