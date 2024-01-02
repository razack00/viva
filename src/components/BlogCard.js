
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogCard({post}) {
  return (
    <Card className='mt-5'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + post.img}  height="220"/>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
         {post.body.slice(0, 100)}... 
        </Card.Text>
        <Link to={`/blogs/${post.id}`}> Read More </Link> 
      </Card.Body>
    </Card>    
  );
}

export default BlogCard;