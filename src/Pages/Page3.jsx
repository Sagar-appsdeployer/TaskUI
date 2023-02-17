import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import "./page.css";

const Page3 = () => {
  return (
    <>
      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "250px" }}
        className="p-2"
      />

      <section>
        <div className="container">
          <p className="display-6 mt-4">
            What's your main objective
            <br /> in Asana?
          </p>
          <p className="text-muted m-1">
            Your choice here won't limit what you can do in Asana.
          </p>
          <div className="container mt-4">
            <div className="col">
              <Card
                style={{ width: "400px" }}
                className="m-3 p-2 border-0 shadow"
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
                className="m-3 p-2 border-0 shadow"
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
                className="m-3 p-2 border-0 shadow"
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
                <Button variant="dark" className="me-3 px-3">
                  Continue
                </Button>
              </NavLink>
              <Button variant="outline-dark" className="px-4">
                I'm not sure yet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page3;
