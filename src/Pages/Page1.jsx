import React from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./page.css";

/* ..............................Page 1 Component ..............................*/

const Page1 = () => {
  return (
    <>
      {/*............... AppsDeployer Image............... */}
      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
        
      />

      {/* ...............Page Section Start ...............*/}
      <section>
        <div className="container">
          <p className="display-6 mt-5 text-light">
            {" "}
            What's Your Primary Role?
          </p>
          <h6 className="text-light m-1">
            This helps us recommend features for you.
          </h6>

          <Form.Select
            aria-label="Default select example"
            style={{ width: "40%" }}
          >
            <option>Choose one...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <div className="container mt-4">
            <NavLink to="/page2">
              <Button
                variant="light"
                className="glow-on-hover  mt-5 py-2 me-4 "
              >
                Continue &rarr;
              </Button>
            </NavLink>
            <Button variant="outline-light" className="glow-on-hover mt-5 py-2">
              Skip
            </Button>
          </div>
        </div>
      </section>
      {/* ...............Page Section End ...............*/}

      {/* ...............Animation Bottom Section ...............*/}

      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Page1;
