import React, { useState } from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Col, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/ProjectSlice";

/* ..............................Page 4 Component ..............................*/

const Page5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const value = useSelector((e) => e.app.ProjectName);

  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const [input4Value, setInput4Value] = useState("");

  const buttonOnClick = () => {
    if (!input1Value || !input2Value || !input3Value || !input4Value) {
      window.alert("Please Fill all the Input field");
    } else {
      dispatch(addTask(input1Value));
      dispatch(addTask(input2Value));
      dispatch(addTask(input3Value));
      dispatch(addTask(input4Value));
      navigate("/page6");
    }
  };
  return (
    <>
      {/*............... AppsDeployer Image............... */}

      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "200px" }}
        className="p-2"
      />

      {/*............... Page Section Start............... */}

      <div className="row">
        <Col>
          <div className="container m-5 ">
            <ProgressBar
              variant="danger"
              now={40}
              style={{ width: "60%", height: "10px" }}
            />
          </div>

          <div className="m-5 text-light" style={{ width: "100%" }}>
            <h5>
              What's something you and your team are <br /> currently working
              on?
            </h5>
            <div className="container">
              <span className="text-light">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder="eg. Draft project brief"
                style={{ width: "400px" }}
                value={input1Value}
                onChange={(e) => setInput1Value(e.target.value)}
              />
            </div>

            <div className="container">
              <span className="text-light">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder="eg. Schedule Kickoff meeting"
                style={{ width: "400px" }}
                value={input2Value}
                onChange={(e) => setInput2Value(e.target.value)}
              />
            </div>
            <div className="container">
              <span className="text-light">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder="eg. Share timeline with teammates"
                style={{ width: "400px" }}
                value={input3Value}
                onChange={(e) => setInput3Value(e.target.value)}
              />
            </div>

            <div className="container">
              <span className="text-light">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              <input
                type="text"
                className="border-0 border-bottom mt-3 bg-light p-2"
                placeholder="eg. Share timeline with teammates"
                style={{ width: "400px" }}
                value={input4Value}
                onChange={(e) => setInput4Value(e.target.value)}
              />
            </div>
            <div className="container">
              <Button
                className="mt-4 px-3 glow-on-hover ms-3"
                variant="light"
                onClick={buttonOnClick}
              >
                Continue &rarr;
              </Button>
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
                {/* Value here */}
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
                      {input1Value}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {input2Value}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {input3Value}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      {input4Value}
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

export default Page5;
