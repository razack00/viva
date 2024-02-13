import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function RoutesAndPrices() {
  return (
    <Container style={{marginBlock: "20px"}}>
      <Row>
        <Col className="pt-5" md={12}>
          <h2 className="py-4">Our Routes / Destinations </h2>
          <Table striped bordered hover responsive = "md">
            <thead>
              <tr>
                <th>Destinations</th>
                <th>Time</th>
                <th>Frequency</th>
                <th>Fare</th>
                <th>Amenities</th>
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
    </Container>
  );
}

export default RoutesAndPrices;