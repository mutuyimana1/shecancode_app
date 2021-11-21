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
        <div className="top">
            <div className="left">
                <img className="logo" src="https://www.shecancodeschool.org/uploads/logos1.png"/><h2>SheCan<span>CODE</span></h2>

            </div>
            <div className = "center">
                <ul className="topList">
                    <li className="topListItem"> 
                    <Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"> <Link className="link" to="/">About</ Link></li>
                    <li className="topListItem"><Link className="link" to="/Cats">  Categories </Link></li>
                    <li className="topListItem"> <Link className="link" to="/Publish"> {user && "Publish"}</Link></li>
                    {/* AddCats */}
                    <li className="topListItem" onClick={handleLogout}>
                      {user && "Logout"}
                    </li>
                    



                   


                </ul>
            </div>
            <div className = "right">
            {/* <i className="searchIcon fas fa-search"></i> */}
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
                 
            <li className="topListItem"><i className="fa fa-user"></i> <Link className="link" to="/Register">Register</Link></li>
            <li className="topListItem"> <Link className="link" to="/Login">Login</Link></li>
            </ul>

        )}
            </div>  
            
                      
        </div>
    )
        }