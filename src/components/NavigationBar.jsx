import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return <div>
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand><Link to='/'><img src="/images/microphone.png" alt="MdD" height={35} width={35}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/about' style={{textDecoration: 'none'}}>Sobre nós</Link></Nav.Link>
            <Nav.Link><Link to='/blog' style={{textDecoration: 'none'}}>Blog</Link></Nav.Link>
            <Nav.Link><Link to='/spotify' style={{textDecoration: 'none'}}>Spotify</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="Instagram" height={25} width={25} /></Nav.Link>
            <Nav.Link href="https://youtube.com" target="_blank" rel="noreferrer"><img src="/images/youtube.png" alt="Youtube" height={25} width={25} /></Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/images/twitter.png" alt="Twitter" height={25} width={25} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>;
}

export default NavigationBar;