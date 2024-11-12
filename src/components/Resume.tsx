import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Resume.css";
import resume_pdf from "../assets/ACD Resume 11-11.pdf";

const Resume: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById("a");
    element?.scrollIntoView();
  }, []);

  return (
    <>
      <a id="a"></a>
      <div className="resume-page">
        <Container className="pt-5 mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center">My Resume</h1>
              <a href={resume_pdf} download="Aidan_DeGooyer_Resume.pdf">
                <h5 className="text-center">Download PDF</h5>
              </a>

              <section className="resume-section">
                <h3 className="display-6">Personal Information</h3>
                <ul>
                  <li>
                    <strong>Name:</strong> Aidan DeGooyer
                  </li>
                  <li>
                    <strong>Email:</strong> aidandegooyer@gmail.com
                  </li>
                </ul>
              </section>

              <section className="resume-section">
                <h3 className="display-6">Education</h3>
                <h5>Syracuse University</h5>
                <p>2021-2025, GPA 3.9</p>
                <ul>
                  <li>B.S. Computer Science</li>
                  <li>B.A. Economics</li>
                  <li>Tau Beta Pi Engineering Honor Society</li>
                  <li>
                    Relevant Coursework: Evolutionary Machine Learning, Design
                    of OS, Object Oriented Programming in C++
                  </li>
                  <li>Awards: 6x Dean’s List</li>
                  <li>Study Abroad: London, Fall 2023</li>
                </ul>
              </section>

              <section className="resume-section">
                <h3 className="display-6">Professional Experience</h3>
                <h5>Lead Software Engineer at Higher Skills</h5>
                <p>Feb 2024 - Aug 2024</p>
                <ul>
                  <li>
                    Designed, mocked-up, and developed AI-driven software using
                    OpenAI API and began training an in-house model.
                  </li>
                  <li>
                    Collected usage data to improve the model and product.
                  </li>
                  <li>
                    Our product came in 2nd place at the Fairfield University
                    StartUp Showcase.
                  </li>
                  <li>Secured over $5k in seed funding</li>
                </ul>
              </section>

              <section className="resume-section">
                <h3 className="display-6">Projects</h3>
                <LinkContainer to="/portfolio">
                  <Button className="portfolio" href="#">
                    View Portfolio
                  </Button>
                </LinkContainer>
              </section>

              <section className="resume-section">
                <h3 className="display-6">Technical Skills</h3>
                <h5>Programming Languages</h5>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>TypeScript/JavaScript</li>
                  <li>CSS/HTML</li>
                </ul>
                <h5>Tools</h5>
                <ul>
                  <li>TensorFlow/Keras</li>
                  <li>Git</li>
                  <li>CUDA</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Django</li>
                  <li>React</li>
                  <li>PyTorch</li>
                  <li>GUnicorn</li>
                  <li>nginx</li>
                </ul>
                <h5>Skills:</h5>
                <ul>
                  <li>Machine Learning</li>
                  <li>Evolutionary Algorithms</li>
                  <li>Full-Stack Development and Deployment</li>
                </ul>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Resume;
