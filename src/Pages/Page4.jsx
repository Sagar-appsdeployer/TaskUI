import React, { useState } from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Col, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useDispatch } from "react-redux";
import { add } from "../redux/ProjectSlice";
import "./page.css";

/* ..............................Page 4 Component ..............................*/

const Page4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const buttonClick = () => {
    if (!value) {
      window.alert("Please fill project name for preview.");
    } else {
      dispatch(add(value));
      navigate("/page5");
    }
  };

  return (
    <>
      {/*............... AppsDeployer Image............... */}

      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
      />

      {/*............... Page Section Start............... */}

      <div className="row">
        <Col className=" rounded-4 shadow">
          <div className="container m-5 ">
            <ProgressBar
              variant="danger"
              now={10}
              style={{ width: "60%", height: "10px" }}
            />
          </div>

          <h2 className="display-6 m-5 text-light">
            Let's set up your <br /> first project
          </h2>
          <div className="m-5 text-light" style={{ width: "100%" }}>
            <h5>
              What's something you and your team are <br /> currently working
              on?
            </h5>
            <input
              type="text"
              className="border-0 border-bottom mt-3 bg-light p-2"
              placeholder="eg. Cross-functional project plan"
              style={{ width: "370px" }}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <div className="container">
              <Button
                className="mt-4  glow-on-hover btn3"
                variant="light"
                onClick={buttonClick}
              >
                Continue &rarr;
              </Button>
            </div>
          </div>
        </Col>
        <Col className="card_view">
         
            <Card className="shadow border-0">
              <i className="fa-solid fa-ellipsis  fa-2x px-3 "></i>


           
              <hr />
             
              <h2 className="mx-3 display-6">
                <span className="mx-1  p-1 rounded">
                  <i className="fa-solid fa-list-ul"></i>
                </span>

                {value}
              </h2>
              <div className="container d-flex ">
                <NavLink className="px-3 text-primary">
                  <h6>List</h6>
                </NavLink>

                <h6 className="text-muted">Board</h6>

                <h6 className="text-muted px-3">Timeline</h6>

                <h6 className="text-muted">Calender</h6>
              </div>
              <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                This is a Preview of Your Sample Project.
              </Tooltip>
            }
          >
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
                <tbody>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        {" "}
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
                </OverlayTrigger>
            </Card>
         
        </Col>
      </div>
      {/*............... Page Section End............... */}

      {/* ...............Animation Bottom Section ...............*/}

      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default Page4;
