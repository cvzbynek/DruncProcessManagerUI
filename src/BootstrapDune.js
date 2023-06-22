import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function BootstrapDune() {
  return (
    <Navbar bg="dark" variant="dark" className="container-fluid">
      <img
        alt=""
        src="/DUNElogo_black-409x260.jpg"
        width="100"
        height="80"
        className="ms-5"
      />
      <Container fluid="md">
        <Navbar.Brand href="#">
          <h1>Process Manager Interface</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BootstrapDune;