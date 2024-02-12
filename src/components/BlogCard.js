
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogCard({blog}) {
  return (
    <Card className='mt-5'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + blog.img}  height="220"/>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
         {blog.body.slice(0, 100)}... 
        </Card.Text>
        <Link to={`/blogs/${blog.id}`}> Read More </Link> 
      </Card.Body>
    </Card>    
  );
}

export default BlogCard;