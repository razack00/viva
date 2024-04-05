import { Row, Container, Col } from "react-bootstrap"
import BlogCard from "../components/BlogCard"
import Showcase from "../components/Showcase"
import { useData } from "../context/DataContext"

function Blog() {
    const {blogs, isPending, err} = useData()
    return (
        <>
            {isPending && <div>Loading...</div>}
            {err && <div>{err}</div>}
            <div className="page-container">
                <Container>
                    <h1 className="py-5 text-center">OUR BLOGS</h1>
                    <Row className="py-5">
                        {blogs && blogs.map(blog => (
                            <Col key={blog.id} id={blog.id} sm={6} md={4} lg={4}>
                                <BlogCard blog = {blog} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Showcase />
            </div>
        </>
    )
}

export default Blog