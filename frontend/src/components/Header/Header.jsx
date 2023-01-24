// import React from 'react'
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import "./Header.css";
export default function Header() {
  const history = useHistory();
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  // const user=true;

  return (
    <>
      <div className="tope">
        <div className="top">
          <div className="left">
            <img
              className="logo"
              src="https://www.shecancodeschool.org/uploads/logos1.png"
            />
            <h2>
              SheCan<span>CODE</span>
            </h2>
            {/* </a> */}
          </div>
          <div className="right">
            <ul className="topList">
              <a href="https://www.shecancodeschool.org/" className="link">
                <li className="topListItem"> Home </li>
              </a>

              <li className="topListItem">
                <Link className="link" to="/">
                  Blog
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/application">
                  Apply
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/Cats">
                  {" "}
                  {user && "Categories"}{" "}
                </Link>
              </li>
              <li className="topListItem">
                {" "}
                <Link className="link" to="/Publish">
                  {" "}
                  {user && "Publish"}
                </Link>
              </li>
              <li className="topListItem">
                {" "}
                <Link className="link" to="/register">
                  {" "}
                  {user && "Register"}
                </Link>
              </li>

              <li className="topListItem" onClick={handleLogout}>
                {user && "Logout"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
