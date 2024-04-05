import React from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Btn from '../components/Btn';
import LinkBtn from '../components/LinkBtn'

function TransportServices() {
  return (
    <Container style={{marginTop: "100px"}} className="">
      <h2 className='my-3'>Transportation Services</h2>

      <Row>
        <Col md={8}>
          <p>
            Viva offers a wide range of transportation services to meet your travel needs. Whether you're looking for a comfortable ride across town or a convenient connection between major cities, we have the perfect solution for you.
          </p>
          <p>
            Our modern fleet of buses is equipped with all the amenities you need for a relaxing journey, including comfortable seating, air conditioning, Wi-Fi, and charging outlets. We also offer a variety of amenities and services onboard, such as:</p>
          <Row>
            <Col>
              <ul>
                <li>Restrooms</li>
                <li>Beverages and snacks (for purchase)</li>
                <li>Entertainment systems (on select routes)</li>
                <li>Accessible seating and features</li>
              </ul>
            </Col>
            <Col className='d-flex align-items-center justify-content-center'>
              <LinkBtn text={"Book Now"} />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img src="/images/bus3.jpeg" alt="Bus image" className="img-fluid" />
        </Col>
      </Row>

      <Row>
        <Col className="pt-5" md={12}>
          <h2 className='py-3 text-center'>Popular Destinations</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Destinations</th>
                <th>Travel Time</th>
                <th>Frequency</th>
                <th>Fare</th>
                <th>Amenities on Board</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Major City 1 - Major City 2</td>
                <td>2 hours 30 minutes</td>
                <td>Daily</td>
                <td>$25</td>
                <td>Wi-Fi, Power outlets, Restrooms</td>
              </tr>
              <tr>
                <td>Major City 2 - Town 3</td>
                <td>1 hour 45 minutes</td>
                <td>4 times a day</td>
                <td>$18</td>
                <td>Wi-Fi, Reading lights</td>
              </tr>
              <tr>
                <td>Town 3 - Regional Hub 4</td>
                <td>45 minutes</td>
                <td>Hourly</td>
                <td>$10</td>
                <td>None</td>
              </tr>
              <tr>
                <td>And many more!</td>
                <td>Varies</td>
                <td>On demand</td>
                <td>Varies</td>
                <td>Varies</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col md={12} className='m-auto'>
          <h2 className='text-center'>Additional Services</h2>
          <Accordion className='my-5' defaultActiveKey={['0']}>
            <Accordion.Item eventKey="0">
              <Accordion.Header><p className='fs-4'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p></Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header><p className='fs-4'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p></Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Row>
            <Col className='d-flex justify-content-between' md={12}>
              <p>
                Ready to book your next trip? Visit our booking page or contact us today to learn more about our transportation services!
              </p>
              <LinkBtn text={"Book Now"} link={"/reservation"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TransportServices;
