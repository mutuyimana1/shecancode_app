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
          width="95%"
          // footer={null}
          onOk={handleOk}
          // onOk={handleCancel}
          onCancel={handleCancel}
        >
          <h2 style={{ textAlign: "center", padding: "10px" }}>
            SheCanCODE-
            <spa style={{ color: "#61dafb" }}>Web Development</spa>{" "}
            Certification Program.
          </h2>
          <div className="full-container">
            <div className="col-3">
              <h5>Start On</h5>
              <p>February 05</p>
            </div>
            <div className="col-3">
              <h5>Duration</h5>
              <p>16 weeks</p>
            </div>
            <div className="col-3">
              <h5>Program Fees</h5>
              <p>....</p>
            </div>
            <div className="col-3">
              <h5>Scholarship</h5>
              <p>full</p>
            </div>
          </div>
          <div className="all-container">
            <div style={{ width: "25%" }} className="content-container">
              <h6>Program Topics</h6>
              <ul>
                <li>Module One</li>
                <li>Module Two</li>
              </ul>
            </div>
            <div className="content-container">
              <h6>Requirement for this program</h6>
              <ul>
                <li>Have basic skills in coding.</li>
                <li>Apply and pass the application test.</li>
                <li>Pass the simple/ basic coding challenge</li>
                <li>Demonstrate interest in software engineering field.</li>
              </ul>
            </div>
            <div>
              <h6>why This Program? </h6>
              <p>
                Individuals who choose to join our program are <br />
                looking to become developers.
                <br /> We teach our students in-demand programming languages
                <br /> and tools needed to be valued workers in the industry.
                <br />
                We design our curriculum based on market demand and employers'
                desires.
                <br /> We understand having skills and getting a job is one
                thing.
              </p>
            </div>
            <div>
              <h6>Here is detail for program fee</h6>
              <ul>
                <li>
                  Program Registration fee. 25000 rwf.( no payment plan, paid at
                  once before the start of program)
                </li>
                <li>
                  Certification exam and certificate fee 40000 rwf ( No payment
                  plan, paid before start of the program)
                </li>
                <li>
                  25% of program fee = 150, 000 rwf. ( Payment plan available +
                  refund based on refund policy).
                </li>
              </ul>
            </div>
          </div>
          <div className="button">
            <Button variant="contained"> Disagree</Button>
            <Button variant="contained" style={{ marginLeft: "50px" }}>
              Agree
            </Button>
          </div>
        </Modal>
        <Modal
          visible={modalFullStack}
          width="95%"
          // footer={null}
          onOk={handleOkay}
          onClose={handleCancel}
          // onOk={handleCancel}
          onCancel={handleCancels}
        >
          <h2 style={{ textAlign: "center", padding: "10px" }}>
            Full stack <spa style={{ color: "#61dafb" }}>developer</spa>
          </h2>
          <div className="full-container">
            <div className="col-3">
              <h5>Start On</h5>
              <p>February 05</p>
            </div>
            <div className="col-3">
              <h5>Duration</h5>
              <p>16 weeks</p>
            </div>
            <div className="col-3">
              <h5>Program Fees</h5>
              <p>600 USD</p>
            </div>
            <div className="col-3">
              <h5>Scholarship</h5>
              <p>70%</p>
            </div>
          </div>
          <div className="all-container">
            <div style={{ width: "25%" }} className="content-container">
              <h6>Program Topics</h6>
              <ul>
                <li>Module One</li>
                <li>Module Two</li>
              </ul>
            </div>
            <div className="content-container">
              <h6>
                HOW TO GET INTO Full-Stack Software Engineering Certification
                Program?
              </h6>
              <ul>
                <li>Have basic skills in coding.</li>
                <li>Apply and pass the application test.</li>
                <li>Pass the simple/ basic coding challenge</li>
                <li>Demonstrate interest in software engineering field.</li>
              </ul>
            </div>
            <div>
              <h6>Program fee and Payment plan. </h6>
              <p>
                The total cost of the program is 600 USD and <br />
                Igire Rwanda is Paying 75% to all <br /> selected applicants.
                The applicant will pay 150 USD(150K RWF)
                <br /> for three months. Here are the
                <br /> details of the program fee.
              </p>
            </div>
            <div>
              <h6>Here is detail for program fee</h6>
              <ul>
                <li>
                  Program Registration fee. 25000 rwf.( no payment plan, paid at
                  once before the start of program)
                </li>
                <li>
                  Certification exam and certificate fee 40000 rwf ( No payment
                  plan, paid before start of the program)
                </li>
                <li>
                  25% of program fee = 150, 000 rwf. ( Payment plan available +
                  refund based on refund policy).
                </li>
              </ul>
            </div>
          </div>
          <div className="button">
            <Button variant="contained"> Disagree</Button>
            <Button variant="contained" style={{ marginLeft: "50px" }}>
              Agree
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Classes;
