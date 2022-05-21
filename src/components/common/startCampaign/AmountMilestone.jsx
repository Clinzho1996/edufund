import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, FieldArray } from "formik";

const AmountMilestone = ({
  setStartCampaign,
  startCampaign,
  nextStep,
  prevStep,
}) => {
  return (
    <Container className="userContainer">
      <Row>
        <Col md={6} className="m-auto p-5">
          <h2 className="mb-3 text-primary">Create a new campaign</h2>
          <Form className="d-flex flex-column ">
            <label htmlFor="name" className="mt-2">
              Amount
            </label>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Enter amount or create milestones"
              className="my-2 ps-2 py-2"
              onChange={(e) =>
                setStartCampaign({ ...startCampaign, amount: e.target.value })
              }
              value={startCampaign?.amount}
              required
            />

            <Formik
              initialValues={{ friends: [] }}
              onSubmit={(values) =>
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                }, 500)
              }
              render={({ values }) => (
                <div>
                  <FieldArray
                    name="friends"
                    render={(arrayHelpers) => (
                      <div>
                        {values.friends &&
                        values.friends.length > 0 &&
                        values.friends.length <= 3
                          ? values.friends.map((friend, index) => (
                              <div key={index}>
                                <Field
                                  name={`friends.${index}`}
                                  type="text"
                                  id="amount"
                                  placeholder="Buy a course"
                                  className=" w-25 mb-2 me-2 ps-2 py-2"
                                />
                                <Field
                                  name={`friends.${index}`}
                                  type="text"
                                  id="amount"
                                  placeholder="250,000"
                                  className=" w-50 mb-2 me-2 ps-2 py-2"
                                />
                                <Button
                                  className="m-0 ms-4 py-0 px-3 fs-3 rounded"
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </Button>
                              </div>
                            ))
                          : null}

                        {values.friends.length < 3 ? (
                          <div className="d-flex my-2">
                            <label htmlFor="wallet address" className="mt-2">
                              Add Milestone
                            </label>

                            <Button
                              className="m-0 ms-4 py-0 px-3 fs-3 rounded"
                              onClick={() => arrayHelpers.push("")}
                            >
                              +
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    )}
                  />
                </div>
              )}
            />
            <div className="d-flex">
              <Button
                className="my-3 px-4 rounded align-self-end"
                onClick={() => prevStep(startCampaign)}
              >
                Previous
              </Button>
              <Button
                className="rounded px-4 my-3 ms-auto"
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
};

export default AmountMilestone;
