import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="inside">
            <h2>HI-TECH DENTAL</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/schedule">Appointment</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}