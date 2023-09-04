import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './index.css'; //Import the CSS here

function BootstrapDune() {
  const [showLogoff, setShowLogoff] = useState(false);
  const username = sessionStorage.getItem('username');

  const handleLogoff = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    window.location.reload();
  };

  const userIconAndName = (
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <FontAwesomeIcon icon={faUser} size="lg" style={{ marginBottom: '5px' }} />
      </Col>
      <Col xs={12} className="d-flex justify-content-center">
        {username}
      </Col>
    </Row>
  );

  const styles = {
    navLink: {
      display: 'inline-block',
      paddingTop: '.5rem',
      paddingBottom: '.5rem',
      paddingRight: '1rem',
      paddingLeft: '1rem',
    },
  };

  return (
    <Navbar bg="dark" variant="dark" className="container-fluid">
      <img
        alt=""
        src="/DUNElogo_white.png"
        width="100"
        height="80"
        className="ms-5"
      />
      <Container fluid="md">
        <Navbar.Brand href="#">
          <h1>Process Manager</h1>
        </Navbar.Brand>
      </Container>
      {username && (
        <Nav className="me-3">
          <NavDropdown title={userIconAndName} id="collasible-nav-dropdown" align="end" show={showLogoff} onMouseEnter={() => setShowLogoff(true)} onMouseLeave={() => setShowLogoff(false)}>
            <NavDropdown.Header>Signed in as:<br />{username}</NavDropdown.Header>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogoff}>Log Off</NavDropdown.Item>
          </NavDropdown>
          <style type="text/css">
            {`
              .dropdown-toggle::after {
                display: none;
              }
            `}
          </style>
        </Nav>
      )}
    </Navbar>
  );
}

export default BootstrapDune;
