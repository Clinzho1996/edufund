import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const Confirm = ({ setStartCampaign, startCampaign, prevStep, nextStep }) => {
  return (
    <Container className="userContainer">
      <Row>
        <Col xs={12} md={6} className="m-auto">
          <h2 className="text-center text-primary">Confirm Details</h2>
          <ListGroup variant="flush">
            <ListGroup.Item className="my-2 py-3" variant="primary">
              <p className="d-inline me-2 fw-bolder">Full name:</p>
              {startCampaign?.fullName}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              <p className="d-inline me-2 fw-bolder">Email:</p>
              {startCampaign?.email}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              <p className="d-inline me-2 fw-bolder">Wallet address:</p>
              {startCampaign?.walletAddress}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              <p className="d-inline me-2 fw-bolder">Campaign title:</p>
              {startCampaign?.campaignTitle}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              <p className="d-inline me-2 fw-bolder">Campaign Details:</p>{" "}
              {startCampaign?.campaignDetails}
            </ListGroup.Item>
            <ListGroup.Item className="my-2 py-3" variant="primary">
              {!(startCampaign?.socialLinks?.length > 1) ? (
                <p className="d-inline me-2 fw-bolder">Social :</p>
              ) : (
                <p className="d-inline me-2 fw-bolder">Socials :</p>
              )}{" "}
              {startCampaign?.socialLinks.map((link) => (
                <p className="d-inline-block me-3" key={link.length * 15}>{link}</p>
              ))}
            </ListGroup.Item>
            {startCampaign?.amount ? (
              <ListGroup.Item className="my-2 py-3" variant="primary">
                <p className="d-inline me-2 fw-bolder">Amount:</p>
                &#8358;{startCampaign?.amount}
              </ListGroup.Item>
            ) : null}
            {startCampaign?.milestone ? (
              <ListGroup.Item className="my-2 py-3" variant="primary">
                <p className="d-inline me-2 fw-bolder">Milestones:</p>
                <ListGroup.Item className="my-2 py-3" variant="primary">
                  <p className="d-inline me-2 fw-bolder">
                    {startCampaign?.milestone?.firstText}
                  </p>
                  = &#8358;{startCampaign?.milestone?.firstValue}
                </ListGroup.Item>
                <ListGroup.Item className="my-2 py-3" variant="primary">
                  <p className="d-inline me-2 fw-bolder">
                    {startCampaign?.milestone?.secondText}
                  </p>
                  = &#8358;{startCampaign?.milestone?.secondValue}
                </ListGroup.Item>
              </ListGroup.Item>
            ) : null}
          </ListGroup>
          <div className="d-flex">
            <Button
              className="my-3 px-4 rounded align-self-end"
              onClick={() => prevStep(startCampaign)}
            >
              Previous
            </Button>
            <Button
              className="rounded my-3 px-4 ms-auto"
              onClick={() => nextStep(startCampaign)}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirm;
