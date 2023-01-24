import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
function LoginPage() {
  return (
    <div>
      <div className="login-container">
        <div className="row">
          <div className="col-sm-6" style={{ padding: "30px 50px" }}>
            <h2>Login</h2>
            <p>Sign in to your account</p>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "30px" }}
            />
            <TextField
              //   id="outlined-basic"
              fullWidth
              label="password"
              variant="outlined"
              type="password"
              id="outlined-password-input"
              sx={{ marginBottom: "30px" }}
            />{" "}
            <div className="buttons">
              <Button variant="contained">Login</Button>

              <a>Forget password?</a>
            </div>
          </div>
          <div className="col-sm-6 part-login">
            <h2>SignUp</h2>
            <p>
              To register a new NUCLEUS account. Note: Once you have created a
              NUCLEUS Account, you cannot change your username or email address
            </p>
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white", marginLeft: "120px" }}
            >
              Sign-Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
