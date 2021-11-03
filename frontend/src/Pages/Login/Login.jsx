import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./Login.css";

export default function Login() 
{
  const userRef = useRef();
  const passwordRef = useRef();
//   TO CALL CONTEXT
  const { dispatch, isFetching } = useContext(Context);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // CALL API
    try {
      const res = await axios.post("/auth/login", {
    //    PASSING MY DATA USERNAME AND PASSWORD
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
      // res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
      <h1 className="loginTitle">Login</h1>

        <label>Username</label>
                <input type="text" className="loginInput" placeholder="Please enter your username..."
                 placeholder="Enter your username..."
                 ref={userRef}
               
                />
                <label>Password</label>
                <input type="text"  className="loginInput" placeholder="Please enter your password"
                   ref={passwordRef}
                />
                <button className="loginSubmit" type="submit" disabled={isFetching}>Login</button>

            </form>
            <button className="registerLoginForm">Register</button>
        </div>
    )
}
