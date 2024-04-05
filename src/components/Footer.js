import { Row, Col, Container} from 'react-bootstrap'

function Footer() {
    return (
    <div className='bg-dark py-5 footer mt-5'  data-bs-theme="dark">
        <Container className='text-white' data-bs-theme="dark">
            <Row>
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Bus Travel</h2>
                    <ul className='p-0'>
                        <li><a href='#home'>All Buses</a></li>
                        <li><a href='#home'>All Bus routes</a></li>
                        <li><a href='#home'>Discounts and Promotions</a></li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Quick Links</h2>
                    <ul className='p-0'>
                        <li><a href='#home'>Services</a></li>
                        <li><a href='#home'>Rent a Bus</a></li>
                        <li><a href='#home'>Reservation</a></li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Experience Viva</h2>
                    <ul className='p-0'>
                        <li><a href='#home'>About Us</a></li>
                        <li><a href='#home'>Our Organisation</a></li>
                        <li><a href='#home'>Media</a></li>
                        <li><a href='#home'>Jobs and Careers</a></li>
                    </ul>
                </Col >
                <Col className='text-left pt-4' sm={6} md={4} lg={3}>
                    <h2>Customer Service</h2>
                    <ul className='p-0'>
                        <li><a href='#home'>Help</a></li>
                        <li><a href='#home'>Manage My Booking</a></li>
                        <li><a href='#home'>Support</a></li>
                    </ul>
                </Col >
            </Row>
            <div className='text-center pt-5'>Copyright 2023 @Razack</div>
        </Container>
    </div>
  );
}

export default Footer;