import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./sideBar";

function DashboardHome() {
  const FirstName = "Alice";
  const [applicants, setApplicants] = useState([]);
  const [webDev, setWebDev] = useState([]);
  const [fullStack, setFullStack] = useState([]);
  const [day, setDay] = useState([]);
  const [evening, setEvening] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchApplicants = () => {
    setIsFetching(true);
    axios
      .get("https://api.shecancodeschool.org/api/apply/all")
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

  const fetchWebDev = () => {
    setIsFetching(true);
    axios
      .get(
        "https://api.shecancodeschool.org/api/apply/applicant/frontend_developer"
      )
      .then((res) => {
        setWebDev(res.data?.application);
        console.log(res);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  const fetchFullStack = () => {
    setIsFetching(true);
    axios
      .get(
        "https://api.shecancodeschool.org/api/apply/applicant/fullStack_developer"
      )
      .then((res) => {
        setFullStack(res.data?.application);
        console.log(res);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };

  const fetchDayApplicant = () => {
    setIsFetching(true);
    axios
      .get("https://api.shecancodeschool.org/api/apply/day")
      .then((res) => {
        setDay(res.data?.applicationClass);
        console.log(res);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  const fetchEveningApplicant = () => {
    setIsFetching(true);
    axios
      .get("https://api.shecancodeschool.org/api/apply/evening")
      .then((res) => {
        setEvening(res.data?.applicationClass);
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
    fetchWebDev();
    fetchFullStack();
    fetchDayApplicant();
    fetchEveningApplicant();
  }, []);
  return (
    <div>
      <div className="main-wrapper">
        <div>
          <Sidebar />
          <div className="page-wrapper">
            <div className="content">
              <h2>Welcome Dear {FirstName}</h2>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg2">
                      <i className="fa fa-child" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{applicants.length}</h3>
                      <span className="widget-title2">
                        <a href="/applicants" style={{ color: "black" }}>
                          Applicants
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg3">
                      <i className="fa fa-female" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{webDev.length}</h3>
                      <span className="widget-title3">
                        <a href="/frontend" style={{ color: "black" }}>
                          Web Development
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg4">
                      <i className="fa fa-male" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{fullStack.length}</h3>
                      <span className="widget-title4">
                        {" "}
                        <a href="/fullstack" style={{ color: "black" }}>
                          FullStack
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg3">
                      <i className="fa fa-female" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{day.length}</h3>
                      <span className="widget-title3">
                        {" "}
                        <a href="/day" style={{ color: "black" }}>
                          Day Program
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg2">
                      <i className="fa fa-male" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{evening.length}</h3>
                      <span className="widget-title2">
                        {" "}
                        <a href="/evening" style={{ color: "black" }}>
                          evening Program
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/*FIXME FIXME FIXME*/}
              <div className="dash-container">
                <h2>platform status summary</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
