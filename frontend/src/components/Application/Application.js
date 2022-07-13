import React, { useState, useMemo } from "react";
import Select from "react-select";
import Rating from "react-rating-scale";
import countryList from "react-select-country-list";
import axios from "axios";
import "antd/dist/antd.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Modal, notification } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import studentImg from "../../assets/img/shecancode.jpeg";
import "./Application.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LoadingButton from "@mui/lab/LoadingButton";
// import SendIcon from "@mui/icons-material/Send";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuItem from "@mui/material/MenuItem";
import validator from "validator";
import apiCall from "../../helpers/apiCall";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const steps = [
  "Personel Details",
  "Education/Work Details",
  "Carreer Questions",
  "Interview",
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
    value: "Unemployed",
    label: "Unemployed",
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
    value: "University",
    label: "University",
  },
  {
    value: "Newspaper",
    label: "Newspaper",
  },
  {
    value: "Social media",
    label: "Social media",
  },
  {
    value: "Colleagues and friends",
    label: "Colleagues and friends",
  },
  {
    value: "Government agencies",
    label: "Government agencies",
  },
  ,
  {
    value: "Other",
    label: "Other",
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
const provinces = [
  {
    value: "Kigali",
    label: "Kigali",
  },
  {
    value: "Western",
    label: "Western",
  },
  {
    value: "Northern",
    label: "Northern",
  },
  {
    value: "Eastern",
    label: "Eastern",
  },
  {
    value: "Southern",
    label: "Southern",
  },
];
const competencies = [
  {
    value: "Fair",
    label: "Fair",
  },
  {
    value: "Good",
    label: "Good",
  },
  {
    value: "Excellent",
    label: "Excellent",
  },
  {
    value: "None",
    label: "None",
  },
];

const Application = () => {
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };
  const history = useHistory();
  const [studentAppliction, setStudentAppliction] = useState({});
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [edication, setEdication] = useState(null);
  const [obtainLaptop, setObtainLaptop] = useState(null);
  const [occupation, setOccupation] = useState("none");
  const [hearsFrom, setHearsFrom] = useState(null);
  const [scholarship, setScholarship] = useState(null);
  const [dream, setDream] = useState(null);
  const [sector, setSector] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [ubudehe, setUbudehe] = useState(null);
  const [experience, setExperience] = useState(null);
  const [laptop, setLaptop] = useState(null);
  const [commitment, setCommitment] = useState(null);
  const [github, setGithub] = useState(null);
  const [githubLink, setGithubLink] = useState(null);

  const [district, setDistrict] = useState(null);
  const [province, setProvince] = useState("none");
  const [loading, setLoading] = useState(false);
  const [schoolName, setSchoolName] = useState(null);
  const [hourFrom, setHourFrom] = useState(null);
  const [hourTo, setHourTo] = useState(null);
  const [competency, setCompetency] = useState(null);
  const [wishJoin, setWishJoin] = useState(null);

  const [job, setJob] = useState(null);
  const [hours, setHours] = useState(null);

  // const [location, setLocation] = useState("Location");
  const studentApplictionData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    gender: gender,
    age: age,

    education: edication,
    experience: experience,
    hours: hours,
    github: github,
    githubLink: githubLink,
    competency: competency,
    occupation,
    schoolName,
    hourFrom,
    hourTo,

    laptop: laptop,
    obtainLaptop: obtainLaptop,
    commitment: commitment,
    wishJoin: wishJoin,
    hears: hearsFrom,
    scholarship: scholarship,
    dream: dream,

    ubudehe: ubudehe,
    sector: sector,
    district: district,
    province: province,
    country: country,

    job: job,
  };

  // PersonalForm
  const personal = () => (
    <div className="form">
      <form fullWidth={true}>
        <h6>Name</h6>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: ["90%", "90%", "44%"] },
          }}
          noValidate
          autoComplete="off"
          className="form__box"
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
          <TextField
            required
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <h6>Email</h6>
        <Box
          className="form__box"
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
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
        <h6>Phone Number</h6>
        <Box
          className="form__box"
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
          }}
          noValidate={false}
          autoComplete="off"
        >
          {/* <TextField
            required
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}

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
        <h6>Gender</h6>
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
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            disabled
          />

          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
            disabled
          />
        </RadioGroup>

        <FormControl>
          <h6> Your Age</h6>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            row
            name="controlled-radio-buttons-group"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <FormControlLabel
              value="below 18"
              control={<Radio />}
              label="Below 18"
            />
            <FormControlLabel value="18-35" control={<Radio />} label="18-35" />
            <FormControlLabel
              value="36-above"
              control={<Radio />}
              label="36-above"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  );

  //EducationForm
  const education = () => (
    <div className="form">
      <h6>Education Qualifications</h6>
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
          label="Your Education"
          value={edication}
          onChange={(e) => setEdication(e.target.value)}
        >
          {educations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>{" "}
      <FormControl>
        <h6>Do you have experience with Software Development?</h6>
        <RadioGroup
          row
          required
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group-education"
          // onChange={(e) => setExperience(e.target.value)}
          value={experience}
        >
          <FormControlLabel
            key="1"
            value={true}
            control={<Radio onClick={() => setExperience(true)} />}
            label="Yes"
          />
          <FormControlLabel
            key="2"
            value={false}
            control={<Radio onClick={() => setExperience(false)} />}
            label="No"
          />
        </RadioGroup>
      </FormControl>{" "}
      <h6>if Yes,How many Hours do you Spend coding </h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          disabled={!experience}
          id="outlined-select-hours"
          select
          required
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
      <FormControl>
        <h6>Do you have GitHub Account?</h6>
        <RadioGroup
          row
          required
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group-laptop"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        >
          <FormControlLabel
            key="1"
            value={true}
            control={<Radio />}
            label="Yes"
            onClick={() => setGithub(true)}
          />
          <FormControlLabel
            key="2"
            value={false}
            control={<Radio />}
            label="No"
            onClick={() => setGithub(false)}
          />
        </RadioGroup>
      </FormControl>
      <h6>if yes, please include your GitHub link.</h6>
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
          disabled={!github}
          id="outlined-basic"
          label="github link"
          variant="outlined"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />
      </Box>
      <h6>Your competency in ICT/digital skills:</h6>
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
          label="Your IT Competency"
          value={competency}
          onChange={(e) => setCompetency(e.target.value)}
        >
          {competencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>{" "}
      <h6>Your occupation</h6>
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
          required
          label="Select occupation"
          value={occupation}
          // onChange={(e) => setOccupation(e.target.value)}
          helperText="Please select your occupation"
        >
          {occupations.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => setOccupation(option?.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {occupation === "Unemployed" ? (
        <></>
      ) : (
        <>
          <h6>{occupation === "student" ? "School Name" : "Company Name"}</h6>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              value={schoolName}
              id="outlined-basic"
              label={occupation === "student" ? "School Name" : "Company Name"}
              variant="outlined"
              InputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </Box>

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: ["90%", "90%", "44%"] },
            }}
            noValidate
            autoComplete="off"
            className="form__box"
          >
            <TextField
              required
              id="outlined-basic"
              label="Start At"
              variant="outlined"
              value={hourFrom}
              onChange={(e) => setHourFrom(e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              label="End At"
              variant="outlined"
              value={hourTo}
              onChange={(e) => setHourTo(e.target.value)}
            />
          </Box>
        </>
      )}
    </div>
  );
  const question = () => (
    <div className="form">
      <div>
        <FormControl>
          <h6>Do you own/have laptop?</h6>
          <RadioGroup
            row
            required
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
      <h6>If not, could you obtain one! How?</h6>
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
          required
          rows={3}
          value={obtainLaptop}
          onChange={(e) => setObtainLaptop(e.target.value)}
        />
      </Box>
      <FormControl>
        <h6>
          SheCanCODE is a women's coding bootcamp that is situated in Kigali,
          Rwanda, at Kacyiru sector, Road KG577st, House KG549St 36. Would you
          be able to enroll in the program for the full three months in person?
          (Monday through Friday, 8:00 AM to 5:00 PM)
        </h6>
        <RadioGroup
          row
          required
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={commitment}
          onChange={(e) => setCommitment(e.target.value)}
        >
          <FormControlLabel value="true" control={<Radio />} label=" Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <h6>
        Why do you wish to join SheCanCODE program? Please write in max 100
        words:
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
          required
          rows={4}
          value={wishJoin}
          onChange={(e) => setWishJoin(e.target.value)}
        />
      </Box>
      <h6>How did you find out about the Program?</h6>
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
        SheCanCode provides a scholarship. Please explain how this scholarship
        would help you to achieve your career gaols
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
          required
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
          required
          rows={4}
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />
      </Box>
    </div>
  );
  const address = () => (
    <div className="form">
      <FormControl>
        <h6> Ubudehe Class</h6>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          row
          name="controlled-radio-buttons-group"
          value={ubudehe}
          onChange={(e) => setUbudehe(e.target.value)}
        >
          <FormControlLabel value="A" control={<Radio />} label="A" />
          <FormControlLabel value="B" control={<Radio />} label="B" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
          <FormControlLabel value="D" control={<Radio />} label="D" />
          <FormControlLabel value="E" control={<Radio />} label="E" />
        </RadioGroup>
      </FormControl>
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
      <h6>District</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        ></TextField>
      </Box>{" "}
      <br />
      <h6>Province</h6>
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
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        >
          {provinces.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>{" "}
      <br />
      <h6>Your Origin Country</h6>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Select options={options} value={country} onChange={changeHandler} />
      </Box>
      <br />
    </div>
  );
  const FormComponent = [personal(), education(), question(), address()];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    window.location.replace("https://www.shecancodeschool.org");
    // setIsModalVisible(false);
  };
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

  const checkValidationsData = (stepIndex) => {
    if (stepIndex === 0) {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !age ||
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
    } else if (stepIndex === 1) {
      if (
        education === null ||
        experience === null ||
        github === null ||
        competency === null ||
        !occupation
      ) {
        notification.warn({ message: "Kindly fill the form correctly!" });
        return false;
      } else {
        return true;
      }
    } else if (stepIndex === 2) {
      if (
        laptop === null ||
        commitment === null ||
        wishJoin === null ||
        hearsFrom === null ||
        !scholarship ||
        !dream
      ) {
        notification.warn({ message: "Kindly fill the form correctly!" });
        return false;
      } else {
        return true;
      }
    } else {
      if (
        country === null ||
        ubudehe === null ||
        province === null ||
        district === null ||
        !sector
      ) {
        notification.warn({ message: "Kindly fill the form correctly!" });
        return false;
      } else {
        return true;
      }
    }
  };

  const handleComplete = async () => {
    if (checkValidationsData(activeStep)) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      console.log(studentApplictionData);
      handleNext();
    }
  };
  const handleSubmitApplication = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        apiCall + "/application/apply",
        studentApplictionData
      );
      // console.log("@@@@@@:", response.data);
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
      {/* <Modal
        title={
          <h2>
            <img
              className="logo"
              src="https://www.shecancodeschool.org/uploads/logos1.png"
            />
            SheCan<span>CODE</span>
          </h2>
        }
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onOk={handleCancel}
        onCancel={handleCancel}
        width="95%"
        bodyStyle={{ maxHeight: 300 }}
        okText="Accept"
        cancelText="Decline"
      >
        <div className="shecancodeContent">
          <img src={studentImg} className="left-student-img" />
          <div className="paragraph-right">
            <h2 style={{ textAlign: "center" }}>
              <img
                className="logo"
                src="https://www.shecancodeschool.org/uploads/logos1.png"
              />
              SheCan<span>CODE</span>
            </h2>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              Are you a university graduate or in your final year and Ready to
              launch your career in tech industry?
            </p>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "2rem 0",
                color: "red",
              }}
            >
              Thank you for showing interest in the &nbsp;
              <span className="shecancodeParagaph">
                SheCan<span>CODE </span>
              </span>{" "}
              BOOTCAMP!
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "red",
              }}
            >
              <span className="shecancodeParagaph">
                SheCan<span>CODE</span>
              </span>{" "}
           
            </p>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "2rem 0",
              }}
            >
              APPLY TO ATTEND{" "}
              <span className="shecancodeParagaph">
                SheCan<span>CODE</span>
              </span>{" "}
              BOOTCAMP!
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <span className="shecancodeParagaph">
                SheCan<span>CODE</span>
              </span>{" "}
              offers a full-time intensive coding Bootcamp for women in Rwanda
              and supports graduates search for job placement after graduation.
              Before you apply, understand that when you are admitted to the
              program, you will attend Monday to Friday from 9: am to 3:30
              PM.You'll responsible for your own transportation, lunch and
              laptop.
            </p>
          </div>
        </div>
      </Modal> */}
      <div className="application-form">
        <h2 className="application-title">
          SheCan<span>Code</span>&nbsp; Cohort 7 Application
        </h2>

        <FormControl fullWidth={true}>
          <Box sx={{ width: ["100%", "95%", "95%"] }} className="box">
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
                    Thanks for Applying to SheCanCode Cohort 7. <br />
                  </Typography>
                  <a
                    href="https://calendly.com/clairenkamushaba/shecancode-cohort-6-interviews"
                    target="_blank"
                    style={{ fontSize: "20px" }}
                  >
                    {"=>> "}Click here to Schedule for interview
                  </a>

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
                            <Button onClick={handleComplete} type="submit">
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
        </FormControl>
      </div>
    </>
  );
};
export default Application;
