import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'

export const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" className='mb-5 sticky-top' >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://awcsoftware.com/wp-content/themes/creote/assets/images/logo-default.png"
              width="90"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        About
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Container>
      </Navbar>
  )
}
