import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
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
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 540); // Check initial screen width

  return (
    <>
      <a id="a"></a>
      <div style={{ minHeight: "40px" }} />

      <div className="resume-page">
        <Container className="pt-4 mt-0">
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
              <h1>College Counter</h1>
              <h6
                className="text-secondary description"
                style={{ marginBottom: "4px" }}
              >
                <strong>Frontend:</strong> React, Bootstrap
              </h6>
              <h6 className="text-secondary description">
                <strong>Backend:</strong> Flask, PostgreSQL, Docker, Google
                Cloud
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <p>
                College Counter is a web application that allows anyone to
                follow collegiate counter-strike matches. Users can view
                upcoming matches, past matches, and team statistics.{" "}
              </p>

              <ul>
                <li>
                  Designed a ranking algorithm to rank teams based on their
                  performance in matches using the ELO formula.
                </li>
                <li>
                  Designed and created a responsive frontend for users to
                  interact with the data.
                </li>
                <li>
                  Created a backend API to interact with the database and
                  frontend.
                </li>
                <li>Deployed the website to Google Cloud using Docker</li>
              </ul>
              <a
                href="https://collegecounter.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="view">View Project</Button>
              </a>
              <a
                href="https://github.com/aidandegooyer/CollegeCounter"
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
              <h1>Higher Skills</h1>
              <h6
                className="text-secondary description"
                style={{ marginBottom: "4px" }}
              >
                <strong>Frontend:</strong> Figma, React, React-Bootstrap
              </h6>
              <h6 className="text-secondary description">
                <strong>Backend:</strong> Asyncio-Http, Vosk, WebRTC, Django,
                LLaMa, Firebase
              </h6>
              <h6 className="text-secondary description">
                <strong>Documentation:</strong> Obsidian, Quartz,
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <p>
                Higher Skills is a cutting-edge training platform dedicated to
                equipping individuals with the tools they need to excel in
                today's competitive job market. Through utilizing a
                self-assessment feature enhanced with speech analysis, body
                language detection, and gamification elements, Higher Skills
                aims to assess, teach, and refine soft skills through AI-guided
                simulations and interview preparation.{" "}
              </p>

              <ul>
                <li>
                  Designed and developed AI-driven analysis software using
                  Meta's LLaMa model and began the fine-tuning process.
                </li>
                <li>
                  Designed and created a responsive and intuitive frontend for
                  users to interact with this AI-driven simulation.
                </li>
                <li>
                  Wrote extensive API documentation and designed internal
                  website to navigate it for use between our development team.
                </li>
                <li>Collected usage data to improve the model and product.</li>

                <li>
                  Our product came in 2nd place at the Fairfield University
                  StartUp Showcase, and 1st place in the UTA MavPitch
                  competition, where we raised over $20,000 in pre-seed funding
                </li>
              </ul>

              {/*<Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mock-Ups</Accordion.Header>
                  <Accordion.Body>
                    <Image className="project" rounded fluid src={hs1} />
                    <Image rounded fluid src={hs2} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>*/}
              <Alert variant="info">
                Note: This project is proprietary and private until publically
                released. Please contact me for a demo. The projects listed
                below are all open-source and public. Read more{" "}
                <a
                  href="https://www.fairfield.edu/news/2024/april/start-up-showcase-team-higher-skills.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>{" "}
              </Alert>
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
              <Alert variant="warning">
                Note: The backend for this project is deployed in a location I
                cannot access for a few months, and due to a DNS issue, is
                unavailable. The website is still visible but the data is not
                accurate/loading.
              </Alert>
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
                Django, KoboldCPP, Blip2, React, Flutter
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
                <li>
                  Created a mobile app using Flutter to allow cleaner and faster
                  uploading of images to the server, improving workflow.
                </li>
              </ul>
              <a
                href="https://github.com/amhamiltsyr/SecondHandStoreInventorySystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="view">View Project Source</Button>
              </a>

              <a
                href="https://github.com/aidandegooyer/SecondHandStoreApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="view">
                  View Mobile Source
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
              <h6 className="text-secondary description">
                React, Bootstrap, GH Pages
              </h6>
            </Col>
            <Col md={isStacked ? "6" : body}>
              <ul>
                <li>
                  Designed and developed a responsive website to show off my
                  projects and resume.
                </li>
                <li>Deployed the website to GitHub pages</li>
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
                <li>
                  This project doesn't have any real direction or ending, I was
                  just playing around with SciKit Learn, pytorch, TensorFlow,
                  etc.
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
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
