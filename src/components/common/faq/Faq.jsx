import React from "react";
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Faq.css'




const Faq = () => <main>
      <center>
     <div className="breadcrumb">
       <h2>Frequently Asked Questions</h2>
       <p>Bridging the gap between the physical and the digital world</p>
    </div>
     </center>
     <div className="faq">
             <center>
                <h6>FAQs</h6>
                <h2>Customers frequently ask</h2>
            </center>
     </div>


     <Container className="accord">
         <Row>
             <Col xs="6">
                <Accordion defaultActiveKey={['0']} flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can I extract data from any type of document? </Accordion.Header>
                    <Accordion.Body>
                    Yes, our custom model makes it possible for you to create your own model to extract any type of document.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How much do I need to pay to use the product?
                </Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, veritatis.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How much do I need to pay to use the product?</Accordion.Header>
                    <Accordion.Body>
                    Kindly contact us for pricing here…
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
             </Col>
             <Col xs="6">
                <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Does Swapbase Provide APIs?
                </Accordion.Header>
                    <Accordion.Body>
                    Yes, our APIs are available 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can I use Swapbase for free?
                </Accordion.Header>
                    <Accordion.Body>
                    Yes, you can enjoy Swapbase free trial period with a limited number of extractions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Can I extract data from any type of document? 
                </Accordion.Header>
                    <Accordion.Body>
                    Yes, our custom model makes it possible for you to create your own model to extract any type of document.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
             </Col>
         </Row>
     </Container>
</main>

export default Faq