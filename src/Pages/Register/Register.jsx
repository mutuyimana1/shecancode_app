import React from 'react'
import "./Register.css"

export default function Register() {
    return (
        <div className="register">
            <form action="" className="registerForm">
            <h1 className="title">Register</h1>
                 <label>Username</label>
                <input type="text" className="registerInput" placeholder="Please enter your username"/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Please enter your email"/>
                <label>Password</label>
                <input type="text"  className="registerInput" placeholder="Please enter your password"/>
                <button className="registersubmit">Register</button>

            </form>
            <button className="registerLogin">Login</button>
        </div>
    )
}
