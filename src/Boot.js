import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
//import './App.css';

function Boot() {
  return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#"><h1>Process Manager Interface</h1></Navbar.Brand>
        </Container>
      </Navbar>

  );
}

export default Boot;