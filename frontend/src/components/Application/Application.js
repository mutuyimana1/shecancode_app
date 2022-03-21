import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./Application.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
// import SendIcon from "@mui/icons-material/Send";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuItem from "@mui/material/MenuItem";

import apiCall from "../../helpers/apiCall";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const steps = [
  "Personel Details",
  "Education Details",
  "Carreer Questions",
  "Response",
];
const occupations = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "job",
    label: "Job",
  },
  {
    value: "none",
    label: "None",
  },
];
const hourSpends = [
  {
    value: "More than 5 hours/day",
    label: "More than 5 hours/day",
  },
  {
    value: "5 hours/day",
    label: "5hours/day",
  },
  {
    value: "4 hours/day",
    label: "4hours/day",
  },
  {
    value: "3 hours/day",
    label: "3hours/day",
  },
  {
    value: "Less then 3 hours/day",
    label: "Less then 3 hours/day",
  },
];
const hears = [
  {
    value: "Facebook",
    label: "Facebook",
  },
  {
    value: "Instagram",
    label: "Instagram",
  },
  {
    value: "YouTube",
    label: "YouTube",
  },
  {
    value: "Website",
    label: "Website",
  },
  {
    value: "friend referral",
    label: "friend referral",
  },
];
const locations = [
  {
    value: "Kicukiro",
    label: "Kicukiro",
  },
  {
    value: "Gasabo",
    label: "Gasabo",
  },
  {
    value: "Nyarugenge",
    label: "Nyarugenge",
  },
  ,
  {
    value: "Other",
    label: "Other",
  },
];

const Application = () => {
  const [studentAppliction, setStudentAppliction] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hearsFrom, setHearsFrom] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [dream, setDream] = useState("");
  const [sector, setSector] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [laptop, setLaptop] = useState("");
  const [commitment, setCommitment] = useState();
  const [pay, setPay] = useState();
  const [district, setDistrict] = useState();
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState("");
  const [hours, setHours] = useState("");

  // const [location, setLocation] = useState("Location");
  const studentApplictionData = {
    fistName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    gender: gender,
    experience: experience,
    laptop: laptop,
    job: job,
    hours: hours,
    commitment: commitment,
    pay: pay,
    hears: hearsFrom,
    scholarship: scholarship,
    dream: dream,
    sector: sector,
    district,
    occupation,
  };

  // PersonalForm
  const personal = () => (
    <div className="form">
      <h6>Name</h6>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1,  width: ['90%', '90%', '44%']},
        }}
        noValidate
        autoComplete="off"
        className="form__box"
      >
        <TextField
          required
          id="outlined-basic"
          label="FirstName"
          variant="outlined"
          value={firstName}
          InputProps={{ style: { fontSize: 18 } }}
          InputLabelProps={{ style: { fontSize: 18 } }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="LaststName"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <h6>Email</h6>
      <Box
        className="form__box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <FormControl>
        <h6>Gender</h6>
        <RadioGroup
          className="form__box"
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <h6>Phone Number</h6>
      <Box
        className="form__box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Box>
    </div>
  );

  //EducationForm
  const education = () => (
    <div className="form">
      <FormControl>
        <h6>Do you have experience with Software Development?</h6>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group-education"
          onChange={(e) => setExperience(e.target.value)}
          value={experience}
        >
          <FormControlLabel
            key="1"
            value="true"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            key="2"
            value="false"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <FormControl>
          <h6>Do you own/have laptop?</h6>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group-laptop"
            value={laptop}
            onChange={(e) => setLaptop(e.target.value)}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1,  width: ['90%', '90%', '44%']},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-occupation"
          select
          label="Select occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          helperText="Please select your occupation"
        >
          {occupations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-hours"
          select
          label="Select Hours spend coding"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          helperText="hours you spend doing coding"
        >
          {hourSpends.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </div>
  );
  const question = () => (
    <div className="form">
      <FormControl>
        <h6>
          Are you commited to attend full-time on campus class from Monday to
          Friday ?
        </h6>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={commitment}
          onChange={(e) => setCommitment(e.target.value)}
        >
          <FormControlLabel value="true" control={<Radio />} label=" Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <h6>
          Do you understand and accept to pay the registration and access to
          technology fees?
        </h6>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
        >
          <FormControlLabel value="true" control={<Radio />} label=" Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-hear"
          select
          label="How did you hear about us?"
          helperText="How did you hear about us?"
          value={hearsFrom}
          onChange={(e) => setHearsFrom(e.target.value)}
        >
          {hears.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
      </Box>
      <h6>
        SheCanCode is working with partners to provide partial scholarship.
        Please explain how this scholarship would help you to achieve your
        career gaols
      </h6>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Type your text here....."
          multiline
          rows={4}
          value={scholarship}
          onChange={(e) => setScholarship(e.target.value)}
        />
      </Box>
      <br />
      <h6>Why is software development your dream career goal?</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Type your text here....."
          multiline
          rows={4}
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
      </Box>
    </div>
  );
  const address = () => (
    <div className="form">
      <h6>Location(Sector)</h6>
      <Box
        className="form__box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Sector"
          variant="outlined"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        />
      </Box>
      <br />
      <h6>Where are you from?</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-occupation"
          select
          label="Where are you from?"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </div>
  );
  const FormComponent = [personal(), education(), question(), address()];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = async () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    console.log(studentApplictionData);
    handleNext();
  };
  const handleSubmitApplication = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        apiCall + "/application/apply",
        studentApplictionData
      );
      console.log("@@@@@@:", response.data);
      if (response.status === 200) {
        setLoading(false);
        if (!loading) {
          handleComplete();
        }
      } else {
        <Alert severity="error">Failed to submit</Alert>;
        setLoading(false);
        handleReset();
      }
    } catch (e) {
      setLoading(false);
      <Alert severity="error">Failed to submit</Alert>;
      handleReset();
      console.log("error:", e);
    }
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // style={{margin:"0",padding:"0",boxSizing:"border-box"}}
  return (
    <>
      <div className="application-form" >
        <h2 className="application-title">
          SheCan<span>Code</span>&nbsp; Cohort 6 Application
        </h2>
        <Box sx={{ width: ["100%","95%","95%" ]}} className="box">
          <Stepper
            nonLinear
            activeStep={activeStep}
            className="stepperResponsive"
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                completed={completed[index]}
                className="stepResponsive "
              >
                <StepButton color="inherit" onClick={handleStep(index)}>
                 <span className="stepTitle"> {label}</span>
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Thanks for Applying to SheCanCode Cohort 6
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={() => window.location.reload()}>
                    Thank You
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div>{FormComponent[activeStep]}</div>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {/* <Button onClick={} sx={{ mr: 1 }}>
                    Nextz
                  </Button> */}

                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <>
                        {completedSteps() === totalSteps() - 1 ? (
                          <LoadingButton
                            loading={loading}
                            onClick={handleSubmitApplication}
                          >
                            Send Application
                          </LoadingButton>
                        ) : (
                          <Button onClick={handleComplete} htmlType="submit">
                            Save
                          </Button>
                        )}
                        {/* <Button onClick={handleComplete} htmlType="submit">
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "NEXT"}
                        </Button> */}
                      </>
                    ))}
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleReset}
                    sx={{ mr: 1 }}
                  >
                    Edit <BorderColorIcon />
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </>
  );
};
export default Application;
