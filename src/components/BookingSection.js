import { Col, Container, Row, Button, Form, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { getDefaultNormalizer } from '@testing-library/react';

function BookingSection() {
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [show, setShow] = useState(false);
    const [availableRoutes, setavailableRoutes] = useState([]);
    const [message, setmessage] = useState([])
    // const [route, setRoute] = useState([])
    const [formData, setFormData] = useState({
        category: "",
        NumPassengers: "",
        tripType: "" 
    })

    const navigate = useNavigate()

    //Fetching available routes
    const fetchRoutes = async() => {
        try{
          const response = await fetch('http://localhost:8000/Routes')
          if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const data = await response.json()

          //filtering available routes routes
          setavailableRoutes(data.filter(route => route.origin === origin && route.destination === destination))
          console.log(availableRoutes)
        } catch (err) {
          console.log(err)
        }
    }
    
    useEffect(() => {
        fetchRoutes()
        console.log('render')
        console.log('info:', formData)

    }, [origin, destination, formData])

    // updating states ( origin and destination)
    const onOriginChange = (e) => {
        setOrigin(e.target.value)
    }
    const onDestinationChange = (e) => {
        setDestination(e.target.value)
    }
    const onCategoryChange = (e) => {
        setFormData({ ...formData, category: e.target.value });
    }
    const onNumPassengerChange = (e) => {
        setFormData({ ...formData, NumPassengers: e.target.value });
    }
    const onTripTypeChange = (e) => {
        setFormData({ ...formData, tripType: e.target.value });
    }

    // handling Modal display
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    // validating form submittion
    const handleSubmit = (event) => {
        event.preventDefault()
        if(availableRoutes.length > 0) {
            handleShow()
            setmessage([])
        }else if(origin === destination) {
            setmessage("Invalid Route. Choose a valid route")
        }else {
            setmessage("No bus for choosen Route") 
        }
    }

    return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-85px"}}>
        <Form className='d-flex flex-column gap-5 py-4' onSubmit={handleSubmit}>
            <div className='text-danger'>{message}</div>
            <Row className='d-flex'>
                <Col>
                    <Form.Label htmlFor="from">Origin:</Form.Label>
                    <Form.Select 
                        onChange={onOriginChange}
                        value={origin}
                        id='from'>
                            <option>Enter origin</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="to">Destination:</Form.Label>
                    <Form.Select 
                        onChange={onDestinationChange}
                        value={destination}
                        >
                            <option>Enter destination</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="type">Type:</Form.Label>
                    <Form.Select name='type' onChange={onCategoryChange}>
                        <option>Select Class</option>
                        <option value="Economic">Economic</option>
                        <option value="First Class">First Class</option>
                        <option value="Classic">Classic</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="date">Date of Departure:</Form.Label>
                    <Form.Control 
                    className='fs-5' 
                    style={{paddingBlock: "4.92px",}} 
                    type="date" 
                    name='date'/>
                </Col>
            </Row>
            <Row className='d-flex g-0 justify-content-between w-100 gap-5 m-0'>
                <div className='d-flex gap-5' style={{width: "45.5%"}}>
                    <Col>
                        <Form.Label htmlFor="date">No. of Passengers:</Form.Label>
                        <Form.Control 
                            defaultValue={0}  
                            className='fs-5' 
                            type="number"
                            onChange={onNumPassengerChange} 
                            name='date' 
                            style={{paddingBlock: "4px"}}/>
                    </Col>
                    <Form.Group className='align-self-end'>
                        <Form.Check
                            inline
                            type="radio"
                            id="radio"
                            onChange={onTripTypeChange}
                            label="One Way"
                            value= "One Way"
                            name = "One"
                           />
                        <Form.Check
                            inline
                            type="radio"
                            id="radio"
                            onChange={onTripTypeChange}
                            label="Round Trip"
                            value= "Round Trip"
                            name = "One"
                        />
                    </Form.Group>
                </div>
                <div className='p-0 text-center' style={{width: "23.6%",}}>
                    <Button type='submit' style={{width: "100%", paddingBlock: "10px", margin: '0'}} variant="primary">
                        Search
                    </Button>
                </div>
            </Row>
            <Modal className='modal-lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>Available buses for your Search
                </Modal.Header>
                <Modal.Body className='px-5 py-4'>
                    {availableRoutes.map(route => (
                        <Row key={route.id} className='border py-3'>
                            <Col> 
                                <div>{route.origin} - {route.destination}</div>
                                <div>{route.departure_time}</div>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Bus Number: {route.id}</li>
                                    <li>{route.type}</li>
                                </ul>
                            </Col>
                            <Col>
                                <li>Price: {route.price}</li>
                                <Button 
                                    style={{width: "120px"}} 
                                    variant="primary"
                                    onClick={() => navigate('/reservation', { state: { formData, selectedRoute: route} })}
                                >Choose</Button>
                            </Col>
                        </Row>
                    ))
                    }
                </Modal.Body>
            </Modal>
        </Form>
    </Container>
  )
}

export default BookingSection;