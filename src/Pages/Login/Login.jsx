import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <form action="" className="loginForm">
            <h1 className="title">Login</h1>

                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Please enter your email"/>
                <label>Password</label>
                <input type="text"  className="loginInput" placeholder="Please enter your password"/>
                <button className="loginSubmit">Login</button>

            </form>
            <button className="registerForm">Register</button>
        </div>
    )
}
