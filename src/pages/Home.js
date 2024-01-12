import { Row, Container, Col } from "react-bootstrap"
import BookingSection from "../components/BookingSection"
import TextCard from "../components/TextCard"
import BlogCard from "../components/BlogCard"
import Showcase from "../components/Showcase"
import CarouselComp from "../components/CarouselComp"

function Home({blogs}) {
    return (
        <div className="page-container">
            <header>
                <Container className="h-100 align-items-center d-flex">
                    <div className="w-50 gap-3 m-0" style={{}}>
                        <p className="text-white fs-2 fw-bold">Plan Your Trip Now</p>
                        <h1 className="title hero-title mb-4">Travel in <span className="fancy">Comfort</span> with Viva express</h1>
                        <h2 className="hero-subtitle">
                            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                        </h2>
                    </div>
                </Container>
            </header>
            <BookingSection/>
            <TextCard />
            <Showcase />
            <Container>
                <Row>
                    {blogs && blogs.slice(0, 6).map(blog => (
                        <Col id={blog.id} sm={6} md={4} lg={4}>
                            <BlogCard post = {blog} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <CarouselComp />
        </div>
    )
}
 
export default Home