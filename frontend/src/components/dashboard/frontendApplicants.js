import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dashstyle.css";
import Sidebar from "./sideBar";
import { Button, CircularProgress } from "@mui/material";
import { Table } from "antd";
const columns = [
  {
    title: "First Name",
    width: 150,
    dataIndex: "firstName",
    key: "name",
    fixed: "left",
  },
  {
    title: "Second Name",
    width: 150,
    dataIndex: "lastName",
    key: "age",
    fixed: "left",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "1",
    width: 150,
  },
  {
    title: "Telephone",
    dataIndex: "telephone",
    key: "2",
    width: 150,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "3",
    width: 150,
  },
  {
    title: "Program Name",
    dataIndex: "programName",
    key: "4",
    width: 170,
  },
  {
    title: "Program Time",
    dataIndex: "programTime",
    key: "5",
    width: 130,
  },
  {
    title: "Education Level",
    dataIndex: "educationLevel",
    key: "6",
    width: 150,
  },
  {
    title: "Schedured date",
    dataIndex: "calendar",
    key: "7",
    width: 200,
  },
  {
    title: "Schedured time",
    dataIndex: "time",
    key: "8",
    width: 200,
  },

  {
    title: "Action",
    key: "operation",
    key: "9",
    width: 170,
    render: () => (
      <>
        <Button style={{ color: "green" }}>Accept</Button>
        <Button style={{ paddingLeft: "10px", color: "red" }}>Deny</Button>
      </>
    ),
  },
  {
    title: "status",
    dataIndex: "status",

    fixed: "right",
    width: 150,
  },
];
function FrontendApplicants() {
  const [applicants, setApplicants] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchApplicants = () => {
    setIsFetching(true);
    axios
      .get(
        "https://api.shecancodeschool.org/api/apply/applicant/frontend_developer"
      )
      .then((res) => {
        setApplicants(
          res?.data?.application.map((applicant) => {
            console.log(applicant);
            return {
              ...applicant,
              calendar: applicant?.calendar?.date,
              time: applicant?.calendar?.time,
            };
          })
        );
        console.log(res);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchApplicants();
  }, []);

  const data = isFetching
    ? []
    : applicants.map((row, index) => ({
        key: index,
        name: row.firstName,
        age: row.age,
        address: row.email,
      }));
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          {isFetching ? (
            <CircularProgress />
          ) : (
            <Table
              columns={columns}
              dataSource={applicants}
              scroll={{
                x: 1700,
                y: 1300,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FrontendApplicants;
