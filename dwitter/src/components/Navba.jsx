import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./navba.module.css";
import { FaTwitter } from "react-icons/fa";
const Navba = () => {
  return (
    <div>
      <Navbar className={styles.navbar} expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            <FaTwitter style={{ marginRight: "10px" }} />
            Dwitter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">All dwitter</Nav.Link>
              <Nav.Link href="#home">My dwitter</Nav.Link>
              <Nav.Link href="#home">Login/Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default Navba;
