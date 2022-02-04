import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function NavigationBar() {
  return <div>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">MdD</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#about">Sobre nós</Nav.Link>
                <Nav.Link href="#spotify">Spotify</Nav.Link>
                <Nav.Link href="#soundcloud">Soundcloud</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  </div>;
}

export default NavigationBar;
