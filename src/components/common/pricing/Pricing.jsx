import React from "react";
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import './Pricing.css'



const Pricing = () => <main>
     <center>
     <div className="breadcrumb">
       <h2>Pricing</h2>
       <p>“Bridging the gap between the physical and the digital world”</p>
    </div>
     </center>
     <Container>
         <center>
         <Form className="form-group shadow p-3 mb-5 bg-body rounded">
              <center>
                   <img src="logo-new.png" alt="" width={'200px'}/>
                   <h5>Get Access to Swapbase Pricing</h5>
              </center>
               <Row className="align-items-left">
                    <Col xs="12 g-1" >
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup hasValidation>
                         <InputGroup.Text><i class="fa-solid fa-user"></i></InputGroup.Text>
                         <Form.Control type="email" placeholder="Enter your full name" required />
                         <Form.Control.Feedback>
                         </Form.Control.Feedback>
                         </InputGroup>
                    </Col>
                    <Col xs="12 g-1" >
                    <Form.Label>Business email address</Form.Label>
                    <InputGroup hasValidation>
                         <InputGroup.Text><i class="fa-solid fa-at"></i></InputGroup.Text>
                         <Form.Control type="email" placeholder="Enter your email address" required />
                         <Form.Control.Feedback>
                         </Form.Control.Feedback>
                         </InputGroup>
                    </Col>
                    <Col xs="12 g-1" >
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                         <InputGroup.Text><i class="fa-solid fa-phone"></i></InputGroup.Text>
                         <Form.Control type="email" placeholder="Enter phone number" required />
                         <Form.Control.Feedback>
                         </Form.Control.Feedback>
                         </InputGroup>
                    </Col>
                    <Col xs="12 g-1" >
                    <Form.Label>Your Message</Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control as="textarea" placeholder="Tell us what you need help with" rows="3" />
                    </InputGroup>
                    </Col>
                    <Col xs="12 g-1">
                         <Button type="submit" className="form-submit" >
                              Submit <i class="fa fa-arrow-right" aria-hidden="true"></i>
                         </Button>
                    </Col>
               </Row>
          </Form>
         </center>
     </Container>
</main>

export default Pricing