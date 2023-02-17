import React from "react";
import AppsdeployerPng from "../assets/Appsdeployer.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {  NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const Page1 = () => {
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
          <p className="display-6 mt-5"> What's Your Primary Role?</p>
          <h6 className="text-muted m-1">
            This helps us recommend features for you.
          </h6>

          <Form.Select aria-label="Default select example"
          style={{width:"40%"}}>
      <option>Choose one...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

          <div className="container mt-4">
            <NavLink to="/page2">
              <Button variant="dark" className="  mt-5 py-2 me-4">Continue</Button>
            </NavLink>
            <Button  variant="outline-dark" className=" mt-5 py-2">Skip</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page1;
