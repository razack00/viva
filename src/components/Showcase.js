import { Col, Row, Card, Container} from 'react-bootstrap';


function Showcase() {
  return (
    <Container className='d-flex align-items-center justify-content-center text-white mb-5'>
        <Row  className='bg-dark rounded-5 d-flex align-items-center  h-75'>
            <Col className='d-flex flex-column justify-content-between p-0 h-100' md={6}>
                <div style={{marginBottom: "20px", padding: "50px 20px 0px 20px", width: "80%"}}>
                    <Card.Title className='pb-3' style={{fontSize: "25px"}} >
                        Crazy Comfort
                    </Card.Title>
                    <Card.Text className='fs-5'>
                        bulk of the card's content.
                        Some quick example text to build on Some quick example text to build on 
                    </Card.Text>
                </div>
                <Card.Img style={{borderRadius: "0px 0px 0px 20px"}} src={process.env.PUBLIC_URL + "/images/bus4.jpg"} />
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
  );
}

export default Showcase;