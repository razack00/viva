import {Form, Container, Button} from 'react-bootstrap/'

function ContactForm() {
  return (
    <>
    <Container className='py-5'>
    <Form className='w-50 m-auto'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
        <Form.Control style={{borderColor: "#989898"}} type="text" placeholder="Your name here" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control style={{borderColor: "#989898"}} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Write us a Message</Form.Label>
      <Form.Control style={{borderColor: "#989898"}} as="textarea" rows={3} />
    </Form.Group>
    <Button className='btn-colored w-100' style={{}} type="submit">Submit</Button>
  </Form>
  </Container></>
  );
}

export default ContactForm;