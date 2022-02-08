import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';


function Footer() {
  return <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><Link to='/'><img src="/images/microphone.png" alt="MdD" height={35} width={35}/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="me-auto">
                <Nav.Link>Newsletter</Nav.Link>
                <Nav.Link href="mailto:ola@maltadodesporto.com" target="_blank" rel="noreferrer">Colaborações</Nav.Link>
              </Nav>

              <Nav>
                <Navbar.Text>2022 © MdD</Navbar.Text>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>
}

export default Footer;