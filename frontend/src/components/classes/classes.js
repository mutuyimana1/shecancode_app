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
import FullStack from "./fullStack";
import validator from "validator";
import axios from "axios";
import Frontend from "./frontend";
import apiCall from "../../helpers/apiCall";
import images from "../../assets/img/shecancode.jpeg";
import imagesOne from "../../assets/img/IMG-20221210-WA0003.jpg";
import imageTwo from "../../assets/img/IMG-20221210-WA0013.jpg";
import MuiAlert from "@mui/material/Alert";
import Duration from "./programDuration";
import Navbar from "../navbar/navbar";
import Footer from "../footerLayer/footerLayer";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
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
const program = [
  {
    value: "Evening",
    label: "Evenig",
  },
  {
    value: "Day",
    label: "Day",
  },
];
const educations = [
  {
    value: "Secondary",
    label: "Secondary",
  },
  {
    value: "High Secondary",
    label: "High Secondary",
  },
  {
    value: "Diploma",
    label: "Diploma",
  },
  {
    value: "Undergraduate",
    label: "Undergraduate",
  },
  {
    value: "Bachelor's Degree",
    label: "Bachelor's Degree",
  },
  {
    value: "Master's Degree",
    label: "Master's Degree",
  },
];

const Classes = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [gender, setGender] = useState(null);
  const [clas, setClas] = useState(null);
  const [day, setDay] = useState(null);
  const [education, setEducation] = useState(null);
  const [modalFullStack, setModalFullStack] = useState(false);
  const [modalFrontend, setModalFrontEnd] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked && clas == "Frontend Web Development") {
      setModalFrontEnd(true);
    } else if (
      event.target.checked &&
      clas == "Full-Stack Software Engineers"
    ) {
      setModalFullStack(true);
    } else {
      notification.warn({
        message: "Accept the term and condition",
      });
    }
  };
  const studentApplictionData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    education: education,
    phone: phone,
    clas: clas,
    gender: gender,
    day: day,
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
  const checkValidationsData = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !education ||
      !clas ||
      !day ||
      gender === null
    ) {
      notification.warn({ message: "Kindly fill the form correctly!" });
      return false;
    } else {
      if (!validator.isEmail(email)) {
        notification.warn({ message: "Your email should be valid!" });
        return false;
      }
      if (phone.length !== 12) {
        notification.warn({ message: "Your Phone should be valid!" });
        return false;
      }
      return true;
    }
  };
  const handleComplete = async () => {
    if (checkValidationsData()) {
      console.log(studentApplictionData);
    }
  };

  const handleSubmitApplication = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        apiCall + "/application/apply",
        studentApplictionData
      );

      if (response.status === 200) {
        setLoading(false);
        if (!loading) {
          handleComplete();
        }
      }
      // else {
      //   <Alert severity="error">Failed to submit</Alert>;
      //   setLoading(false);
      //   handleReset();
      // }
    } catch (e) {
      setLoading(false);
      <Alert severity="error">Failed to submit</Alert>;
      // handleReset();
      console.log("error:", e);
    }
  };
  return (
    <>
      <Navbar />

      <div className="class-container">
        <div className="home-container">
          <div className="home-content">
            <div className="program-container">
              <h1>Professional Certificate in Coding:</h1>
              <ul className="ul_links">
                <li>TekCode Full-Stack Engineering</li>
                <li>SheCanCODE Web Development</li>
              </ul>
              <p className="paragraph">
                Gain hands-on coding skills, for a competitive market edge.
              </p>
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
                      label="Select Your Education level"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    >
                      {educations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>{" "}
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
                      label="When is the best time to study?"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    >
                      {program.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>{" "}
                  <FormControlLabel
                    disabled={!clas}
                    onClick={() => {}}
                    control={<Checkbox onChange={handleChange} />}
                    label="By clicking on this you agree to follow the following conditions"
                  />
                  <LoadingButton
                    loading={loading}
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={!checked}
                    onClick={handleSubmitApplication}
                  >
                    Send Application
                  </LoadingButton>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Duration />
        <Modal
          visible={modalFrontend}
          width="95%"
          // footer={null}
          onOk={handleOk}
          // onOk={handleCancel}
          onCancel={handleCancel}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Frontend />
        </Modal>
        <Modal
          visible={modalFullStack}
          width="95%"
          // footer={null}
          onOk={handleOkay}
          // onOk={handleCancel}
          onCancel={handleCancels}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <FullStack />
        </Modal>
      </div>
      <Footer />
    </>
  );
};
export default Classes;
