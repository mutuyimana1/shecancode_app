import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          {/* <a href="#" className="logo"> */}
          <span style={{ fontSize: "17px" }}>ShecanCode</span>
          {/* </a> */}
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <i className="fa fa-bars" />
        </a>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
        <ul className="nav user-menu float-right">
          <li className="nav-item dropdown d-none d-sm-block"></li>
        </ul>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-logout" /> <span>Logout</span>
                </a>
              </li>
              <li className="active">
                <a href="/dashHome">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/applicants">
                  <i className="fa fa-users" /> <span>Applicant details</span>
                </a>
              </li>

              <li className="submenu">
                <a href="#">
                  <i className="fa fa-child" /> <span> Applicants</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/frontend">web development</a>
                  </li>
                  <li>
                    <a href="/fullstack">Full stack</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-female" /> <span> Classes</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/day">Day Class</a>
                  </li>
                  <li>
                    <a href="/evening">Evening Class</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/comments">
                  <i className="fa fa-comments" />
                  <span>Comments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
