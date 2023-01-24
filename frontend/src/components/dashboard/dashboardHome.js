import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./sideBar";

function DashboardHome() {
  return (
    <div>
      <div className="main-wrapper">
        <div>
          <Sidebar />
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg1">
                      <i className="fa fa-users" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>....</h3>
                      <span>
                        {" "}
                        <a
                          href="users"
                          className="widget-title1"
                          style={{ color: "black" }}
                        >
                          System Users{" "}
                        </a>
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
                      <i className="fa fa-child" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>....</h3>
                      <span className="widget-title2">
                        <a href="registeredbabies" style={{ color: "black" }}>
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
                      <h3>....</h3>
                      <span className="widget-title3">
                        <a href="/parents" style={{ color: "black" }}>
                          Applicant history
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
                      <i className="fa fa-hospital-o" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>....</h3>
                      <span className="widget-title4">
                        {" "}
                        <a href="/hospitals" style={{ color: "black" }}>
                          Report
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*FIXME FIXME FIXME*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
