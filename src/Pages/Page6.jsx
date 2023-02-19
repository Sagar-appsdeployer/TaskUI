import React, { useState } from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useSelector } from "react-redux";

const Page6 = () => {
  const ProjectName = useSelector((e) => e.app.ProjectName);
  const values = useSelector((e) => e.app.TaskName);
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
              now={60}
              style={{ width: "60%", height: "10px" }}
            />
          </div>

          <div className="m-5 text-light" style={{ width: "100%" }}>
            <h5>
              How would you group these tasks into <br /> sections or stages?
            </h5>
            <div className="container">
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder=" "
                style={{ width: "400px" }}
              />
            </div>

            <div className="container">
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder=" "
                style={{ width: "400px" }}
              />
            </div>
            <div className="container">
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder=" "
                style={{ width: "400px" }}
              />
            </div>

            <div className="container">
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder=""
                style={{ width: "400px" }}
              />
            </div>
            <div className="container">
              <NavLink to="/page7">
                <Button className="mt-4 px-3" variant="light">
                  Continue &rarr;
                </Button>
              </NavLink>
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
                <NavLink className="px-3 text-primary">
                  <h6>List</h6>
                </NavLink>

                <h6 className="text-muted">Board</h6>

                <h6 className="text-muted px-3">Timeline</h6>

                <h6 className="text-muted">Calender</h6>
              </div>

              <Table bordered responsive>
                <thead>
                  <tr>
                    <th colSpan={3} className="text-muted text-center">
                      Task Name
                    </th>
                    <th className="text-muted text-center">Assignee </th>
                    <th className="text-muted text-center">Due Date</th>
                  </tr>
                </thead>

                <h4 className="mx-3">
                  <i className="fa-solid fa-caret-down"></i>To do
                </h4>

                <tbody>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        {" "}
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {values[0]}
                    </td>
                    <td></td>
                    <td> </td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {values[1]}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {values[2]}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {values[3]}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
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

export default Page6;
