import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Accordion,
  Image,
} from "react-bootstrap";
import hs1 from "../assets/Screenshot 2024-10-06 at 8.41.09 PM.png";
import hs2 from "../assets/Screenshot 2024-10-06 at 8.41.22 PM.png";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById("a");
    element?.scrollIntoView();
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 768);
      setIsStacked(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var body = 7;

  const [isStacked, setIsStacked] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 540); // Check initial screen width

  const toggleAccordion = () => {
    setActiveKey(activeKey === "0" ? null : "0");
  };

  return (
    <>
      <a id="a"></a>

      <div className="resume-page">
        <Container className="pt-5 mt-5">
          <Row className="justify-content-center title">
            <Col md={8}>
              <h1 className="text-center title">My Portfolio</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
              {isScreenLarge && (
                <ButtonGroup className="mb-4">
                  <Button
                    variant={!isStacked ? "primary" : "outline-primary"}
                    onClick={() => setIsStacked(false)}
                  >
                    <i className="bi bi-layout-text-sidebar-reverse"></i>
                  </Button>
                  <Button
                    variant={isStacked ? "primary" : "outline-primary"}
                    onClick={() => setIsStacked(true)}
                  >
                    <i className="bi bi-list"></i>
                  </Button>
                </ButtonGroup>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col
              xs={12}
              className={isStacked ? "col-12 text-center" : "col-md-3"}
            >
              {" "}
              <h1>Water Meter Project</h1>
              <h6 className="text-secondary description">
                Raspberry Pi, Django, React, Gunicorn, nginx, MySQL
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <ul>
                <li>
                  Designed and built a Raspberry Pi hardware sensing solution
                  into my home’s water storage system to collect data.
                </li>
                <li>
                  Designed, developed, and deployed a full stack web application
                  to view the current water level and a history graph.
                </li>
                <li>
                  Predictive water level model allowed better scheduling of
                  water delivery, saving hundreds in expedited delivery fees.
                </li>
              </ul>
              <a
                href="https://aidandegooyer.github.io/water-meter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="view">View Project</Button>
              </a>
              <a
                href="https://github.com/aidandegooyer/water-meter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="view">
                  View Project Source
                </Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col
              xs={12}
              className={isStacked ? "col-12 text-center" : "col-md-3"}
            >
              <h1>Secondhand Marketplace</h1>
              <h6 className="text-secondary description">
                Django, KoboldCPP, Blip2, React
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <ul>
                <li>
                  With my team, developed an inventory software solution
                  intended for thrift and charity stores using the agile process
                </li>
                <li>
                  Created an AI solution to improve pricing efficiency by
                  suggesting a price and product name/description based on an
                  image of the product.
                </li>
              </ul>
              <a
                href="https://github.com/aidandegooyer/evoML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="view">View Project</Button>
              </a>
              <a
                href="https://github.com/aidandegooyer/evoML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="view">
                  View Project Source
                </Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col
              xs={12}
              className={isStacked ? "col-12 text-center" : "col-md-3"}
            >
              <h1>Portfolio Website</h1>
              <h6 className="text-secondary description">React, Bootstrap</h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <ul>
                <li>
                  Designed and developed a responsive site to show off my
                  projects and resume.
                </li>
              </ul>
              <Button className="view" disabled>
                View Project
              </Button>
              <a
                href="https://github.com/aidandegooyer/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="view">
                  View Project Source
                </Button>
              </a>
            </Col>
          </Row>

          <Row className="justify-content-center project">
            <Col
              xs={12}
              className={isStacked ? "col-12 text-center" : "col-md-3"}
            >
              <h1>Evolutionary Machine Learning</h1>
              <h6 className="text-secondary description">
                TensorFlow, CUDA, NumPy, Pandas
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
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
              <a
                href="https://github.com/aidandegooyer/evoML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="view">
                  View Project Source
                </Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col
              xs={12}
              className={isStacked ? "col-12 text-center" : "col-md-3"}
            >
              <h1>HigherSkills</h1>
              <h6 className="text-secondary description">
                Django, OpenAI, MySQL, Figma
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <ul>
                <li>
                  Designed, mocked-up, and developed AI-driven software using
                  OpenAI API and began training an in-house model.
                  <li>
                    Collected usage data to improve the model and product.
                  </li>
                </li>
                <li>
                  Our product came in 2nd place at the Fairfield University
                  StartUp Showcase.
                </li>
              </ul>
              <Button onClick={toggleAccordion} className="view">
                {activeKey === "0" ? "Hide Project" : "View Project"}
              </Button>
              <Button variant="secondary" className="view" disabled>
                View Project Source
              </Button>

              <Accordion activeKey={activeKey}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mock-Ups</Accordion.Header>
                  <Accordion.Body>
                    <Image className="project" rounded fluid src={hs1} />
                    <Image rounded fluid src={hs2} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
