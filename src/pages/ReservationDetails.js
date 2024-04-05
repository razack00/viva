import { useEffect, useState } from 'react';
import { ListGroup, Row, Col, Form, Container, Modal } from 'react-bootstrap/';
import { useLocation } from 'react-router-dom';
import Btn from '../components/Btn';

const ReservationDetails = () => {
    const {searchData, selectedRoute} = useLocation().state
    const [TravelPeriod, setTravelPeriod] = useState()
    const [showFeedback, setShowFeedback] = useState(false)   
    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false)
    const [errors, setErrors] = useState({})
    const [passengers, setPassengers] = useState(Array(parseInt(searchData.NumPassengers)).fill({
        "title" : "",
        "firstName": "",
        "lastName": "",
        "idNumber": "",
        "phone": ""
    }))
    const [formattedDepartureDateTime, setFormattedDepartureDateTime] = useState()
    const [formattedArrivalDateTime, setFormattedArrivalDateTime] = useState()

    const handleInputDataChange = (e, index) => {
        setPassengers(prevPassengers => prevPassengers.map((passenger, i) => i === index ? {...passenger, [e.target.name]: e.target.value} : passenger))
    }

    useEffect(()=> {
        const handleArrivalPeriod = () => {
            // adding traveller departure date to actual date and time of travel and Converting to Date objects
            const DepartureDateTime = new Date(searchData.departure_date + "T" + selectedRoute.departure_time)
    
            // adding the travel duration to the departure time
            const ArrivalDateTime = new Date(DepartureDateTime.getTime() + (selectedRoute.travel_duration * 60 * 60 * 1000))
    
            // Determine travel period
            setTravelPeriod(ArrivalDateTime.getDate() > DepartureDateTime.getDate()? "Overnight":"Day Trip" )
    
            setFormattedDepartureDateTime(DepartureDateTime.toLocaleDateString([], { hour: 'numeric', minute: '2-digit'}))
            setFormattedArrivalDateTime(ArrivalDateTime.toLocaleDateString([], { hour: 'numeric', minute: '2-digit'}))
        }
        handleArrivalPeriod()
    },[selectedRoute, searchData])

    // Checking if arrival date is past the departure date (overnight travel)
    useEffect(() => {
        const validateForm = () => {
            const newErrors = {}
            // performing validation checks and storing errors
            passengers.forEach(passenger => {
                if (passenger.title === "") {
                    newErrors.title = 'Please select a title'
                }
                if (passenger.firstName.length < 2 || passenger.firstName.length > 20) {
                    newErrors.firstName= 'Last name must be between 2 and 20 characters.'
                }
                if (passenger.lastName.length < 2 || passenger.lastName.length > 20) {
                    newErrors.lastName = 'Last name must be between 2 and 20 characters.'
                }
                if (passenger.idNumber === '') {
                    newErrors.idNumber='ID number is required.' 
                }
                if (passenger.phone.length !== 9 || !/[0-9]{9}/.test(passenger.phone)) {
                    newErrors.phone = 'Phone number must be 9 digits.'
                }
            })
            setErrors(newErrors)
        };
        validateForm()
    }, [passengers])

    // function to handle modal visibility
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            // Submiting the form data
            handleShow()
            setShowFeedback(false);
            console.log("all filled in") 
        } else {
            console.log("everything not filled")
            setShowFeedback(true);
        }

        setValidated(true) 
    }
    return (
        <div className='page-container'>
        <Container className='py-5'>
            <div className='w-75 text-secondary mx-auto d-flex'><h3 className='mb-0 py-2 px-4 text-white' style={{background: "#022546"}}>Passenger(s) Information</h3></div>
            <div className='w-75 m-auto text-secondary p-5' style={{background: "#022546"}}>
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
                                    <ListGroup.Item className='border-0 numpas'>{searchData.NumPassengers}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{searchData.tripType}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{formattedDepartureDateTime}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{formattedArrivalDateTime}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>{TravelPeriod}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row> 
                </Row>
                <Form noValidate validated ={validated} onSubmit={handleSubmit} className='pt-5'>
                    <h3 className='text-white'>Personal Details</h3>
                    {passengers.map((passenger, index) => (
                    <div key={index} className='mt-5 reservationInputs' style={{marginBottom: "6rem"}}>
                        <div>
                        <h3 className='text-white p-2' style={{background: "#032c53"}}>Passenger {index + 1}</h3>
                            <Row>
                                <Form.Group as={Col} controlId='title'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Select 
                                    name='title' 
                                    onChange={(e) => handleInputDataChange(e, index)}
                                    id='from'
                                    minLength={2}
                                    maxLength={20}
                                    required
                                    >
                                        <option value="" hidden >select title</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                    </Form.Select>
                                    {showFeedback && errors.firstName && (
                                    <Form.Control.Feedback type='invalid'>{errors.title}
                                    </Form.Control.Feedback>
                                    )}
                                </Form.Group>
                                <Form.Group as={Col} controlId='firstName'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control   
                                    type="text" 
                                    required
                                    name='firstName'
                                    placeholder="enter your first name"
                                    onChange={(e) => handleInputDataChange(e, index)}
                                    minLength={2}
                                    maxLength={20} />
                                    { showFeedback && errors.firstName && <Form.Control.Feedback type='invalid'>{errors.firstName}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                                <Form.Group as={Col} controlId='lastName'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        name='lastName'
                                        type="text"
                                        required
                                        onChange={(e) => handleInputDataChange(e, index)}
                                        minLength={2}
                                        maxLength={20}
                                        />
                                    {showFeedback && errors.lastName && (
                                    <Form.Control.Feedback type="invalid">{errors.lastName}
                                    </Form.Control.Feedback>
                                    )}
                                </Form.Group>
                            </Row>
                        
                            <Row className='py-4'>
                                <Form.Group as={Col} controlId='idNumber'>
                                    <Form.Label>ID Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='idNumber'
                                        required
                                        value={passenger.idNumber}
                                        onChange={(e) => handleInputDataChange(e, index)}
                                        // required
                                    />
                                    {showFeedback && errors.idNumber && (
                                        <Form.Control.Feedback type="invalid">{errors.idNumber}</Form.Control.Feedback>
                                    )}
                                </Form.Group>
                                <Form.Group as={Col} controlId='phone'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                    type="tel"
                                    name='phone'
                                    required
                                    value={passenger.phone}
                                    onChange={(e) => handleInputDataChange(e, index)}
                                    pattern="[0-9]{9}"
                                    />
                                    {showFeedback && errors.phone && (
                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                    )}
                                </Form.Group>
                            </Row>
                        </div>
                    </div>
                    ))}
                    <Btn text= {"Submit"} />
                </Form>
            </div>
            <Modal className='modal-lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>Checkout
                    </Modal.Header>
                    <Modal.Body className='px-5 py-4'>
                    {passengers.map(passenger => (
                    <Row key={passenger.idNumber} className='mb-5'>
                        <Row>
                            <Col>
                                <ListGroup className='list-group-flush border-end'>
                                    <ListGroup.Item className='border-0'>Name: {`${passenger.title} ${passenger.firstName} ${passenger.lastName}`}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>ID Card Number: {passenger.idNumber}</ListGroup.Item>
                                    <ListGroup.Item className='border-0'>Phone Number: {passenger.phone}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
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
                                            <ListGroup.Item className='border-0'>Trip Type</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>Departure Date & time</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>Arrival Date & Time</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>Travel Period</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                    <ListGroup className='list-group-flush'>
                                            <ListGroup.Item className='border-0'>{searchData.tripType}</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>{formattedDepartureDateTime}</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>{formattedArrivalDateTime}</ListGroup.Item>
                                            <ListGroup.Item className='border-0'>{TravelPeriod}</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                    ))}
                    <Btn text={"Checkout"}/>
                    </Modal.Body>
                </Modal>
        </Container>
    </div>
    )
}

export default ReservationDetails