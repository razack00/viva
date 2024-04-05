import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import BookingSection from "../components/BookingSection";
import RoutesAndPrices from "../components/RoutesAndPrices";

function Reservation() {
  return (
    <Container style={{marginTop: "80px"}}>
        <h1 className="text-center">Reservation</h1>
        <RoutesAndPrices />
        <Row style={{paddingBlock: "60px"}}>
            <Col className="pt-5" md={12}>
            <BookingSection />
            </Col>
        </Row>
    </Container>
  );
}

export default Reservation;
