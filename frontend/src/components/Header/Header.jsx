// import React from 'react'
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import {useHistory} from "react-router-dom";



import"./Header.css"
export default function Header() {
  const history = useHistory();
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      history.push("/")

    };
    // const user=true;

    return (
      
        <div className="tope">
          {/* <div className="top-bar">
        <div className="container-fluide">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="left-top">
                        <div className="email-box link">
                            <a href="mailto:igirerwanda@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i>
                                igirerwanda@gmail.com </a>
                        </div>
                        <div className="phone-box link">
                            <a href="tel:+250788737287"><i class="fa fa-phone" aria-hidden="true"></i> +250788737287</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="right-top">
                        <div className="social-box">
                            <ul>
                                <li><a href="https://www.facebook.com/igirerwandaorganization" target="Facebook"><i
                                            class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/igire_rwanda/" target="Instagram"><i
                                            class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                 <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li> 
                                <li><a href="https://twitter.com/ShecancodeRW" target="shecancode"><i
                                            class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-rss-square" aria-hidden="true"></i></a></li>
                                <li><a id="openModalBtn" className="button btn btn-lighte btn-radius btn-brd" href="#">Apply</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div> */}
          <div className="top">
            <div className="left">
               {/* <a href="" className="link">  */}
               <img className="logo" src="https://www.shecancodeschool.org/uploads/logos1.png"/>
               <h2>SheCan<span>CODE</span></h2>
               {/* </a> */}

            </div>
            <div className = "right" >
                <ul className="topList">
                     <a href="https://www.shecancodeschool.org/" className="link">
                     <li className="topListItem"> Home </li></a>
                     
                    <li className="topListItem"><Link className="link" to="/">Blog</Link></li>
                    {/* <li className="topListItem"> <Link className="link" to="/">About</ Link></li> */}
                    <li className="topListItem"><Link className="link" to="/Cats"> {user && "Categories"}  </Link></li>
                    <li className="topListItem"> <Link className="link" to="/Publish"> {user && "Publish"}</Link></li>
                    <li className="topListItem"> <Link className="link" to="/register"> {user && "Register"}</Link></li>

                    {/* AddCats */}
                    <li className="topListItem" onClick={handleLogout}>
                      {user && "Logout"}
                    </li>
                    



                   


                </ul>
            </div>
            {/* <div className = "right">
            <i className="searchIcon fas fa-search"></i>
           <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank"> <i className="topicon fab fa-facebook-square"></i></a>
           <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-twitter-square"></i></a>
           <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-linkedin"></i> </a>           
           <a href="https://www.facebook.com/igirerwandaorganization/posts/shecancode-initiative-prepare-women-and-girls-to-enter-in-technology-industry-th/1913555692059845/" TARGET="blank">  <i className="topicon fab fa-instagram-square"></i></a>
              {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
            <ul className="topList">
                 
            <li className="topListItem"><i className="fa fa-user"></i> <Link className="link" to="/">Register</Link></li>
            <li className="topListItem"> <Link className="link" to="/">Login</Link></li>
            </ul>
        )}
            </div>   */}
            </div>
           
                      
        </div>
    )
        }