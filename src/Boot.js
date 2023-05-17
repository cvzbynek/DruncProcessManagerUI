import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
//import './App.css';

function Boot() {
  return (

      <Navbar bg="dark" variant="dark" className="container-fluid">
        <img
              alt=""
              src="/logo.png"
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

export default Boot;