import React, { useState } from "react";
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
import "./FAQ.scss";
import { ITopic, Topic } from "./Topic";
import { TopicsList } from "./topics";
import { PopularQuestions } from "./PopularQuestions";

function FAQ() {
  const topics: ITopic[] = TopicsList;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTopics, setFilteredTopics] = useState(topics);

  const inputSearchChanged = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered =
      topics.filter(
        topic =>
          (topic.questionsFiltered = topic.questions.filter(
            question =>
              JSON.stringify(question)
                .toLowerCase()
                .indexOf(term) >= 0
          ))
      ) || [];

    setFilteredTopics(filtered);
  };

  return (
    <React.Fragment>
      <div className="hero">
        <img src="hero_bg.png" className="bg" alt="background" />
        <Container className="h-100">
          <Row className="h-100">
            <Col md={12} className="d-flex flex-column justify-content-center">
              <h1 className="mb-3 ">How can we help?</h1>

              <Form.Group controlId="formSearch">
                <InputGroup className="mb-3 searchInput">
                  <FormControl
                    placeholder="Let us help you to find your answer"
                    aria-label="Search"
                    aria-describedby="basic-search"
                    onChange={inputSearchChanged}
                    value={searchTerm}
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* <Row>
          <Col>
            <h5 className="my-3 h5">Popular questions</h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <PopularQuestions />
          </Col>
        </Row> */}

        <Row className="mt-4">
          
          <Col md={4} className="topics-nav mb-4">
            <Card>
              <Nav className="flex-md-column flex-xs-row">
                {topics.map(topic => (
                  <Nav.Link href={`#${topic.id}`} key={topic.id}>
                    {topic.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Card>
          </Col>
          <Col
            md={8}
            className="topics d-flex flex-column justify-content-center"
          >
            {filteredTopics.length > 0 &&
              filteredTopics.map(topic => (
                <Topic
                  id={topic.id}
                  key={topic.id}
                  title={topic.title}
                  questions={topic.questionsFiltered || topic.questions}
                />
              ))}
            {filteredTopics.length === 0 && (
              <span className="text-center">
                Oh snap! We didn't find an answer to that. What about searching
                for something else?
              </span>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FAQ;
