import React from 'react';
import { Container, Form, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'><img src="/images/podcast.png" alt="MdD" height={35} width={35}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/about'>Sobre nós</Link></Nav.Link>
            <Nav.Link><Link to='/spotify'>Spotify</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</Nav.Link>
            <Nav.Link href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>;
}

export default NavigationBar;