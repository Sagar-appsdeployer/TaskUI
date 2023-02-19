import React, { useState } from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useSelector } from "react-redux";
import "./page.css";
const Page7 = () => {
  const ProjectName = useSelector((e) => e.app.ProjectName);

  return (
    <>
      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
        className="p-2"
      />
      <div className="row">
        <Col>
          <div className="container m-5 ">
            <ProgressBar
              variant="danger"
              now={100}
              style={{ width: "60%", height: "10px" }}
            />
          </div>

          <div className="m-5 text-light" style={{ width: "100%" }}>
            <h4 className="ms-3">
              What layout works best for this project? <br /> You can change
              this later
            </h4>

            {/* .............................Cards here............................. */}
            <div className="container text-dark">
              <div className="row p-2">
                <div className="col">
                  <Card
                    style={{ width: "300px", height: "100px" }}
                    className="layout_cards justify-content-center align-items-center bg-danger "
                  >
                    <h2 className="text-light ">
                      {" "}
                      <i class="fa-solid fa-list m-2"></i>List
                    </h2>
                  </Card>
                </div>
                <div className="col">
                  <Card
                    style={{ width: "300px", height: "100px" }}
                    className="layout_cards justify-content-center align-items-center bg-info"
                  >
                    <h2 className="text-light">
                      {" "}
                      <i class="fa-solid fa-chalkboard  m-2"></i>
                      Board
                    </h2>
                  </Card>
                </div>
              </div>
              <div className="row p-2">
                <div className="col">
                  <Card
                    style={{ width: "300px", height: "100px" }}
                    className="layout_cards justify-content-center align-items-center bg-success "
                  >
                    <h2 className="text-light">
                      {" "}
                      <i class="fa-solid fa-bars-staggered  m-2"></i>
                      Timeline
                    </h2>
                  </Card>
                </div>
                <div className="col">
                  <Card
                    style={{ width: "300px", height: "100px" }}
                    className="layout_cards justify-content-center align-items-center bg-danger"
                  >
                    <h2 className="text-light">
                      {" "}
                      <i class="fa-solid fa-calendar  m-2"></i>
                      Calender
                    </h2>
                  </Card>
                </div>
              </div>
            </div>

            {/* .............................Cards here............................. */}

            <p className="ms-4">💡List is great for tracking work.</p>
            <div className="container">
              {/* <NavLink to="/page7"> */}
              <Button className="mt-4 ms-2 px-3" variant="light">
                Continue &rarr;
              </Button>
              {/* </NavLink> */}
            </div>
          </div>
        </Col>
        <Col className="card_view">
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                This is a Preview of Your Sample Project.
              </Tooltip>
            }
          >
            <Card className="shadow border-0">
              <i className="fa-solid fa-ellipsis  fa-2x px-3 "></i>

              <hr />
              <h2 className="mx-3 display-6">
                <span className="mx-1  p-1 rounded">
                  <i className="fa-solid fa-list-ul"></i>
                </span>
                {ProjectName}
              </h2>
              <div className="container d-flex ">
                <h6>List</h6>

                <NavLink className="px-3 text-primary">
                  <h6>Board</h6>
                </NavLink>

                <h6 className="text-muted px-3">Timeline</h6>

                <h6 className="text-muted">Calender</h6>
              </div>

              {/* ......................................Data of Board and etc put here...................................... */}
            </Card>
          </OverlayTrigger>
        </Col>
      </div>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Page7;
