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
                <Nav.Link><Link to='/about' style={{textDecoration: 'none'}}>Sobre nós</Link></Nav.Link>
              </Nav>

              <Nav>
                <Navbar.Text>2022 © MdD</Navbar.Text>
              </Nav>

              <Nav>
                <Nav.Link href="mailto:ola@maltadodesporto.com" target="_blank" rel="noreferrer"><img src="/images/mail.png" alt="Email" height={30} width={30} /></Nav.Link>
                <Nav.Link href="https://instagram.com" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="Instagram" height={25} width={25} /></Nav.Link>
                <Nav.Link href="https://youtube.com" target="_blank" rel="noreferrer"><img src="/images/youtube.png" alt="Youtube" height={25} width={25} /></Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>
}

export default Footer;