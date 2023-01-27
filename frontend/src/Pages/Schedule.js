import React, { useEffect, useState } from "react";
import { Paper, Box, Button, Stack, Skeleton, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import webPIc from "../assets/img/web.jpg";
import fullPIc from "../assets/img/full.jpg";
import yesPIc from "../assets/img/yes.png";
import axios from "axios";
import BASE_URL from "../helpers/apiCall";

const frontSchedule = [
  { time: "09h:30 Am - 11h:00 Pm" },
  { time: "11h:30 Am - 01h:00 Pm" },
  { time: "02h:00 Pm - 03h:30 Pm" },
];

const SchedulerCard = (props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: "1rem",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        background: props.selected ? "#035457" : "#f7ffff",
        color: props.selected ? "#f7ffff" : "#035457",
        cursor: "pointer",
      }}
    >
      <h4
        style={{
          color: props.selected ? "#f7ffff" : "#000000",
          fontSize: "1.2rem",
          fontWeight: "600",
          padding:"1rem"
        }}
      >
        {props.schedule}
      </h4>
      <p>Remaing seats: 12</p>
    </Paper>
  );
};

const Component = (props) => {
  const [selectTimeIndex, setSelectTimeIndex] = React.useState(null);
  const [selectedSchedule, setSelectedSchedule] = React.useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [applicant, setApplicant] = useState();

  const handleSchedule = async () => {
    console.log(selectedSchedule);
    const resp = await axios.patch(`${BASE_URL}/apply/update/${id}`, {
      calendar: selectedSchedule,
      status: "scheduled",
    });
    if (resp?.status === 200) {
      setApplicant(resp?.data.data);
    }
    // console.log(">>> response:", resp);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/apply/get/${id}`)
      .then((res) => {
        console.log(res);
        res.status === 200 && setApplicant(res.data.data);
        res.status === 200 && setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setLoading(true);
      });
  }, [id]);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        width: "100%",
        // background: "yellow",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "25%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {loading && (
          <Stack
            spacing={2}
            sx={{ width: "100%", height: "100%", paddingTop: "2rem" }}
          >
            <Skeleton variant="rectangular" height={120} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rounded" height={150} />
          </Stack>
        )}
        {!loading && (
          <>
            <img
              src={
                applicant?.programName === "fullStack_developer"
                  ? fullPIc
                  : webPIc
              }
              width="100%"
            />
            <Box>
              <p style={{ padding: " 0rem 1rem" }}>
                Dear,<b> {applicant?.firstName || applicant?.lastName}</b>
              </p>
              <p style={{ padding: "0rem 1rem" }}>
                Congratulations on moving to the next step of the application
                process! We are pleased to inform you that your application has
                been reviewed and we are impressed with your qualifications.
              </p>
              <p style={{ padding: "0rem 1rem" }}>
                We would like to invite you for an interview to further discuss
                your skills and experience.
                <br /> We look forward to meeting you in person at office [
                <b>KG 549 St, 36 Kacyiru</b>].
              </p>
              <p style={{ padding: "0rem 1rem" }}>Regards!</p>
            </Box>
          </>
        )}
      </Paper>
      <Paper
        sx={{
          width: "45%",
          minHeight: "70vh",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        {loading && (
          <Stack
            spacing={2}
            sx={{ width: "60%", height: "100%", paddingTop: "2rem" }}
          >
            <Skeleton variant="rectangular" height={70} />
            <Skeleton variant="rectangular" height={70} />
            <Skeleton variant="rectangular" height={70} />
            <Skeleton variant="rectangular" height={70} />
            <Skeleton variant="rectangular" width={210} height={70} />
          </Stack>
        )}
        {!loading && (
          <>
            {applicant.status === "pending" && (
              <>
                <TextField
                  id="standard-select-currency-native"
                  select
                  width="60%"
                  label="Choose Day"
                  // defaultValue="Tuesday, January 24 2023"
                  SelectProps={{
                    native: true,
                  }}
                  onChange={(e) =>
                    setSelectedSchedule({
                      ...selectedSchedule,
                      date: e.target.value,
                    })
                  }
                  // helperText="Please select your Available Day"
                  variant="standard"
                >
                  {applicant?.programName === "frontend_developer" && (
                    <option key={1} value={"Monday, February 20 2023"}>
                      Monday, February 20 2023
                    </option>
                  )}
                  {applicant?.programName === "fullStack_developer" && (
                    <option key={2} value={"Tuesday, February 21 2023"}>
                      Tuesday, February 21 2023
                    </option>
                  )}
                  {applicant?.programName === "frontend_developer" && (
                    <option key={3} value={"Wednesday, February 22 2023"}>
                      Wednesday, February 22 2023
                    </option>
                  )}
                  {applicant?.programName === "fullStack_developer" && (
                    <option key={4} value={"Thursday, February 23 2023"}>
                      Thursday, February 23 2023
                    </option>
                  )}
                </TextField>
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    minHeight: "55vh",
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "1rem",
                  }}
                >
                  {frontSchedule.map((e, index) => (
                    <Box
                      sx={{ width: "50%" }}
                      onClick={() => {
                        setSelectTimeIndex(index + 1);
                        setSelectedSchedule(e);
                      }}
                    >
                      {" "}
                      <SchedulerCard
                        selected={index + 1 === selectTimeIndex}
                        schedule={e.time}
                      />
                    </Box>
                  ))}
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  endIcon={<SendIcon />}
                  disabled={!selectTimeIndex}
                  onClick={() => {
                    handleSchedule();
                  }}
                >
                  Submit Schedule
                </Button>
                </Paper>
              </>
            )}

            {applicant.status !== "pending" && (
              <Paper
                elevation={0}
                sx={{
                  minHeight: "70vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  background: "whiteSmoke",
                  gap: "3rem",
                }}
              >
                <h4>Thank You For Scheduling Your Interview!</h4>
                <Stack
                  direction={"row"}
                  sx={{ width: "100%" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img src={yesPIc} alt="Tick" width={"30%"} />
                  <Stack direction={"column"}>
                    <h5>{applicant?.calendar?.date}</h5>
                    <p>{applicant?.calendar?.time}</p>
                  </Stack>
                </Stack>
              </Paper>
            )}
          </>
        )}
      </Paper>
    </div>
  );
};

export default Component;
