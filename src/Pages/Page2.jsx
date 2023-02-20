import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppsdeployerPng from "../assets/Appsdeployer.png";

/* ..............................Page 2 Component ..............................*/

const Page2 = () => {
  return (
    <>
      {/*............... AppsDeployer Image............... */}

      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
        className="p-2"
      />

      {/*...............Page Section Start ............... */}

      <section>
        <div className="container m-5" style={{ width: "70%" }}>
          <p className="display-6 mt-5 text-light">
            What Kind of Work do you do?
          </p>
          <h6 className="text-light m-1">
            This helps us recommend features for you.
          </h6>

          <p className="text-light mt-5">Select all that apply:</p>
          <div className="container  .flex-row m-3">
            <Button
              className=" btn  rounded-pill select_button "
              variant="outline-light"
            >
              Administrative Assistant
            </Button>
            <Button
              className="m-2  rounded-pill select_button"
              variant="outline-light"
            >
              Communications
            </Button>
            <Button
              className="  rounded-pill select_button"
              variant="outline-light"
            >
              Customer Support
            </Button>
            <Button
              className="m-2  rounded-pill select_button"
              variant="outline-light"
            >
              Data or Analytics
            </Button>
            <Button
              className="  rounded-pill select_button"
              variant="outline-light"
            >
              Design
            </Button>
            <Button
              className="m-2  rounded-pill select_button"
              variant="outline-light"
            >
              Education Proffessional
            </Button>
            <Button
              className="  rounded-pill select_button"
              variant="outline-light"
            >
              Engineering
            </Button>
            <Button
              className="m-2  rounded-pill select_button"
              variant="outline-light"
            >
              Fundraising
            </Button>
            <Button
              className="  rounded-pill select_button"
              variant="outline-light"
            >
              Healthcare Proffessional
            </Button>
            <Button
              className="m-2  rounded-pill select_button"
              variant="outline-light"
            >
              Human Resources
            </Button>

            <div className="container mt-4">
              <NavLink to="/page3">
                <Button className="me-3 px-3 glow-on-hover" variant="light ">
                  Continue &rarr;{" "}
                </Button>
              </NavLink>

              <NavLink to="/page3">
                <Button className="px-4 glow-on-hover" variant="outline-light">
                  Skip
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/*...............Page Section End ............... */}

      {/* ...............Animation Bottom Section ...............*/}

      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Page2;
