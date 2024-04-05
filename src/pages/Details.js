import { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function Details() {
  const { id } = useParams();
  const {blogs, isPending, err} = useData()
  const [blog, setblog] = useState()

  useEffect(() => {
    const matchedBlog = blogs && blogs.find((blog) => {
      return blog.id === parseInt(id)
    });
    setblog(matchedBlog)
  },[blogs, id])

  return ( 
    <div className="page-container">
      <Container>
        <h1 className="py-5 text-center">blog</h1>
        {isPending && <div>Loading...</div>}
        {err && <div>{err}</div>}
        {blog && <Col>
          <h2 className="pb-5 fs-1">{blog.title}</h2>
          <p className="pb-5">{blog.body}</p>
        </Col>}
      </Container>
    </div>
  );
}

export default Details;