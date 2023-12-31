import { Row, Col, Container } from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <>
      <div className='p-3'style={{background: "#fff"}}></div>
      <Navbar className='p-3' expand="lg" style={{background: "#0E9CD8", borderBottom: " 5px solid #fff"}}>
        <Container fluid className='d-flex container'>
          <Navbar.Brand href="#home">
            <Row>
              <Col style={{height:"fit-content"}}>
                <img src= {process.env.PUBLIC_URL + '/images/bglogo.jpg'} alt='logo' width="40px" className='mt-0'></img>
              </Col>
              <Col className='m-auto'>
                <span className="hero-moto flex fs-3 text-white"><p>The <b>Ultimate</b> Driving Machine</p></span>
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav border-white bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
              <LinkContainer to="viva-Express">
                <Nav.Link className='nav-item'>HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>ABOUT COMPANY</Nav.Link>
              </LinkContainer>
              <NavDropdown title="SERVICES" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <LinkContainer to="/about">
                <NavDropdown.Item>TRANSPORTATION</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>COURIER SERVICES</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
              <NavDropdown title="PLAN YOUR JOURNEY" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item href="#action/3.1">SCHEDULES & RATES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  ROUTES
                </NavDropdown.Item>
                <LinkContainer to="reservation">
                  <NavDropdown.Item>BOOK A RESERVATION</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action/3.4">
                  TICKET INFORMATION
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/blog">
                <Nav.Link>BLOG</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;