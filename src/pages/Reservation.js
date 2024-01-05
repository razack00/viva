import { useEffect, useState } from 'react';
import {ListGroup, Row, Col, Form, Container, Button} from 'react-bootstrap/';
import { useLocation } from 'react-router-dom';

const Reservation = () => {
    const {formData, selectedRoute} = useLocation().state
    const [TravelPeriod, setTravelPeriod] = useState("")

    // adding departure time traveller departure date to actual date and time of travel and Converting to Date objects
    const DepartureDateTime = new Date(formData.departure_date + "T" + selectedRoute.departure_time)

    // adding the travel duration in hours to the departure time
    const ArrivalDateTime = new Date(DepartureDateTime.getTime() + (selectedRoute.travel_duration * 60 * 60 * 1000))

    // Checking if arrival date is past the departure date (overnight travel)
    useEffect(() => {
        if(ArrivalDateTime.getDate() > DepartureDateTime.getDate()
        ) {setTravelPeriod("Overnight")}else {setTravelPeriod("Day Trip")}
        console.log(TravelPeriod)
    }, [TravelPeriod])

    // Formatting the arrival time for display
    const formattedDepartureDateTime = DepartureDateTime.toLocaleDateString([], { hour: 'numeric', minute: '2-digit'})

    const formattedArrivalDateTime = ArrivalDateTime.toLocaleDateString([], { hour: 'numeric', minute: '2-digit'})
    return (
        <div className='page-container'>
        <Container className='py-5'>
            <Form className='w-75 m-auto text-secondary'>
                <Row className='gap-3 bg-light p-3' >
                    <Col sm={6}>
                        <Row className='bg-white'>
                            <Col>
                                <ListGroup className='list-group-flush border-end'>
                                    <ListGroup.Item className='border-0'>Origin</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Destination</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Category</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Bus No.</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Price</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                            <ListGroup className='list-group-flush'>
                                    <ListGroup.Item className='border-0'>{selectedRoute.origin} </ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{selectedRoute.destination}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{selectedRoute.category}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{selectedRoute.id}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{selectedRoute.price}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    <Row className='bg-white'>
                            <Col>
                                <ListGroup className='list-group-flush border-end'>
                                    <ListGroup.Item className='border-0'>No. of Passengers</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Trip Type</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Departure Date & time</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Arrival Date & Time</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Travel Period</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                            <ListGroup className='list-group-flush'>
                                    <ListGroup.Item className='border-0'>{formData.NumPassengers}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{formData.tripType}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{formattedDepartureDateTime}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{formattedArrivalDateTime}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{TravelPeriod}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <Form.Label htmlFor="pronoun">Title</Form.Label>
                        <Form.Select className='fs-4' style={{padding: "6px"}} id='from'>
                            <option value="Yaounde">Mr</option>
                            <option value="Douala">Mrs</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label htmlFor="from">First Name</Form.Label>
                        <Form.Control style={{paddingBlock: "7px"}}  type="text" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="to">Last Name</Form.Label>
                        <Form.Control style={{paddingBlock: "7px"}} type="text" placeholder="Last Name" />
                    </Col>
                </Row>
                <Row className='py-4'>
                    <Col>
                        <Form.Label htmlFor="from">ID Number</Form.Label>
                        <Form.Control style={{paddingBlock: "7px"}} type="text" placeholder="ID Number" />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="to">Phone</Form.Label>
                        <Form.Control style={{paddingBlock: "7px"}} type="tel" placeholder="phone" />
                    </Col>
                </Row>
            <div className='d-flex justify-content-end'>
                <Button className='m-50' style={{width: "10rem", paddingBlock: "10px", }} variant="primary">
                    Submit
                </Button>
            </div>
        </Form>
      </Container>
      </div>
    )
}

export default Reservation