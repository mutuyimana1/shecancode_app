import React from "react";
import "./aboutUs.css";
import developer from "../../assets/img/undraw_Developer_activity_re_39tg (1).png";
import design from "../../assets/img/undraw_Design_process_re_0dhf.png";
import code from "../../assets/img/undraw_Code_typing_re_p8b9.png";
import connect from "../../assets/img/undraw_The_world_is_mine_re_j5cr.png";
function AboutUs() {
  return (
    <div>
      <div id="aboutUs">
        <div className="aboutus-container">
          <h2>About Us </h2>
          <div className="aboutUs-flex">
            <div className="cards">
              <div className="row">
                <div className="col-sm-5 ">
                  <img src={developer} />
                  <h4>Teach && Learn</h4>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5 spmargin">
                  <img src={design} />
                  <h4>Design</h4>
                </div>
              </div>
              <div className="row " style={{ marginTop: "10px" }}>
                <div className="col-sm-5">
                  <img src={code} />
                  <h4 style={{ paddingTop: "20px" }}>Develop</h4>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5 spmargin">
                  <img src={connect} />
                  <h4>Connect</h4>
                </div>
              </div>
            </div>
            <div className="about-paragraph">
              <h3>We Develop your future </h3>
              <p>
                Learn web development and land a job in the tech industry with
                1-on-1 guidance from an expert mentor and career coach. This
                program goes beyond teaching coding skills to career services
                you need to help you land a high-paying job in the tech
                industry. You spend time during the course with the career
                service team to help you reach your job search and job
                preparation guidance. Attending this program, you can expect to
                work hard, pre-work(homeworks), assignments, real-life projects
                and project presentations, code review with technical
                facilitators, daily coding seminars, mentors, inspiration from
                experts, interview preparation and 1 on 1 with the career team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
