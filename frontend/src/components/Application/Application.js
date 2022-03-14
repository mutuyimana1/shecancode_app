import React, { useState } from "react";
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
// import SendIcon from "@mui/icons-material/Send";
import BorderColorIcon from '@mui/icons-material/BorderColor'
import MenuItem from "@mui/material/MenuItem";

const steps = ["Personel Details", "Education Details", "questions", "Address"];
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
  // const [location, setLocation] = useState("Location");
  const studentApplictionData = {
    name: "MacKenzie Burch",
    email: "ruda@mailinator.com",
    phoneNumber: "+1 (175) 866-8201",
    gender: "prefer not to say",
    programFee: "yes",
    district: "other",
    location: "Qui nihil rerum ex e",
    education: "Masters",
    ownAlaptop: "no",
    careerGoals: "Molestiae consequatu",
    inpersonoronline: "Yes",
    howdidyouhearaboutus: "Website",
    registrationFee: "4hrs",
    accessToInternet: "no",
    scholarship: "Et suscipit cupidita",
  };

  // PersonalForm
  const personal = () => (
    <div className="form">
      <h6>Name</h6>
      <Box
        className="form__box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "39ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="FirstName" variant="outlined" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        <TextField id="outlined-basic" label="LaststName" variant="outlined" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
      </Box>
      <h6>Email</h6>
      <Box
        className="form__box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Box>
      <FormControl>
        <h6>Gender</h6>
        <RadioGroup
          className="form__box"
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
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
          "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
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
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label=" Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <div>
        <FormControl>
          <h6>Do you own/have laptop?</h6>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label=" Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "39ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-occupation"
          select
          label="Select occupation"
          // value={occupation}
          // onChange={handleChange}
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
          // value={hourSpend}
          // onChange={handleChanges}
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
        >
          <FormControlLabel value="yes" control={<Radio />} label=" Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
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
        >
          <FormControlLabel value="yes" control={<Radio />} label=" Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-hear"
          select
          label="How did you hear about us?"
          // value={hear}
          // onChange={handleChangez}
          helperText="How did you hear about us?"
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
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Type your text here....."
          multiline
          rows={4}
        />
      </Box>
      <br />
      <h6>Why is software development your dream career goal?</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Type your text here....."
          multiline
          rows={4}
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
          "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Sector" variant="outlined" />
      </Box>
      <br />
      <h6>Where are you from?</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-occupation"
          select
          label="Where are you from?"
          // value={location}
          // onChange={handleChangezi}
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

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <>
      <div className="application-form">
        <Box sx={{ width: "95%" }} className="box">
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
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
                  <Button onClick={handleReset}>Reset</Button>
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
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "NEXT"}
                      </Button>
                    ))}
                     <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleReset}
                    sx={{ mr: 1 }}
                  >
                    Edit <BorderColorIcon/>
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
