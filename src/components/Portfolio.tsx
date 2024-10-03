import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  var title = 3;
  var body = 7;

  return (
    <div className="resume-page">
      <Container className="pt-5 mt-5">
        <Row className="justify-content-center title">
          <Col md={8}>
            <h1 className="text-center title">My Portfolio</h1>
          </Col>
        </Row>
        <Row className="justify-content-center project">
          <Col xs={12} md={title} className="d-md-block">
            <h1>Water Meter Project</h1>
            <h6 className="text-secondary description">
              Raspberry Pi, Django, React, Gunicorn, nginx
            </h6>
          </Col>
          <Col md={body}>
            <ul>
              <li>
                Designed and built a Raspberry Pi hardware sensing solution into
                my home’s water storage system to collect data.
              </li>
              <li>
                Designed, developed, and deployed a full stack web application
                to view the current water level and a history graph.
              </li>
              <li>
                Predictive water level model allowed better scheduling of water
                delivery, saving hundreds in expedited delivery fees.
              </li>
            </ul>
            <Button className="view">View Project</Button>
            <Button variant="secondary" className="view">
              View Project Source
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center project">
          <Col xs={12} md={title} className="d-md-block">
            <h1>Secondhand Marketplace</h1>
            <h6 className="text-secondary description">
              Django, KoboldCPP, Blip2, React
            </h6>
          </Col>
          <Col md={body}>
            <ul>
              <li>
                With my team, developed an inventory software solution intended
                for thrift and charity stores using the agile process
              </li>
              <li>
                Created an AI solution to improve pricing efficiency by
                suggesting a price and product name/description based on an
                image of the product.
              </li>
            </ul>
            <Button className="view">View Project</Button>
            <Button variant="secondary" className="view">
              View Project Source
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center project">
          <Col xs={12} md={title} className="d-md-block">
            <h1>Evolutionary Machine Learning</h1>
            <h6 className="text-secondary description">
              TensorFlow, CUDA, NumPy, Pandas
            </h6>
          </Col>
          <Col md={body}>
            <ul>
              <li>
                Created, trained, and tested a variety of models (Neural
                Network, Particle Swarm, etc.) on a dataset.
              </li>
              <li>
                Compared different training methods across the course of the
                class including evolutionary strategies with mutation.
              </li>
            </ul>
            <Button className="view" disabled>
              View Project
            </Button>
            <Button variant="secondary" className="view">
              View Project Source
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
