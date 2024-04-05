import React from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Btn from '../components/Btn';

function CourierServices() {
  return (
    <Container style={{marginTop: "100px"}} className="">
      <h2 className='my-3'>Courier Services</h2>
      <Row>
        <Col md={8}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
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
              <Btn text={"Book Now"} />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img src="/images/bus3.jpeg" alt="Bus image" className="img-fluid" />
        </Col>
      </Row>

      <Row>
        <Col className="pt-5" md={12}>
          <h2>Popular Courier Services</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Service</th>
                <th>Delivery Time</th>
                <th>Delivery Area</th>
                <th>Package Size</th>
                <th>Price</th>
                <th>Tracking</th>
                <th>Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Express Delivery</td>
                <td>Next Business Day</td>
                <td>Nationwide</td>
                <td>Up to 5 kg</td>
                <td>$30</td>
                <td>Real-time tracking</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Standard Delivery</td>
                <td>2-3 Business Days</td>
                <td>Major Cities</td>
                <td>Up to 10 kg</td>
                <td>$20</td>
                <td>Daily updates</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Economy Delivery</td>
                <td>4-7 Business Days</td>
                <td>Regional Areas</td>
                <td>Up to 15 kg</td>
                <td>$15</td>
                <td>Email notifications</td>
                <td>Extra fee</td>
              </tr>
              <tr>
                <td>Bulk Shipment</td>
                <td>Custom Quote</td>
                <td>Nationwide</td>
                <td>Over 15 kg</td>
                <td>Varies</td>
                <td>Dedicated tracking</td>
                <td>Included</td>
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
              <a href="#" className="btn btn-primary p-4">Book Now</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CourierServices;
