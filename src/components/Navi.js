import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import "./Navi.css";

function Navi() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={`${process.env.PUBLIC_URL}/img/holy_smokes_truck.png`}
            id="nav_brand_image"
          />
          Holy Smokes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu_div">Menu</Nav.Link>
            <Nav.Link href="#location_div">Location</Nav.Link>
            <Nav.Link href="#contact_div">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;
