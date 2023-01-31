import React from "react";
import "./classes.css";
const FullStack = () => {
  return (
    <div className="fullStack-container">
      <h2 style={{ textAlign: "center", padding: "10px" }}>
        Full stack <spa style={{ color: "#61dafb" }}>developer</spa>
      </h2>
      <div className="row row-class">
        <div className="col-sm-3">
          <h4>Start On</h4>
          <p>February 05</p>
        </div>
        <div className="col-sm-3">
          <h4>Duration</h4>
          <p>16 weeks</p>
        </div>
        <div className="col-sm-3">
          <h4>Program Fees</h4>
          <p>600 USD</p>
        </div>
        <div className="col-sm-3">
          <h4>Scholarship</h4>
          <p>70%</p>
        </div>
      </div>
      <div className="all-container">
        <div className="content-container">
          <h6>Program Topics</h6>
          <ul>
            <li>Module One</li>
            <li>Module Two</li>
          </ul>
        </div>
        <div className="content-container">
          <h6>
            HOW TO GET INTO Full-Stack Software Engineering Certification
            Program?
          </h6>
          <ul>
            <li>Have basic skills in coding.</li>
            <li>Apply and pass the application test.</li>
            <li>Pass the simple/ basic coding challenge</li>
            <li>Demonstrate interest in software engineering field.</li>
          </ul>
        </div>
        <div className="why-program">
          <h6>Program fee and Payment plan. </h6>
          <p>
            The total cost of the program is 600 USD and <br />
            Igire Rwanda is Paying 75% to all <br /> selected applicants. The
            applicant will pay 150 USD(150K RWF)
            <br /> for three months. Here are the
            <br /> details of the program fee.
          </p>
        </div>
        <div className="why-program">
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
export default FullStack;
