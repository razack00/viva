import { Row, Col, Container } from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar 
      className='p-3 w-100' 
      expand="md" 
      style={{background: "#0E9CD8", zIndex: "888", position: "fixed", top: '0', borderBottom: " 5px solid #fff"}}>
        <Container fluid className='d-flex container'>
        <LinkContainer to="viva-Express">
        <Navbar.Brand href="#home">
            <Row>
              <Col style={{height:"fit-content"}}>
                <img src= {process.env.PUBLIC_URL + '/images/bglogo.jpg'} alt='logo' width="40px" className='mt-0'></img>
              </Col>
              <Col className='m-auto'>
                <span className="hero-moto flex fs-3 text-white"><p>The <b>Ultimate</b> VE </p></span>
              </Col>
            </Row>
          </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav border-white bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
              <LinkContainer to="viva-Express">
                <Nav.Link className='nav-item'>HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>ABOUT US</Nav.Link>
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
                <LinkContainer to="/">
                  <NavDropdown.Item>
                    ROUTES AND PRICES
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="reservation">
                  <NavDropdown.Item>BOOK A RESERVATION</NavDropdown.Item>
                </LinkContainer>
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