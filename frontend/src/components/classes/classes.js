import React, { useState } from "react";
import "./classes.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import "antd/dist/antd.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Checkbox } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Modal, notification } from "antd";
import MenuItem from "@mui/material/MenuItem";

import apiCall from "../../helpers/apiCall";
import images from "../../assets/img/shecancode.jpeg";
import imagesOne from "../../assets/img/IMG-20221210-WA0003.jpg";
import imageTwo from "../../assets/img/IMG-20221210-WA0013.jpg";

const classez = [
  {
    value: "Frontend Web Development",
    label: "Frontend Web Development",
  },
  {
    value: "Full-Stack Software Engineers",
    label: "Full-Stack Software Engineers",
  },
];

const Classes = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [gender, setGender] = useState(null);
  const [clas, setClas] = useState(null);
  const [modalFullStack, setModalFullStack] = useState(false);
  const [modalFrontend, setModalFrontEnd] = useState(false);
  const studentApplictionData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    clas: clas,
    gender: gender,
  };
  const showModal = () => {
    setModalFrontEnd(true);
  };
  const handleOk = () => {
    setModalFrontEnd(false);
  };
  const handleCancel = () => {
    setModalFrontEnd(false);
  };
  const handleOkay = () => {
    setModalFullStack(false);
  };
  const handleCancels = () => {
    setModalFullStack(false);
  };

  return (
    <div className="class-container">
      <div className="home-container">
        <div className="program-container">
          <h3>Professional Certificate in JavaScript:</h3>
          <ul type="square" className="ul_links">
            <li>Full Stack Software Engineer</li>
            <li>Frontend Web Development </li>
          </ul>
          <p>Gain hands-on coding skills, for a competitive market edge.</p>
        </div>
        <div className="applied-form">
          <div className="form form-class">
            <p className="apply-for">Apply For </p>
            <form fullWidth={true}>
              <Box
                className="form__box"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate={false}
                autoComplete="off"
              >
                <TextField
                  required
                  value={firstName}
                  id="outlined-basic"
                  label="FirstName"
                  variant="outlined"
                  InputProps={{ style: { fontSize: 18 } }}
                  InputLabelProps={{ style: { fontSize: 18 } }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>
              <Box
                className="form__box"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-basic"
                  label="LastName"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
              <Box
                className="form__box"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box
                className="form__box"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate={false}
                autoComplete="off"
              >
                <PhoneInput
                  country={"rw"}
                  required
                  containerClass="phone-container"
                  inputStyle={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "2px",
                    border: "1px solid #dedede",
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  placeholder="+250 78* 000 000"
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-select-occupation"
                  select
                  label="Select your choice Class"
                  value={clas}
                  onChange={(e) => setClas(e.target.value)}
                >
                  {classez.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>{" "}
              <RadioGroup
                className="form__box"
                row
                required
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="female"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  disabled={clas == "Frontend Web Development"}
                  label="Male"
                />

                {/* <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  disabled
                /> */}
              </RadioGroup>
              <FormControlLabel
                onClick={() => {
                  if (clas == "Frontend Web Development") {
                    setModalFrontEnd(true);
                  } else if (clas == "Full-Stack Software Engineers") {
                    setModalFullStack(true);
                  } else {
                    notification.warn({
                      message: "please select program you want to attend",
                    });
                  }
                }}
                control={<Checkbox />}
                label="By clicking on this you agree to follow the following conditions"
              />
              <LoadingButton variant="contained" fullWidth size="large">
                Send Application
              </LoadingButton>
            </form>
          </div>
        </div>
        <Modal
          visible={modalFrontend}
          // footer={null}
          onOk={handleOk}
          // onOk={handleCancel}
          onCancel={handleCancel}
        >
          Hahiye
        </Modal>
        <Modal
          visible={modalFullStack}
          // footer={null}
          onOk={handleOkay}
          // onOk={handleCancel}
          onCancel={handleCancels}
        >
          Hahiye hose
        </Modal>
      </div>
    </div>
  );
};
export default Classes;
