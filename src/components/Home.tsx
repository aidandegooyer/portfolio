import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import headshot from "../assets/headshot.jpg";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Container className="pt-5 mt-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={3} className="d-none d-md-block">
            <Image
              src={headshot}
              roundedCircle
              fluid
              className="custom-headshot"
            />
          </Col>
          <Col md={5}>
            <h1>About me:</h1>
            <p>
              I am a fourth-year student pursuing degrees in Computer Science
              and Economics. I possess excellent problem-solving skills and
              strong attention to detail. I am driven by the prospect of
              applying cutting-edge technologies to create innovative solutions,
              and I am eager to bring my perspective and talents to a
              forward-thinking team.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} className="text-center">
            <LinkContainer to="/resume">
              <Button size="lg" className="button1">
                View Resume
              </Button>
            </LinkContainer>
          </Col>
          <Col md={4} className="text-center">
            <LinkContainer to="/portfolio">
              <Button size="lg" className="button1">
                View Portfolio
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
