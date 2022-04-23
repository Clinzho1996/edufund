import React from "react";
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { PopupButton } from "@typeform/embed-react";

import './Footer.css';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <Container>
            <div className="footer-main">
                <h1>Start your <span>Data Automation </span> now</h1>
                <p>Reach out for any questions on our Enterprise plan, pricing, or security. Chat <br></br> with an enterprise collaboration specialist.</p>
                <div className="footer-btn">
                    <PopupButton id="z9lnnwc4" size={80} hidden={{
                                foo: 'Foo Value',
                                bar: 'Bar Value',
                            }}
                            onReady={() => {
                                console.log('form ready')
                            }} className="btn btn-primary">
                        Try for free
                    </PopupButton>
                    <Link to="/contact"><Button className="btn btn-success">Contact Us</Button></Link>
                </div>
            </div>
        </Container>
    <div className="container-fluid footer-nav text-left text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-3">
            <img src="16.png" alt="logo" width={'150px'} />
                <ul className="list-unstyled">
                    <li><a href="mailto:info@swapbase.io">info@swapbase.io</a></li>
                    <li><a href="tel:/+2347068365435">+234 7068 365 435</a></li>
                    <li><a href="tel:/+447796010762">+44 7796 010762</a></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-capitalize">Quick Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/solution">Solution</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-capitalize">Newsletter</h5>
                <p className="newsletter-intro">To receive industry updates, of technology and decentralized data, sign up for our newsletter.</p>
                <Form>
                    <Row className="align-items-left">
                        <Col xs="8 g-1" >
                        <InputGroup hasValidation>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control type="email" placeholder="Enter your email address" required />
                            <Form.Control.Feedback>
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col xs="4 g-1">
                            <Button type="submit" className="form-submit" >
                                Subscribe <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </Button>
                        </Col>
                        
                        <div className="social-icons">
                                <a href="https://facebook.com/swapbase" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-square"></i></a>
                                <a href="https://instagram.com/swapbase_io" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram-square"></i></a>
                                <i class="fa-brands fa-linkedin"></i>
                                <a href="https://twitter.com/swapbase" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                    </Row>
            </Form>
            </div>
        </div>
        <hr />
        <div className="footer-copyright text-left py-3">
        <a href="/"> swapbase© 2022. All Rights Reserved.</a>
    </div>
    </div>
</footer>




export default Footer;


