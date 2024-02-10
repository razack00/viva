import { Container, Row, Col, Card } from 'react-bootstrap';

function About(){
    return (
        <Container style={{marginTop: "100px"}}>
            <h2>About Us</h2>
            <Row>
                <Col md={6}>
                <p>
                    Viva is a leading bus travel agency dedicated to providing safe, reliable, and comfortable transportation experiences. We pride ourselves on our commitment to excellent customer service and our extensive network of routes across regions.
                </p>

                <p>What sets us apart? We offer:</p>
                <ul>
                <li>Award-winning safety standards and regular bus inspections.</li>
                <li>Comfortable seating, air conditioning, Wi-Fi, and charging outlets on all buses.</li>
                <li>A wide range of accessible features on our buses and terminals.</li>
                <li>24/7 customer service support to assist you with any questions.</li>
                </ul>

                <p>We're more than just a bus company; we're passionate about connecting people and creating memorable travel experiences. Our team of experienced professionals is dedicated to making your journey smooth and enjoyable. Join us on your next adventure and discover the benefits of bus travel with Viva.</p>

                <button className='my-3' type="button">Browse our routes and book your ticket today!</button>

                </Col>
                <Col md={6}>
                <img src="images/bus1.jpeg" alt="Bus agency image" className="w-100" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                <h2 className='my-5'>Why Choose Us?</h2>
                    <Card>
                        <Card.Header>
                            Experienced Team
                        </Card.Header>
                        <Card.Body>
                        Our team of travel experts has years of experience in the bus travel industry. They're knowledgeable, resourceful, and passionate about helping you plan your trip.
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Extensive Network
                        </Card.Header>
                        <Card.Body>
                        We offer a wide range of routes connecting major cities and towns across [regions you serve]. No matter where you're going, we can get you there.
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Affordable Prices
                        </Card.Header>
                        <Card.Body>
                        We understand that travel budgets are important. We offer competitive prices to ensure you get the best value for your money.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About;

