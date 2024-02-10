import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup } from 'react-bootstrap';

function Transportation() {
  return (
    <Container className="my-5">
      <h2>Transportation Services</h2>

      <Row>
        <Col md={8}>
          <p>
            [Your company name] offers a wide range of transportation services to meet your travel needs. Whether you're looking for a comfortable ride across town or a convenient connection between major cities, we have the perfect solution for you.
          </p>
          <p>
            Our modern fleet of buses is equipped with all the amenities you need for a relaxing journey, including comfortable seating, air conditioning, Wi-Fi, and charging outlets. We also offer a variety of amenities and services onboard, such as:</p>
          <ul>
            <li>Restrooms</li>
            <li>Beverages and snacks (for purchase)</li>
            <li>Entertainment systems (on select routes)</li>
            <li>Accessible seating and features</li>
          </ul>
        </Col>
        <Col md={4}>
          <img src="bus-image.jpg" alt="Bus image" className="img-fluid" />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2>Popular Destinations</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>Major City 1 - Major City 2</ListGroup.Item>
            <ListGroup.Item>Major City 2 - Town 3</ListGroup.Item>
            <ListGroup.Item>Town 3 - Regional Hub 4</ListGroup.Item>
            <ListGroup.Item>And many more!</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2>Additional Services</h2>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Text} eventKey="0">
                  Charter Services
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Plan your group outing or special event with our reliable and comfortable charter buses. We offer flexible options to fit your needs and budget.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Text} eventKey="1">
                  Airport Transfers
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Take the stress out of airport travel with our convenient and affordable airport transfer services. We'll get you to your destination on time and relaxed.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Text} eventKey="2">
                  Package Tours
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Explore exciting destinations with our all-inclusive package tours. We handle all the details, so you can just sit back, relax, and enjoy the journey.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <p>
            Ready to book your next trip? Visit our booking page or contact us today to learn more about our transportation services!
          </p>
          <a href="#" className="btn btn-primary">Book Now</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Transportation;
