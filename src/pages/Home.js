import { Row, Container, Col } from "react-bootstrap"

function Home({blogs}) {
    return (
        <>
            <header>
                <Container className="h-100 align-items-center d-flex">
                    <Col className="w-100 gap-3 m-0">
                        <h1 className="title hero-title">VIVA EXPRESS</h1>
                        <h2 className="w-50 fs-1 fw-light">
                            Travel in Comfort and Style with Viva express 
                        </h2>
                    </Col>
                </Container>
            </header>

        </>
    )
}

export default Home