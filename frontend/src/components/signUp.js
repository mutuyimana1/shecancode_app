import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import "./login.css";
function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, userName, password, retypePassword);
    axios
      .post("https://api.shecancodeschool.org/api/auth/register", {
        firstName,
        lastName,
        userName,
        email,
        password,
        retypePassword,
      })
      .then((res) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setUserName("");
        setPassword("");
        setRetypePassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="signup-container">
        <div className="row">
          <div className="col-sm-6" style={{ padding: "30px 50px" }}>
            <h2>SignUp</h2>
            <p>SignUp to create your account</p>
            <TextField
              id="outlined-basic"
              label="first name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "30px" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="last name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "30px" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* <TextField
              id="userName"
              label="User name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "30px" }}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /> */}
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "30px" }}
              name={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              //   id="outlined-basic"
              fullWidth
              label="password"
              variant="outlined"
              type="password"
              id="outlined-password-input"
              sx={{ marginBottom: "30px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <TextField
              //   id="outlined-basic"
              fullWidth
              label="re-type password"
              variant="outlined"
              type="password"
              id="outlined-password-input"
              sx={{ marginBottom: "30px" }}
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.currentTarget.value)}
            />{" "}
            <div className="buttons">
              <Button variant="contained" onClick={handleRegister}>
                SignUp
              </Button>

              <a>SignUp with google</a>
            </div>
          </div>
          <div
            className="col-sm-6 part-login"
            style={{ padding: "80px 10px 10px " }}
          >
            <h2>SignIn</h2>
            <p>
              You arleady have an account? a new NUCLEUS account. Note: Once you
              have created a NUCLEUS Account, you cannot change your username or
              email address
            </p>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                marginLeft: "120px",
                marginTop: "60px",
              }}
            >
              <a href="/signin" style={{ color: "white" }}>
                SignIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
