import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
function SignUpPage() {
  return (
    <div>
      <div className="login-container">
        <div className="row">
          <div className="col-sm-6" style={{ padding: "30px 50px" }}>
            <h2>SignUp</h2>
            <p>SignUp to create your account</p>
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
            <TextField
              //   id="outlined-basic"
              fullWidth
              label="re-type password"
              variant="outlined"
              type="password"
              id="outlined-password-input"
              sx={{ marginBottom: "30px" }}
            />{" "}
            <div className="buttons">
              <Button variant="contained">SignUp</Button>

              <a>SignUp with google</a>
            </div>
          </div>
          <div className="col-sm-6 part-login">
            <h2>SignIn</h2>
            <p>
              You arleady have an account? a new NUCLEUS account. Note: Once you
              have created a NUCLEUS Account, you cannot change your username or
              email address
            </p>
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white", marginLeft: "120px" }}
            >
              SignIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
