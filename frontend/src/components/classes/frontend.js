import React from "react";

const Frontend = () => {
  return (
    <div className="frontend-container">
      <h2 style={{ textAlign: "center", padding: "10px" }}>
        SheCanCODE-
        <spa style={{ color: "#61dafb" }}>Web Development</spa> Certification
        Program.
      </h2>
      <div className="full-container">
        <div className="col-3">
          <h5>Start On</h5>
          <p>February 05</p>
        </div>
        <div className="col-3">
          <h5>Duration</h5>
          <p>16 weeks</p>
        </div>
        <div className="col-3">
          <h5>Program Fees</h5>
          <p>....</p>
        </div>
        <div className="col-3">
          <h5>Scholarship</h5>
          <p>full</p>
        </div>
      </div>
      <div className="all-container">
        <div style={{ width: "25%" }} className="content-container">
          <h6>Program Topics</h6>
          <ul>
            <li>Module One</li>
            <li>Module Two</li>
          </ul>
        </div>
        <div className="content-container">
          <h6>Requirement for this program</h6>
          <ul>
            <li>Have basic skills in coding.</li>
            <li>Apply and pass the application test.</li>
            <li>Pass the simple/ basic coding challenge</li>
            <li>Demonstrate interest in software engineering field.</li>
          </ul>
        </div>
        <div>
          <h6>why This Program? </h6>
          <p>
            Individuals who choose to join our program are <br />
            looking to become developers.
            <br /> We teach our students in-demand programming languages
            <br /> and tools needed to be valued workers in the industry.
            <br />
            We design our curriculum based on market demand and employers'
            desires.
            <br /> We understand having skills and getting a job is one thing.
          </p>
        </div>
        <div>
          <h6>Here is detail for program fee</h6>
          <ul>
            <li>
              Program Registration fee. 25000 rwf.( no payment plan, paid at
              once before the start of program)
            </li>
            <li>
              Certification exam and certificate fee 40000 rwf ( No payment
              plan, paid before start of the program)
            </li>
            <li>
              25% of program fee = 150, 000 rwf. ( Payment plan available +
              refund based on refund policy).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Frontend;
