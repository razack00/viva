import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <Container className="py-5 bg-light rounded shadow">
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="px-5">
            <h2 className="display-4 fw-bold">Contact Us</h2>
            <p className="lead mb-5">
              Have questions or need assistance? Feel free to reach out using the
              form below or through any of the methods listed. We're happy to help!
            </p>
            <Form className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" className="py-2 rounded-pill shadow-sm" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control type="email" placeholder="johndoe@example.com" className="py-2 rounded-pill shadow-sm" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Subject</Form.Label>
                <Form.Control type="text" placeholder="Inquiry about..." className="py-2 rounded-pill shadow-sm" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message here..." className="rounded shadow-sm" />
              </Form.Group>
              <Button variant="primary" type="submit" className=" p-4 rounded-pill shadow-sm">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6} style={{background: "#0E9CD8"}} className="text-white d-flex align-items-center justify-content-center">
          <div className="px-5">
            <h2>Additional Information</h2>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item d-flex align-items-center">
                <FaMapMarkerAlt className="me-3" /> Headquarters: 123 Main Street, Your City, Region ZIP
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaPhoneAlt className="me-3" /> Phone: (237) 000 000 000
              </li>
              <li className="list-group-item d-flex align-items-center">
                <FaEnvelope className="me-3" /> Email: info@yourbusagency.com
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
