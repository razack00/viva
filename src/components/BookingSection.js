import { Col, Container, Row, Button, Form, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';

function BookingSection() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false)
    const [availableRoutes, setavailableRoutes] = useState([]);
    const [message, setmessage] = useState([])
    const [schedules, setSchedules] = useState([])
    const [searchData, setSeachData] = useState({
        origin: "",
        destination: "",
        category: "All",
        departure_date: "",
        NumPassengers: 1,
        tripType: "",
        return_date: "",
        return_time: ""
    })
    const today = new Date()
    const formattedToday = today.toISOString().slice(0, 10)
    const navigate = useNavigate()

    // handles input value change
    const handleInputDataChange = (e) => {
        const {name, value} = e.target
        console.log(e.target)
        if (e.target.value === "One Way") {
            setSeachData({...searchData, [name]: value, return_date: ""})
        }else {
            setSeachData({...searchData, [name]: value, })
            // setSeachData({...searchData, [name]: value, return_time: name === "return_date"? "": searchData.return_time})
            // console.log('info:', searchData)
        }
    }

    //Fetches available routes
    const fetchRoutes = async() => {
        try{
          const response = await fetch('http://localhost:8000/routes')

          //Throws a custom error if the status code is not ok   
          if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const data = await response.json()

          //sets available routes to filtered routes 
          setavailableRoutes(filterAvailableRoutes(data))
        } catch (err) {
          alert("We're having trouble fetching available routes. Please check your internet connection and try again.")
        }
    }

    // seperate function to filter routes
    const filterAvailableRoutes = (routes) => {
        return (routes.filter(route => {
            const routeDateTime = new Date (searchData.departure_date + "T" + route.departure_time)
            const currentDateTime = today
            // returning filtered routes
            return (searchData.category === "All" || route.category === searchData.category) && route.origin === searchData.origin && route.destination === searchData.destination && currentDateTime < routeDateTime && route.availableSeats >= searchData.NumPassengers
        }))
    }

    // determines which schedules to show in return date input depending on the departure and return dates
    const determineScheduleList = () => {
        const departureDate = new Date(searchData.departure_date).toDateString()
        const returnDate = new Date(searchData.return_date).toDateString()
        const listOfSchedules = [{time: "04:30"}, {time: "07:30"}, {time: "10:30"}, {time: "13:30"}, {time:  "16:30"}, {time: "19:30"}, {time: "23:58"}]
        if(departureDate === today.toDateString() && returnDate <= departureDate) {
            setSchedules(listOfSchedules.map(schedule => {
                return new Date(searchData.return_date + "T" + schedule.time) > new Date(today.getTime() + (1 * 60 * 60 * 1000))? {...schedule, color: "", disabled: false} : {...schedule, color: "red", disabled: true}
            }))
        }else {
            setSchedules(listOfSchedules.map(schedule => {
                return {...schedule, color: "", disabled: false}}))
        }
    }

    // rerenders when form input state changes
    useEffect(() => {
        fetchRoutes()
        determineScheduleList()
    }, [searchData])

    // handles Modal display
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    // validates form submittion
    const handleSubmit = (event) => {
        event.preventDefault()

        // checks if any input is empty depending on trip type
        const isEmpty = Object.entries(searchData)
        .some(([key, value]) => ((key !== "return_date" && key !== "return_time") || searchData.tripType !== "One Way") && value === "")
        setValidated(true)

        const DepartureDate = new Date(searchData.departure_date)
        const ReturnDate = new Date(searchData.return_date)

        if(isEmpty){
            setmessage("Please make sure all fields are filled ")
        }else if(searchData.origin === searchData.destination) {
            setmessage("Invalid Route. Choose a valid route")
        }else if(searchData.tripType === "Round Trip" && DepartureDate > ReturnDate) {
            setmessage("Invalid date. Return date most be a future date")
        }else if(availableRoutes.length > 0) {
            // displays modal and reset message
            handleShow()
            setmessage([])
        }else{
            setmessage("Sorry, No Bus available for this route.") 
        }
    }

    return (
    <Container className='bg-white rounded-4 px-5 py-4 shadow' style={{marginTop: "-85px"}}>
        <div className='text-danger'>{message}</div>
        <Form noValidate validated = {validated} className='d-flex flex-column justify-content-center gap-3  py-4' onSubmit={handleSubmit}>
            <Row className='d-flex'>
                <Col sm className='pt-3'>
                    <Row>
                        <Form.Group as={Col} controlId="origin">
                            <Form.Label>Origin:</Form.Label>
                            <Form.Select 
                                name='origin'
                                required
                                onChange={handleInputDataChange}
                                type='text'>
                                    <option value={""} hidden>Enter origin</option>
                                    <option value="Yaounde">Yaounde</option>
                                    <option value="Douala">Douala</option>
                            </Form.Select>
                        </Form.Group>                
                        <Form.Group as={Col} controlId="destination">
                            <Form.Label>Destination:</Form.Label>
                            <Form.Select
                                name='destination' 
                                onChange={handleInputDataChange}
                                required
                                type="text"
                                >
                                    <option value={""} hidden >Enter destination</option>
                                    <option value="Yaounde">Yaounde</option>
                                    <option value="Douala">Douala</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Col>
                <Col sm className='pt-3'>
                    <Row>
                        <Form.Group as={Col} controlId="category">
                            <Form.Label>Category:</Form.Label>
                            <Form.Select 
                            name='category'
                            required
                            type="text" 
                            onChange={handleInputDataChange}>
                                <option value="" hidden>select category</option>
                                <option value="All">All</option>
                                <option value="Economic">Economic</option>
                                <option value="First Class">First Class</option>
                                <option value="Classic">Classic</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="departureDate">
                            <Form.Label>Departure Date:</Form.Label>
                            <Form.Control 
                            className='fs-5 text-lightgrey' 
                            style={{paddingBlock: "4.92px",}} 
                            type="date"
                            required
                            onChange={handleInputDataChange}
                            min = {formattedToday} 
                            name='departure_date'/>
                        </Form.Group>
                    </Row>
                </Col>
            </Row>
            <Row className='d-flex w-100 m-0 g-0 gap-4'>
                <Col sm className='d-flex'>
                    <Row className='g-0 gap-4 w-100'>
                        <Form.Group as={Col} controlId="NumPassengers">
                            <Form.Label>No. Passengers:</Form.Label>
                            <Form.Control 
                                defaultValue={1}
                                required  
                                className='fs-5' 
                                type="number"
                                onChange={handleInputDataChange} 
                                name='NumPassengers' />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="tripType">
                            <Form.Label>Trip Type:</Form.Label>
                            <Form.Select 
                                name = "tripType"
                                required
                                onChange={handleInputDataChange}
                                type='text'>
                                    <option value={""} hidden>Choose Trip Type</option>
                                    <option value="One Way">One Way</option>
                                    <option value="Round Trip">Round Trip</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Col>
                <Col>
                    <Row className='g-0 gap-0'>
                        <Col md={8}>
                        {searchData.tripType === "Round Trip" && searchData.departure_date !== "" && <Row>
                                <Col >
                                    <Form.Label htmlFor="return-date">Return Date:</Form.Label>
                                    <Form.Control 
                                    required
                                    type="date"
                                    onChange={handleInputDataChange}
                                    min = {formattedToday} 
                                    name='return_date'/>
                                </Col>
                                {searchData.return_date !== "" && <Form.Group as={Col} controlId='returnTime'>
                                    <Form.Label>Return Time</Form.Label>
                                    <Form.Select 
                                    name='return_time' 
                                    required
                                    onChange={handleInputDataChange} 
                                    id='from'>
                                        <option hidden value="">Select return time</option>
                                        {schedules.map(schedule => (
                                            <option disabled = {schedule.disabled} value={schedule.time} style={schedule}> {schedule.time} </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>}
                            </Row>}
                        </Col>
                        <Col md={4}>
                            <div className='py-3'></div>
                            <div className='w-100 d-flex justify-content-end'>
                            <Button className='ms-3' type='submit' style={{width: "150px", paddingBlock: "7.5px", background: "#0E9CD8"}} variant="primary">
                                Search
                            </Button>
                            </div>
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
                                <div>{searchData.departure_date} at {route.departure_time}</div>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Bus Number: {route.id}</li>
                                    <li>Category: {route.category}</li>
                                </ul>
                            </Col>
                            <Col>
                                <li>Price: {route.price}</li>
                                {/* a choose btn which takes users to reservation page along with data using useNavigation() */}
                                <Button 
                                    style={{width: "120px"}} 
                                    variant="primary"
                                    onClick={() => navigate('/reservationdetails', { state: { searchData, selectedRoute: route} })}
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