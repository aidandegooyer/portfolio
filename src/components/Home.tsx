import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./home.css";

interface ConveyorItem {
  text: string;
  emoji: string;
}

const ConveyorBelt: React.FC<{ items: ConveyorItem[] }> = ({ items }) => {
  useEffect(() => {
    const belt = document.querySelector(".conveyor-belt");
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 20;

    const scroll = () => {
      if (belt) {
        scrollAmount += scrollStep;
        belt.scrollLeft = scrollAmount;
        if (scrollAmount >= belt.scrollWidth - belt.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="conveyor-belt">
      {items.map((item, index) => (
        <Card key={index} className="conveyor-item">
          <div className="emoji">{item.emoji}</div>
          <div className="text">{item.text}</div>
        </Card>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const conveyorItems: ConveyorItem[] = [
    { text: "Python", emoji: "🐍" },
    { text: "Java", emoji: "☕" },
    { text: "C", emoji: "📟" },
    { text: "C++", emoji: "🚀" },
    { text: "TypeScript/JavaScript", emoji: "🌐" },
    { text: "CSS/HTML", emoji: "🎨" },
    { text: "TensorFlow/Keras", emoji: "🧠" },
    { text: "Git", emoji: "🔗" },
    { text: "CUDA", emoji: "⚡" },
    { text: "Pandas", emoji: "🐼" },
    { text: "NumPy", emoji: "📊" },
    { text: "Django", emoji: "🎭" },
    { text: "React", emoji: "⚛️" },
    { text: "PyTorch", emoji: "🔥" },
    { text: "GUnicorn", emoji: "🦄" },
    { text: "nginx", emoji: "🌍" },
    { text: "Machine Learning", emoji: "🤖" },
    { text: "Data Visualization", emoji: "📈" },
    { text: "Evolutionary Algorithms", emoji: "🧬" },
    { text: "Python", emoji: "🐍" },
    { text: "Java", emoji: "☕" },
    { text: "C", emoji: "📟" },
    { text: "C++", emoji: "🚀" },
    { text: "TypeScript/JavaScript", emoji: "🌐" },
    { text: "CSS/HTML", emoji: "🎨" },
    { text: "TensorFlow/Keras", emoji: "🧠" },
    { text: "Git", emoji: "🔗" },
    { text: "CUDA", emoji: "⚡" },
    { text: "Pandas", emoji: "🐼" },
    { text: "NumPy", emoji: "📊" },
    { text: "Django", emoji: "🎭" },
    { text: "React", emoji: "⚛️" },
    { text: "PyTorch", emoji: "🔥" },
    { text: "GUnicorn", emoji: "🦄" },
    { text: "nginx", emoji: "🌍" },
    { text: "Machine Learning", emoji: "🤖" },
    { text: "Data Visualization", emoji: "📈" },
    { text: "Evolutionary Algorithms", emoji: "🧬" },
    { text: "Python", emoji: "🐍" },
    { text: "Java", emoji: "☕" },
    { text: "C", emoji: "📟" },
    { text: "C++", emoji: "🚀" },
    { text: "TypeScript/JavaScript", emoji: "🌐" },
    { text: "CSS/HTML", emoji: "🎨" },
    { text: "TensorFlow/Keras", emoji: "🧠" },
    { text: "Git", emoji: "🔗" },
    { text: "CUDA", emoji: "⚡" },
    { text: "Pandas", emoji: "🐼" },
    { text: "NumPy", emoji: "📊" },
    { text: "Django", emoji: "🎭" },
    { text: "React", emoji: "⚛️" },
    { text: "PyTorch", emoji: "🔥" },
    { text: "GUnicorn", emoji: "🦄" },
    { text: "nginx", emoji: "🌍" },
    { text: "Machine Learning", emoji: "🤖" },
    { text: "Data Visualization", emoji: "📈" },
    { text: "Evolutionary Algorithms", emoji: "🧬" },
  ];

  return (
    <div className="home-page">
      <Container className="pt-5 mt-5">
        <Row className="justify-content-center align-items-center mb-5">
          <Col md={8}>
            <h1>Aidan DeGooyer</h1>
            <h4>Software Engineer</h4>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center mb-5">
          <Col md={8}>
            <h3>About me:</h3>
            Hey there! I'm a fourth-year student studying Computer Science and
            Economics. I love tackling complex problems and have a keen eye for
            detail. Technology excites me, especially when it comes to building
            innovative solutions. I'm always looking for opportunities to apply
            my skills and creativity in a team that's pushing the boundaries of
            what's possible!
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h3>What I've Done:</h3>
            Click on the buttons below to see what I've been up to.
          </Col>
        </Row>

        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "40px" }}
        >
          <Col md={4} className="text-center">
            <LinkContainer to="/resume">
              <Button size="lg" className="button1 w-100">
                View Resume
              </Button>
            </LinkContainer>
          </Col>
          <Col md={4} className="text-center">
            <LinkContainer to="/portfolio">
              <Button size="lg" className="button2 w-100">
                View Portfolio
              </Button>
            </LinkContainer>
          </Col>
        </Row>

        <Row
          className="justify-content-center align-items-center"
          style={{ marginTop: "100px" }}
        >
          <Col md={8}>
            <h3>See my skills:</h3>
          </Col>
        </Row>
      </Container>

      <ConveyorBelt items={conveyorItems} />

      <Container className="mt-2">
        <Row className="justify-content-center align-items-center">
          <Col md={8} style={{ marginTop: "50px" }}>
            <h3>Contact:</h3>
            <p>
              Please contact me if you have any questions or want to connect!
            </p>
            <Form
              action="https://formsubmit.co/601f8cd864276aafb44535bb50edc7ed"
              method="post"
              className="mb-3"
            >
              {/* Replace "YOUR_FORM_ENDPOINT" with your actual FabForm form endpoint */}

              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
