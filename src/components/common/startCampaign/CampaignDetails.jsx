import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function CampaignDetails({
  nextStep,
  startCampaign,
  setStartCampaign,
  prevStep,
}) {
  return (
    <Container className="userContainer">
      <Row >
        <Col md={6} className="m-auto p-5">
          <h2 className="  m-auto mb-3">Create a new campaign</h2>
          <Form className=" m-auto d-flex flex-column ">
            <label htmlFor="campaignTitle" className="mt-2">
              Campaign title
            </label>
            <input
              type="text"
              name="campaignTitle"
              id="campaignTitle"
              placeholder="Use something like &#8220;Help me learn Front-end development&#8221;"
              className="my-2 ps-2 py-2"
              onChange={(e) =>
                setStartCampaign({ ...startCampaign, campaignTitle: e.target.value })
              }
              value={startCampaign?.campaignTitle}
            />
            <label htmlFor="details" className="mt-2">
              More details
            </label>
            <textarea
              type="text"
              name="details"
              id="details"
              placeholder="Try to be as convincin as possible"
              className="my-2 ps-2 py-2"
              onChange={(e) =>
                setStartCampaign({ ...startCampaign, campaignDetails: e.target.value })
              }
              value={startCampaign?.campaignDetails}
            />
            <label htmlFor="social" className="mt-2">
              Social
            </label>
            <div className="d-flex align-items-center ">
            <input
              type="text"
              name="social"
              id="social"
              placeholder="Paste your handle here"
              className="w-50  my-2 ps-2 py-2 "
              onChange={(e) =>
                setStartCampaign({
                  ...startCampaign,
                  social: e.target.value,
                })
              }
              value={startCampaign?.social}
            />
            <Button className="m-0 ms-4 py-0 px-3 fs-3 rounded">+</Button>

            </div>
            
            <div className="d-flex">
              <Button
                className=" my-3 px-5 rounded"
                onClick={() => prevStep(startCampaign)}
              >
                Previous
              </Button>
              <Button
                className="my-3 ms-auto rounded"
                onClick={() => nextStep(startCampaign)}
              >
                Next
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
