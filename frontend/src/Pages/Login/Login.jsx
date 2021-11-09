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
    <div class="containere">
      <div class="row">
        <div class="col-sm-6">
        <img src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>

        </div>
        <div class="col-sm-6">
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
              <p>You don't have an account? Please Register Here
              <button className="registerLoginForm">
              <Link className="link" to="/register">
                Register
              </Link>
                </button>

              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
