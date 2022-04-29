import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Solution.css";

const Solution = () => (
  <main>
    <center>
      <div className="breadcrumb">
        <h2>Solutions</h2>
        <p>Bridging the gap between the physical and the digital world</p>
      </div>
    </center>
    <div className="enterprise">
      <center>
        <h6>SWAPBASE FOR ENTERPRISES</h6>
        <h2>There are hundreds of documents per customer.</h2>
        <p>
          From cheques,account opening, identity documents, transactional data
          and loan applications. There is a need to process that information to
          deliver services quickly while also protecting customer information
          and complying with ever changing government regulations.
        </p>
      </center>
      <Row>
        <Col xs="3">
          <Card className="solution-card shadow p-3 mb-5 bg-body rounded">
            <img src="/customer.png" alt="Customer data" width={"30px"} />
            <h4 className="solution-card__title">Customer Data Analysis</h4>
            <h5 style={{ paddingBottom: "26px" }}>
              The present document processing won't cut it as they are time
              consuming and error prone which can have severe financial or
              compliance consequences
            </h5>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="solution-card shadow p-3 mb-5 bg-body rounded">
            <img src="/document.png" alt="Document data" width={"30px"} />
            <h4 className="solution-card__title">Document Capture Solution</h4>
            <h5 style={{ paddingBottom: "25px" }}>
              There is a need for a document capture solution that can keep up
              with customers demand & meet compliance and security regulations.{" "}
            </h5>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="solution-card shadow p-3 mb-5 bg-body rounded">
            <img
              src="/extract.png"
              alt="Extraction data"
              width={"30px"}
              style={{ paddingBottom: "10px" }}
            />
            <h4 className="solution-card__title">
              Extract All DataStructure Types
            </h4>
            <h5>
              You can extract all structured and unstructured data and gain the
              unbeatable edge to: Faster verification, Easier document
              processing, Earn customer trust, Simplify data retention
            </h5>
          </Card>
        </Col>
        <Col xs="3">
          <Card className="solution-card shadow p-3 mb-5 bg-body rounded">
            <img src="/tech.png" alt="Technology data" width={"30px"} />
            <h4 className="solution-card__title">Technologies use case</h4>
            <h5>
              Our technology can be used in services like card services, credit
              card application, mortgage originating files, property titles,
              online forms, account opening and lots more.
            </h5>
          </Card>
        </Col>
      </Row>
    </div>
    <Container className="solution-main">
      <Row>
        <Col xs="6">
          <img src="/sol1.png" width={"100%"} alt="about" />
        </Col>
        <Col xs="6" className="solution-left">
          <h6>SWAPBASE FOR DEVELOPERS</h6>
          <h2>
            Start building custom document and data automation experiences with
            our APIs resources.
          </h2>
          <p>
            Our well-documented APIs help integrate easy to use no code
            experience for an AI driven solution.
          </p>
          <h5>
            You can build anything from simple invoice tracking platforms, to
            bookkeeping, accounting and audit trails, to embedded document
            scanning systems for verification, to fintech app instant KYC from
            verifiable credentials, to resume parsing platforms, to insurance
            claims and bank statement data extraction softwares. Swapbase can
            allow you tap into unused and underused customer data sources.{" "}
          </h5>
          <p>To learn more about how we can help you solve this problem</p>
          <Link to="/contact">
            Contact us <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </Col>
      </Row>
    </Container>
    <Container className="solution-main">
      <Row>
        <Col xs="6">
          <h6>SWAPBASE FOR GOVERNMENT</h6>
          <h2>
            Government Institutions at all levels Local, State and Federal have
            large volumes of data to process, and staff spend lots of time
            filing and inputting the data manually.{" "}
          </h2>
          <h5>
            {" "}
            The archives of government are untapped reservoirs of information
            that can be quickly transformed to an amazing tool for revenue
            generation for governments by reducing time spent filing data by
            10X, reducing real estate occupying archives and improving overall
            efficiency by 200%.{" "}
          </h5>
          <p>To learn more about how we can help you solve this problem </p>
          <Link to="/contact">
            Contact us <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </Col>
        <Col xs="6">
          <img src="/sol3.png" width={"100%"} alt="about" />
        </Col>
      </Row>
    </Container>
    <Container className="solution-main">
      <Row>
        <Col xs="6" style={{ marginTop: "100px" }}>
          <h6>SWAPBASE FOR INDIVIDUALS</h6>
          <h2>We have designed Swapbase for everyone,</h2>
          <h5>
            so that handling and managing data is easier. Individuals can- use
            Swapbase to automate personal data in a fast, structured and secure
            manner.{" "}
          </h5>
          <p>To learn more about how we can help you solve this problem </p>
          <Link to="/contact">
            Contact us <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </Col>
        <Col xs="6">
          <img src="/sol2.png" width={"100%"} alt="about" />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Solution;
