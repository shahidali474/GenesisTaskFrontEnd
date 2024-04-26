import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import PatientForm from './components/PatientForm';

function App() {
  return (
    <Router>
      <>
        <Navbar bg="light" expand="lg">
          <div className="d-flex justify-content-center w-100">
            <Navbar.Brand as={Link} to="/">Patient Management System</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/patients">Patients List</Nav.Link>
              <br />
              <br />
              <Nav.Link as={Link} to="/patientForm" style={{ marginRight: '1rem' }}>Add Patient</Nav.Link>
              <br />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/edit-patient/:id" element={<PatientForm />} />
          <Route path="/patientForm" element={<PatientForm />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
