import { Container, Col } from "react-bootstrap";
import data from "../data";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const post = data.find((d) => {
    console.log(d.id === parseInt(id))
    return d.id === parseInt(id)
});

  if (!post) {
    return <h3 className="text-center">Post not found</h3>; // Handle missing post
  }

  return (
    <div className="page-container">
      <Container>
        <h1 className="py-5 text-center">blog</h1>
        <Col>
          <h2 className="pb-5 fs-1">{post.title}</h2>
          <p className="pb-5">{post.body}</p>
        </Col>
      </Container>
    </div>
  );
}

export default Details;