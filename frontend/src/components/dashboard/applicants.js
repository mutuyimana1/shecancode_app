import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dashstyle.css";
import Sidebar from "./sideBar";
import { CircularProgress } from "@mui/material";
import { Table } from "antd";
const columns = [
  {
    title: "First Name",
    width: 100,
    dataIndex: "firstName",
    key: "name",
    fixed: "left",
  },
  {
    title: "Second Name",
    width: 100,
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
    width: 150,
  },
  {
    title: "Program Time",
    dataIndex: "programTime",
    key: "5",
    width: 150,
  },
  {
    title: "Education Level",
    dataIndex: "educationLevel",
    key: "6",
    width: 150,
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "7",
    width: 150,
  },

  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <>
        <a>Accept</a>
        <a>Denie</a>
      </>
    ),
  },
];
// const data = loading
//     ? []
//     : state.map(row => ({ Name: row.name, Email: row.email }));

function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchApplicants = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/apply/all")
      .then((res) => {
        setApplicants(res.data.data);
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
          <Table
            columns={columns}
            dataSource={applicants}
            scroll={{
              x: 1500,
              y: 300,
            }}
          />
          {/* <div className="table-responsive">
            <table className="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Telephone</th>
                  <th>Gender</th>
                  <th>Education level</th>
                  <th>Program name</th>
                  <th>Program Time</th>
                  <th>Comments</th>

                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {isFetching ? (
                  <center style={{ paddingTop: "100px", paddingLeft: "250px" }}>
                    <CircularProgress />
                  </center>
                ) : (
                  <>
                    {applicants.map((applicant, index) => (
                      <tr>
                        <td>{applicant.firstName}</td>
                        <td>{applicant.lastName}</td>

                        <td>{applicant.email}</td>
                        <td>{applicant.telephone}</td>
                        <td>{applicant.gender}</td>
                        <td>{applicant.educationLevel}</td>
                        <td>{applicant.programName}</td>
                        <td>{applicant.programTime}</td>
                        <td>{applicant.comment}</td>

                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_patient"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Applicants;
