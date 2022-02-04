import React from 'react';
import { Container, Form, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'>MdD</Link></Navbar.Brand>
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
    <div className='search-bar-div'>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder='Pesquisar'
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Go!</Button>
      </Form>
    </div>
  </div>;
}

export default NavigationBar;