import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const Confirm = ({ setStartCampaign, startCampaign, prevStep, nextStep }) => {
  return (
    <Container className="userContainer">
      <Row>
        <Col md={6} className="m-auto">
          <h2 className="text-center">Confirm Details</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Full name: {startCampaign?.fullName}
            </ListGroup.Item>
            <ListGroup.Item>Email: {startCampaign?.email}</ListGroup.Item>
            <ListGroup.Item>
              Wallet address: {startCampaign?.walletAddress}
            </ListGroup.Item>
            <ListGroup.Item>
              Campaign title: {startCampaign?.campaignTitle}
            </ListGroup.Item>
            <ListGroup.Item>
              Campaign Details: {startCampaign?.campaignDetails}
            </ListGroup.Item>
            <ListGroup.Item>Social(s): {startCampaign?.social}</ListGroup.Item>
            <ListGroup.Item>Amount: &#8358;{startCampaign?.amount}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex">
            <Button
              className="my-3 rounded align-self-end"
              onClick={() => prevStep(startCampaign)}
            >
              Previous
            </Button>
            <Button
              className="rounded my-3 ms-auto"
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
