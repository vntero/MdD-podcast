import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return <div>
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand><Link to='/'><img src="/images/microphone.png" alt="MdD" height={35} width={35}/></Link></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    
  </div>;
}

export default NavigationBar;