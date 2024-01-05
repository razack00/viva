import { Col, Container, Row, Button, Form, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { getDefaultNormalizer } from '@testing-library/react';

function BookingSection() {
    const [show, setShow] = useState(false);
    const [availableRoutes, setavailableRoutes] = useState([]);
    const [message, setmessage] = useState([])
    const [formData, setFormData] = useState({
        origin: "",
        destination: "",
        category: "All",
        departure_date: "",
        NumPassengers: "",
        tripType: "",
        returnDate: ""
    })

    const today = new Date()
    const formattedToday = today.toISOString().slice(0, 10)

    const navigate = useNavigate()

    //Fetching available routes
    const fetchRoutes = async() => {
        try{
          const response = await fetch('http://localhost:8000/Routes')

          //Throwing a custom error if the status code is not ok(200)   
          if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const data = await response.json()

          //filtering available routes 
          setavailableRoutes(data.filter(route => {
            if(formData.category == "All") {
                return route.origin === formData.origin && route.destination === formData.destination
            }
                return route.origin === formData.origin && route.destination === formData.destination && formData.category === route.category
            }))
          console.log(availableRoutes)
        } catch (err) {
          console.log(err)
        }
    }
    
    // rerangering when from input state changes
    useEffect(() => {
        fetchRoutes()
        console.log('render')
        console.log('info:', formData)

    }, [formData])      
 

    // handling Modal display
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    // validating form submittion
    const handleSubmit = (event) => {
        event.preventDefault()
        const isEmpty = Object.values(formData).some(value => value === "")
        console.log("is empty", isEmpty)
        if(isEmpty){
            setmessage("Please fill in all fields")
        }else if(formData.origin === formData.destination) {
            setmessage("Invalid Route. Choose a valid route")
        }else if(availableRoutes.length > 0) {
            handleShow()
            setmessage([])
        }else{
            setmessage("No bus for choosen Route") 
        }
    }

    return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-85px"}}>
        <Form className='d-flex flex-column justify-content-center gap-5 py-4' onSubmit={handleSubmit}>
            <div className='text-danger'>{message}</div>
            <Row className='d-flex'>
                <Col>
                    <Form.Label htmlFor="from">Origin:</Form.Label>
                    <Form.Select 
                        onChange={e => setFormData({...formData, origin: e.target.value})}
                        value={formData.origin}
                        id='from'>
                            <option>Enter origin</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="to">Destination:</Form.Label>
                    <Form.Select 
                        onChange={e => setFormData({...formData, destination: e.target.value})}
                        value={formData.destination}
                        >
                            <option>Enter destination</option>
                            <option value="Yaounde">Yaounde</option>
                            <option value="Douala">Douala</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="type">Category:</Form.Label>
                    <Form.Select name='type' onChange={e => setFormData({ ...formData, category: e.target.value })}>
                        <option>All</option>
                        <option value="Economic">Economic</option>
                        <option value="First Class">First Class</option>
                        <option value="Classic">Classic</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label htmlFor="departure-date">Departure Date:</Form.Label>
                    <Form.Control 
                    className='fs-5' 
                    style={{paddingBlock: "4.92px",}} 
                    type="date"
                    onChange={e => setFormData({...formData, departure_date: e.target.value})}
                    min = {formattedToday} 
                    name='departure-date'/>
                </Col>
            </Row>
            <Row className='d-flex w-100 m-0 g-0 gap-4'>
                <Col className='d-flex'>
                    <Row className='g-0 gap-4 w-100'>
                        <Col>
                            <Form.Label htmlFor="date">No. of Passengers:</Form.Label>
                            <Form.Control 
                                defaultValue={0}  
                                className='fs-5' 
                                type="number"
                                onChange={e => setFormData({ ...formData, NumPassengers: e.target.value })} 
                                name='date' 
                                />
                        </Col>
                        <Col>
                            <Form.Label>Trip Type</Form.Label>
                            <Form.Group className='d-flex align-self-end py-2 justify-content-around gap-2'>
                                <Form.Check
                                    inline
                                    type="radio"
                                    id="radio"
                                    onChange={ e => setFormData({ ...formData, tripType: e.target.value, returnDate: "" }) }
                                    label="One Way"
                                    value= "One Way"
                                    name = "One"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    id="radio"
                                    onChange={ e => setFormData({ ...formData, tripType: e.target.value })}
                                    label="Round Trip"
                                    value= "Round Trip"
                                    name = "One"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className='g-0 gap-4'>
                        {formData.tripType === "Round Trip" &&  <Col>
                            <Form.Label htmlFor="return-date">return Date:</Form.Label>
                            <Form.Control 
                            className='fs-5' 
                            style={{paddingBlock: "4.92px",}} 
                            type="date"
                            onChange={e => setFormData({...formData, returnDate: e.target.value})}
                            min = {formattedToday} 
                            name='return-date'/>
                        </Col>}
                        <Col className='bg-white'>
                            <div className='p-4'></div>
                            <Button className='mx-auto' type='submit' style={{width: "248px", paddingBlock: "8.3px", margin: '0'}} variant="primary">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* pop up to the list of available routes and buses */}
            <Modal className='modal-lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>Available buses for your Search
                </Modal.Header>
                <Modal.Body className='px-5 py-4'>
                    {/* looping through the list of available routes and displaying */}
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
                                {/* a choose btn which takes users to reservation page along with data using useNavigation() */}
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