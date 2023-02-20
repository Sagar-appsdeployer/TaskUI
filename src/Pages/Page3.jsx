import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import "./page.css";
/* ..............................Page 3 Component ..............................*/

const Page3 = () => {
  return (
    <>
      {/*............... AppsDeployer Image............... */}

      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
      />

      {/*............... Page Section Start............... */}

      <section>
        <div className="container">
          <p className="display-6 mt-4 text-light">
            What's your main objective
            <br /> in Asana?
          </p>
          <p className="text-light m-1">
            Your choice here won't limit what you can do in Asana.
          </p>
          <div className="container mt-4">
            <div className="col">
              <Card
                style={{ width: "400px" }}
                className="card_plan m-3 p-2  shadow"
              >
                <span className="recommended_text">✨Recommended for you</span>
                <h6>
                  {" "}
                  <span className="text-danger p-1">
                    {" "}
                    <i className="fa-solid fa-clipboard-list "></i>
                  </span>
                  Project and process management
                </h6>
                <p>Plan projects, coordinate task ,and hit deadlines</p>
              </Card>
              <Card
                style={{ width: "400px" }}
                className="card_plan m-3 p-2 border-0 shadow "
              >
                <h6>
                  {" "}
                  <span className="text-warning p-1">
                    {" "}
                    <i className="fa-regular fa-circle-check "></i>
                  </span>
                  Personal Task management
                </h6>
                <p>Organize to-dos and plan out my work day</p>
              </Card>
              <Card
                style={{ width: "400px" }}
                className=" card_plan m-3 p-2 border-0 shadow"
              >
                <h6>
                  {" "}
                  <span className="text-success p-1">
                    <i className="fa-solid fa-chart-column "></i>
                  </span>
                  Portfolio and Workload management
                </h6>
                <p>
                  Monitor status and team-member workload across multiple
                  projects
                </p>
              </Card>
            </div>

            <div className="container">
              <NavLink to="/page4">
                <Button variant="light" className="me-3 px-3 glow-on-hover">
                  Continue &rarr;
                </Button>
              </NavLink>

              <NavLink to="/page4">
                <Button variant="outline-light" className="px-4 glow-on-hover">
                  I'm not sure yet
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/*............... Page Section Close............... */}

      {/* ...............Animation Bottom Section ...............*/}

      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Page3;
