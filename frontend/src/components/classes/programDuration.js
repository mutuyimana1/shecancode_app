import React from "react";
import "./duration.css";
import certificate from "../../assets/img/certificate.jpg";
import LoadingButton from "@mui/lab/LoadingButton";
const Duration = () => {
  return (
    <>
      <div className="price-container">
        <div className="price">
          <div className="column-1">
            <div className="start-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                class="box__graphic"
              >
                <title>Course Date</title>
                <path
                  class="st0"
                  d="M24-.5c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24zm0 46c-12.1 0-22-9.9-22-22s9.9-22 22-22 22 9.9 22 22-9.9 22-22 22z"
                  fill="#fff"
                ></path>
                <path
                  class="st0"
                  d="M30.4 32.5c0 .2-.2.4-.4.4H18.4c-.2 0-.4-.2-.4-.4V14.4c0-.2.2-.4.4-.4H30c.2 0 .4.2.4.4v2.8h2v-2.8c0-1.3-1.1-2.4-2.4-2.4H18.4c-1.3 0-2.4 1.1-2.4 2.4v18.1c0 1.3 1.1 2.4 2.4 2.4H30c1.3 0 2.4-1.1 2.4-2.4v-3.8h-2v3.8z"
                  fill="#fff"
                ></path>
                <path
                  class="st0"
                  d="M34.7 18.9l-1.2 1.5 2.6 2.1H24v2h12.1l-2.6 2.1 1.2 1.6 5.8-4.7z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="start-container">
                <h3 className="start-title">Start On</h3>
                <p>February 20,2023</p>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="start-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                class="box__graphic"
              >
                <title>Course Duration</title>

                <path
                  class="st0"
                  d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-46C11.9 2 2 11.9 2 24s9.9 22 22 22 22-9.9 22-22S36.1 2 24 2z"
                  fill="#fff"
                ></path>
                <path
                  class="st0"
                  d="M34.5 31.2L23 24.6V10h2v13.4l10.5 6z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="start-container">
                <h3 className="start-title">Duration</h3>
                <p>
                  16 Weeks, In-person <span>6-8 hours per day</span>
                </p>
              </div>
            </div>
          </div>
          <div className="column-3">
            <div className="start-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                class="box__graphic"
              >
                <title>Course Fee</title>
                <path
                  d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 46C11.9 46 2 36.1 2 24S11.9 2 24 2s22 9.9 22 22-9.9 22-22 22z"
                  fill="#fff"
                ></path>
                <path
                  d="M25.9 16.1c.3.1.6.3 1 .4.4.2.7.5 1 .8l.9 1.1 1.5-1.3-.9-1.1c-.5-.5-1-1-1.6-1.3-.4-.2-.9-.4-1.3-.6-.5-.2-1-.3-1.5-.3v-2.5h-2v2.5c-.9.1-1.8.5-2.7 1.1-1.1.8-1.8 1.9-2 3-.4 2.2.7 4.4 2.7 5.3l1.9.9v7.2c-1.1-.4-2.4-1.1-3.1-2.8l-1.8.8c1.2 2.7 3.4 3.7 4.9 4.1v2.7h2v-2.5c3-.1 4.2-1.7 4.5-2.2 1.1-1.9.6-4.1 0-5.1-.7-1.2-1.8-2.2-3.1-2.8l-1.3-.6v-7c.4.1.7.2.9.2zm-.3 9.3c1 .5 1.8 1.2 2.3 2 .4.6.6 2 0 3-.1.2-.8 1.1-2.8 1.2v-6.5l.5.3zm-3.7-4c-1.2-.6-1.9-1.9-1.6-3.2.1-.5.6-1.2 1.3-1.7.5-.3.9-.5 1.4-.6V22l-1.1-.6z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="start-container">
                <div className="start-container">
                  <h3 className="start-title">Program Fees</h3>
                  <div className="program_fees">
                    <div className="frontend_fees">
                      <h3>Frontend Web Dev</h3>
                      <ul>
                        <li>
                          Program Fees: <span className="fee">$00</span>{" "}
                        </li>
                        <li>
                          Registration Fees: <span className="fee">$25</span>
                        </li>
                        <li>
                          Exam Certificate Fees:{" "}
                          <span className="fee">$40</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3>Full-Stack Engineer</h3>
                      <ul>
                        <li>
                          Program Fees:<strike>$600</strike>
                          <span className="fee">$150</span>
                        </li>
                        <li>
                          Registration Fees: <span className="fee">$25</span>
                        </li>
                        <li>
                          Exam Certificate Fees:{" "}
                          <span className="fee">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="develp">
        <div className="developFuture">
          <h2 className="developTitle">Develop Future-Ready Skills Today</h2>
          <p>
            Whether you have little coding knowledge/experience, are
            self-taught, or are somewhere in between, this program is designed
            for you. Our course takes you from foundational skills to advanced,
            practical knowledge and hireable skills in as little as 16 weeks.
            This course will jumpstart your path into a new career as a software
            engineer. Learn full stack development and land a job with 1-on-1
            guidance from an expert mentor and career coach. Graduate in 3
            months.
          </p>
        </div>
      </div>
      <div className="app_details">
        <h2 className="developTitle">Application Details</h2>
        <p className="leftered marginBottom">
          The total cost of the program is 600 USD and Igire Rwanda is Paying
          75% to all selected applicants. The applicant will pay 150 USD(150K
          RWF) for three months. Here are the details of the program fee.
        </p>
        <div className="front_details">
          <h3>Full-Stack Web Engineer</h3>
          <div className="fees_front">
            <div className="fee-column1">
              <p className="fee-p">Registration FEE</p>
              <h4>US$25</h4>
              <p className="fees-p">Paid when you're admitted</p>
            </div>
            <div className="fee-column2">
              <p className="fee-p">Examen Certificate FEE</p>
              <h4>US$40</h4>
              <p className="fees-p">Paid before graduating</p>
            </div>
            <div className="fee-column3">
              <p className="fee-p">PROGRAM FEE</p>
              <h4>
                <strike>US$ 600 </strike> <span>US$150</span>
              </h4>
              <p className="fees-p">Paid in trash</p>
            </div>
          </div>
        </div>

        <div className="back_details">
          <h3>Front-end Web Dev</h3>
          <div className="fees-back">
            <div className="fee-column1">
              <p className="fee-p">Registration FEE</p>
              <h4>US$25</h4>
              <p className="fees-p">Paid when you're admitted</p>
            </div>
            <div className="fee-column2">
              <p className="fee-p">Examen Certificate FEE</p>
              <h4>US$40</h4>
              <p className="fees-p">Paid before graduating</p>
            </div>
            <div className="fee-column3">
              <p className="fee-p">PROGRAM FEE</p>
              <h4>US$ 00</h4>
              <p className="fees-p">Free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="launch">
        <div className="launch-career">
          <h2 className="developTitle">
            We Help You Launch Your Coding Career{" "}
          </h2>
          <p className="leftered">
            A growing number of companies are hiring web developers, software
            engineers, and other technology workers who use technical skills to
            streamline their operations and leverage the power of technology
            within their organizations.
          </p>
          <p className="leftered">
            Businesses around the globe are searching for the very best talent
            when it comes to programming experts and computer experts. Enrolling
            in a coding boot camp is an excellent option if you’re looking to
            switch careers, upgrade your skill set and attain essential
            knowledge on how to kickstart your coding journey.
          </p>

          <div className="career-price">
            <div className="talent_source">
              <h2>$111,499</h2>

              <p className="centered">
                The average salary for a full stack developer in the US
              </p>
              <p className="source">SOURCE:TALENT</p>
            </div>
            <div className="evans_source">
              <h2>28.7 Million</h2>

              <p>
                Projected worldwide population of professional developers by
                2024, an increase of 4.8 million from 2019
              </p>
              <p className="source">SOURCE: EVANS DATA CORPORATION</p>
            </div>
            <div className="glassdoor_source">
              <h2>#2</h2>

              <p>
                PRanking of full stack engineer among the 50 Best Jobs in
                America in 2022
              </p>
              <p className="source">SOURCE: GLASSDOOR</p>
            </div>
          </div>
          <LoadingButton variant="contained" size="large">
            Send Application
          </LoadingButton>
        </div>
      </div>
      <div className="program_for">
        <div className="programs_for">
          <h2 className="developTitle">Who Is This Program For?</h2>
          <ul>
            <li>
              <span>Career Launchers: </span>early career professionals wanting
              to start a career in a high-growth field and gain exposure to the
              full development lifecycle as the launch point.
            </li>
            <li>
              <span>Career Builders: </span>professionals ready to build on
              existing skills in coding, to formalize training, and earn a
              valued certificate.
            </li>
            <li>
              <span>Career Switchers: </span>mid- or later career professionals
              looking to switch into software development from another field,
              such as marketing, sales, operations, or any othe
            </li>
          </ul>
          <div className="togetInto">
            <div className="togetInto_frontend">
              <h2>To Get Into Front-end Program</h2>
              <ul>
                <li>Apply and pass the application test.</li>
                <li>Pass the simple Math and english text</li>
                <li>Demonstrate interest in software engineering field.</li>
              </ul>
            </div>
            <div className="togetInto_fullStack">
              <h2>To Get Into Full-Stack Program</h2>
              <ul>
                <li>Have basic skills in coding.</li>
                <li>Apply and pass the application test.</li>
                <li>Pass the simple/ basic coding challenge </li>
                <li>Demonstrate interest in software engineering field.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="keyTake">
        <div className="keyTake-ways">
          <h2 className="developTitle">Key Takeaways</h2>
          <div className="take">
            <ul>
              <li>Build, test and deploy application </li>
              <li>Build test, and deploy APIs</li>
              <li>Build, test, deploy full stack application using react</li>
              <li>
                Setup continuous integration (CI) and Continous Delivery (CD)
                pipeline to deploy react application{" "}
              </li>
              <li>Able to use GitHub. </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="programTopic">
        <div className="programTopicCont">
          <h2 className="developTitle">Program Topics</h2>
          <p className="leftered marginBottom">
            This program is organized into four modules: UI/UX Design, Web
            development, Front-End Development/React, and Back-End
            Development.Each module builds on the next, and is designed to
            prepare you to enter the job market as an entry-level full-stack
            developer, or to specialize in one of these areas with further skill
            development. The first three modules (UI/UX Design) are meant for
            people who will attend front-end web development, while other
            modules are geared for those who will attend full-stack software
            engineer.
          </p>
          <div className="module-container">
            <div className="module-column-1">
              <div className="module-1">
                <h2>Module 1: UI/UX Design</h2>
                <p>
                  In this course, we’ll cover the theory and methodologies
                  behind UI and UX design. You’ll also design your own
                  wireframes and interactive prototypes using Figma. Learning UI
                  and UX basics can help you collaborate better on team projects
                  and create new career opportunities.
                </p>
              </div>
              <div className="module-2">
                <h2>Module 2: Web Development</h2>
                <p>
                  You will develop foundational skills in web development using
                  Javascript, HTML, and CSS. You’ll also create your own
                  personal portfolio in GitHub, which you will add to as you
                  progress through the program.
                </p>
              </div>
              <div className="module-3">
                <h2>Module 3: Front-End Development and React</h2>
                <p>
                  You will dive deep into front-end development using one of the
                  most popular frameworks, React. You will write clean, concise
                  code with Javascript ES6 and use these skills to work with web
                  components in React. You will learn how to build React
                  applications and how to test and deploy them.
                </p>
              </div>
              <div className="module-4">
                <h2>Module 4: Back-End Development</h2>
                <p>
                  You will work with MongoDB, ExpressJS, and NodeJS to become
                  confident in Full-Stack Software. You will learn the
                  essentials for working in the cloud, automated testing, and
                  deployment for a solid foundation in DevOps
                </p>
              </div>
            </div>
          </div>
          <LoadingButton variant="contained" size="large">
            Send Application
          </LoadingButton>
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-pro">
          <h2 className="developTitle marginBottom">Program Highlights</h2>
          <div className="high-container">
            <div className="high-column-1">
              <img src={certificate} className="high-img" />
              <p>Earn a Certification to recognize your skills and success</p>
            </div>
            <div className="high-column-2">
              <img src={certificate} className="high-img" />
              <p>Earn a Certification to recognize your skills and success</p>
            </div>
            <div className="high-column-1">
              <img src={certificate} className="high-img" />
              <p>Earn a Certification to recognize your skills and success</p>
            </div>
            <div className="high-column-1">
              <img src={certificate} className="high-img" />
              <p>Earn a Certification to recognize your skills and success</p>
            </div>
            <div className="high-column-1">
              <img src={certificate} className="high-img" />
              <p>Earn a Certification to recognize your skills and success</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Duration;
