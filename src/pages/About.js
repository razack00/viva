import { Col, Row, Card, Container} from 'react-bootstrap';

function About() {
    return (
        <div className="page-container">
            <h1 className="py-5 text-center">ABOUT US</h1>
            <div className="py-5">
            <Container className='vh-80 d-flex align-items-center justify-content-center text-white'>
                <Row  className='bg-dark rounded-5 d-flex align-items-center  h-75'>
                    <Col className='d-flex flex-column justify-content-between p-0 h-100' md={6}>
                        <Card.Img src={process.env.PUBLIC_URL + "/images/bus4.jpg"} />
                    </Col>
                    <Col md={6} style={{borderRadius: "0px 20px 20px 0px", background: "#022546"}} className=' d-flex align-items-center p-5 h-100'>
                        <Card.Body>
                                <Card.Title style={{fontSize: "40px", marginBottom: "20px"}}>We Prioritize Customer Satisfaction and Safety</Card.Title>
                                <Card.Text>
                                    <p>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </p>
                                    <p>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        Some quick example text to build on 
                                    </p>
                                </Card.Text>          
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About