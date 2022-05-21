<<<<<<< HEAD
import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => (
  <main>
    <center>
      <div className="breadcrumb">
        <h2>About Us</h2>
        <p>Bridging the gap between the physical and the digital world</p>
      </div>
    </center>
    <Container className="about-main" id="about">
      <Row>
        <Col xs="6">
          <h6>ABOUT SWAPBASE</h6>
          <h2>
            We are a team of data enthusiats that see data as an SI unit for
            everthing.
          </h2>
          <h5>
            Our team comprises Machine Learning Engineers and Researchers that
            understand the pain points around physical data management in
            Africa.
          </h5>
          <p>To learn more about how we can help you solve this problem </p>
          <Link to="/contact">
            Contact us <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </Col>
        <Col xs="6">
          <img src="/abt.png" width={"100%"} alt="about" />
        </Col>
      </Row>
    </Container>
    <Container className="abt-sec">
      <center>
        <h6>VALUE STATEMENT</h6>
        <h1>We believe data should never lose value </h1>
        <h5>
          From cheques,account opening, identity documents, transactional data
          and loan applications. There is a need to process that information to
          deliver services quickly while also protecting customer information
          and complying with ever changing government regulations.
        </h5>
      </center>
    </Container>
    <Container className="mission">
      <Row>
        <Col xs="4" className="abt-info">
          <img src="/vision.png" alt="vision" width={"50px"} />
          <h3>Our Vision</h3>
          <p>
            We envision a world with exclusive digital information for
            businesses and individuals
          </p>
        </Col>
        <Col xs="4" className="abt-info">
          <img src="/mission.png" alt="mission" width={"50px"} />
          <h3>Our Mission</h3>
          <p>
            To make data easily accessible, manageable and usable for data
            owners
          </p>
        </Col>
        <Col xs="4" className="abt-right">
          <h2>
            Our aim is to serve as a bridge between physical data types and
            digital data using Artificial Intelligence to facilitate growth in
            the African modern economy.
          </h2>
        </Col>
      </Row>
    </Container>
  </main>
);

export default About;
=======
import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => (
  <main>
    <center>
      <div className="breadcrumb">
        <h2 style={{paddingTop: '50px'}}>About Us</h2>
      </div>
    </center>
    <Container className="about-main" id="about" style={{marginBottom: 100}}>
      <Row>
        <Col xs="6">
          <h6>ABOUT DFMlab</h6>
          <h2>
            Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Ipsa, minima?
          </h2>
          <h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, sint quod temporibus architecto totam voluptatum ducimus? Ratione, officia sapiente! Facere harum nobis nam minus ut voluptate illum dignissimos architecto sed.
          </h5>
          <p>To learn more about how we can help you solve this problem ?</p>
          <Link to="/contact">
            Contact us <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </Col>
        <Col xs="6">
          <img style={{borderRadius: 25}} src="/program.jpg" width={"100%"} alt="about" />
        </Col>
      </Row>
    </Container>
    <Container className="abt-sec">
      <center>
        <h6>VALUE STATEMENT</h6>
        <h1>Lorem ipsum dolor sit amet. </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima, dolore qui laboriosam est eius dolor accusantium esse laborum quia adipisci inventore itaque. Maiores incidunt, explicabo dolores voluptatibus excepturi esse.
        </h5>
      </center>
    </Container>
    <Container className="mission">
      <Row>
        <Col xs="4" className="abt-info">
          <i className="fa fa-eye"></i>
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus odit et inventore hic vitae! Molestias repellendus aliquid itaque soluta. Necessitatibus.
          </p>
        </Col>
        <Col xs="4" className="abt-info">
          <i className="fa fa-road"></i>
          <h3>Our Mission</h3>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus odit et inventore hic vitae! Molestias repellendus aliquid itaque soluta. Necessitatibus.
          </p>
        </Col>
        <Col xs="4" className="abt-right">
          <h2>
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo tempore aliquam laborum dolor accusantium illo quam reiciendis ea incidunt facere.
          </h2>
        </Col>
      </Row>
    </Container>
    <Container className="abt-sec" style={{marginTop: 100}}>
      <center>
        <h6>MEET THE TEAM</h6>
        <h1>Our Amazing Team</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima, dolore qui laboriosam est eius dolor accusantium esse laborum quia adipisci inventore itaque. Maiores incidunt, explicabo dolores voluptatibus excepturi esse.
        </h5>
      </center>
      <Row style={{ marginLeft: "0px !important", marginRight: "0px" }} className="our-types-future">
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
                <Image src="Clinton.jpg" width="100%" />
                <Card.Title
                  className="type-card__title"
                > Emonena Confidence
                </Card.Title>
                <Card.Subtitle className="subtitle">
                Software Developer
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
              <Image src="Clinton.jpg" width="100%" />
                <Card.Title
                  className="type-card__title"
                > Emonena Confidence
                </Card.Title>
                <Card.Subtitle className="subtitle">
                Software Developer
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card style={{ width: "24rem" }} className="shadow p-0 mb-2 bg-body rounded type-card">
              <Card.Body>
              <Image src="Clinton.jpg" width="100%" />
              <Card.Title
                  className="type-card__title"
                > Emonena Confidence
                </Card.Title>
                <Card.Subtitle className="subtitle">
                Software Developer
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  </main>
);

export default About;
>>>>>>> 0cdd4486995db036177bd3d36e32fa66b782497c
