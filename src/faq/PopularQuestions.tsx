import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Row,
  CardDeck,
  ListGroup
} from "react-bootstrap";

export const PopularQuestions = () => {
  return (
    <React.Fragment>
      <CardDeck className="popular mb-4">
        <Card className="card-image-left">
          <Card.Img src="payment.svg" />
          <Card.Title>Payments</Card.Title>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item href="#already_paid_persistent" as="a">
                How to Unblock
              </ListGroup.Item>
              <ListGroup.Item href="#test1" as="a">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="card-image-left">
          <Card.Img src="gears.svg" />
          <Card.Title>Configuration</Card.Title>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item href="#test1" as="a">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item href="#test1" as="a">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardDeck>
    </React.Fragment>
  );
};
