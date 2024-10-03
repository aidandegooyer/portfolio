import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById("a");
    element?.scrollIntoView();
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth > 768);
      setIsStacked(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var body = 7;

  const [isStacked, setIsStacked] = useState(false);

  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 540); // Check initial screen width

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
            <Col xs={12} className={isStacked ? "col-12 test" : "col-md-3"}>
              {" "}
              <h1>Water Meter Project</h1>
              <h6 className="text-secondary description">
                Raspberry Pi, Django, React, Gunicorn, nginx
              </h6>
            </Col>
            <Col md={isStacked ? "9" : body}>
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
              <Button className="view">View Project</Button>
              <Button variant="secondary" className="view">
                View Project Source
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col xs={12} className={isStacked ? "col-12 test" : "col-md-3"}>
              <h1>Secondhand Marketplace</h1>
              <h6 className="text-secondary description">
                Django, KoboldCPP, Blip2, React
              </h6>
            </Col>
            <Col md={isStacked ? "9" : body}>
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
              <Button className="view">View Project</Button>
              <Button variant="secondary" className="view">
                View Project Source
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center project">
            <Col xs={12} className={isStacked ? "col-12 test" : "col-md-3"}>
              <h1>Portfolio Website</h1>
              <h6 className="text-secondary description">React, Bootstrap</h6>
            </Col>
            <Col md={isStacked ? "9" : body}>
              <ul>
                <li>
                  Designed and developed a responsive site to show off my
                  projects and resume.
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

          <Row className="justify-content-center project">
            <Col xs={12} className={isStacked ? "col-12 test" : "col-md-3"}>
              <h1>Evolutionary Machine Learning</h1>
              <h6 className="text-secondary description">
                TensorFlow, CUDA, NumPy, Pandas
              </h6>
            </Col>
            <Col md={isStacked ? "9" : body}>
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
          <Row className="justify-content-center project">
            <Col xs={12} className={isStacked ? "col-12 test" : "col-md-3"}>
              <h1>HigherSkills</h1>
              <h6 className="text-secondary description">
                Django, OpenAI, MySQL, Figma
              </h6>
            </Col>
            <Col md={isStacked ? "9" : body}>
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
              <Button className="view">View Project</Button>
              <Button variant="secondary" className="view" disabled>
                View Project Source
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
