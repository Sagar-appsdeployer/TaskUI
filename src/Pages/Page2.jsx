import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AppsdeployerPng from "../assets/Appsdeployer.png";

const Page2 = () => {
  return (
    <>
      <img
        src={AppsdeployerPng}
        alt=""
        style={{ width: "250px" }}
        className="p-2"
      />

      <section>
        <div className="container m-5"
        style={{width:"70%"}}>
            <p className="display-6 mt-5">What Kind of Work do you do?</p>
            <h6 className="text-muted m-1">This helps us recommend features for you.</h6>

           <p className="text-muted mt-5">Select all that apply:</p>
           <div className="container  .flex-row m-3">
<Button className=" btn  rounded-pill select_button" variant="outline-dark">Administrative Assistant</Button>
<Button className="m-2  rounded-pill select_button" variant="outline-dark">Communications</Button>
<Button className="  rounded-pill select_button" variant="outline-dark">Customer Support</Button>
<Button className="m-2  rounded-pill select_button" variant="outline-dark">Data or Analytics</Button>
<Button className="  rounded-pill select_button" variant="outline-dark">Design</Button>
<Button className="m-2  rounded-pill select_button" variant="outline-dark">Education Proffessional</Button>
<Button className="  rounded-pill select_button" variant="outline-dark">Engineering</Button>
<Button className="m-2  rounded-pill select_button" variant="outline-dark">Fundraising</Button>
<Button className="  rounded-pill select_button" variant="outline-dark">Healthcare Proffessional</Button>
<Button className="m-2  rounded-pill select_button" variant="outline-dark">Human Resources</Button>


 <div className="container mt-4">
    <NavLink to="/page3">
    <Button className="me-3 px-3" variant="dark">Continue</Button>

    </NavLink>
    <Button className="px-4" variant="outline-dark">Skip</Button>
 </div>


           </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
