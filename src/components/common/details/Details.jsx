import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row, Card, Image, Form, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => (
  <main>
    <center>
      <div className="breadcrumb">
        <h2 style={{ paddingTop: "50px" }}>Details Page</h2>
      </div>
    </center>
    <Container
      className="about-main our-types-future"
      id="about"
      style={{ marginBottom: 100 }}
    >
      <Row>
        <Col xs="6">
          <Card
            style={{ width: "100%" }}
            className="shadow p-0 mb-2 bg-body rounded type-card"
          >
            <Card.Body>
              {/* <Link to="/details"><Image src="django.jpg" width="100%" /></Link> */}
              <Card.Title className="type-card__title">
                {" "}
                Help me learn Django
              </Card.Title>
              <Card.Subtitle className="subtitle">
                <h4 style={{ color: "#3180EB", fontWeight: 600 }}>
                  Basic Information
                </h4>
                My name is Femi. i'm interested in learning Django framework for
                backend development. I saw a course online with a lot of rating
                on Udemy My name is Femi. i'm interested in learning Django
                framework for backend development. I saw a course online with a
                lot of rating on Udemy My name is Femi. i'm interested in
                learning Django framework for backend development. I saw a
                course online with a lot of rating on Udemy
                <br /> <br />
                <h4 style={{ color: "#3180EB", fontWeight: 600 }}>Interest</h4>
                <div className="custom-amount">
                  <button className="btn btn-outline-dark">Blockchain</button>
                  <button className="btn btn-outline-dark">Blockchain</button>
                  <button className="btn btn-outline-dark">Blockchain</button>
                  <button className="btn btn-outline-dark">Blockchain</button>
                </div>
                <br />
                <h4 style={{ color: "#3180EB", fontWeight: 600 }}>
                  Financial Support
                </h4>
                <ProgressBar now={60} />
                <div className="amount-raised">
                  <p>
                    <span style={{ color: "#3180EB", fontWeight: 600 }}>
                      Raised:{" "}
                    </span>
                    $300,000
                  </p>
                  <p>
                    <span style={{ color: "#3180EB", fontWeight: 600 }}>
                      Supporters:{" "}
                    </span>{" "}
                    35
                  </p>
                  <p>
                    <span style={{ color: "#3180EB", fontWeight: 600 }}>
                      Target:{" "}
                    </span>{" "}
                    $600
                  </p>
                </div>
                <Form>
                  <div className="custom-amount">
                    <Form.Control type="text" value="$30" />
                    <Form.Control type="text" value="$30" />
                    <Form.Control type="text" value="$30" />
                    <Form.Control type="text" value="$30" />
                    <Form.Control type="text" value="$30" />
                  </div>
                  <div className="desired-amount">
                    <Form.Control
                      name="custom amount"
                      placeholder="Enter a custom amount"
                    />
                    <button className="btn btn-primary">Donate</button>
                  </div>
                </Form>
                <br />
                <h4 style={{ color: "#3180EB", fontWeight: 600 }}>
                  Social Media
                </h4>
                <div className="social-icons">
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-facebook-square"></i>
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                  <i className="fa-brands fa-linkedin"></i>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6">
          <Image src="cj.jpg" width="81%" />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Details;
