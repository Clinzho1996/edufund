import React from "react";
import { Container } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { PopupButton } from "@typeform/embed-react";


import './Home.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];




const Home = () => 
<main>
        <div className="mainPage">
            <Container>
                <center>
                    <h1>Automate & Verify <br></br> Data  in 60 seconds</h1>
                    <p>Bridging the gap between the physical and the
                        digital world</p>
                        <PopupButton id="z9lnnwc4" size={80}
                            hidden={{
                                foo: 'Foo Value',
                                bar: 'Bar Value',
                            }}
                            onReady={() => {
                                console.log('form ready')
                            }} className="btn btn-danger">
                            Try Swap for free
                         </PopupButton>
                    <div className="info">
                        <p><i class="fa fa-check" aria-hidden="true"></i>Upload</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Extract</p>
                        <p><i class="fa fa-check" aria-hidden="true"></i>Export</p>
                    </div>
                </center>
            </Container>
            <Container>
                <center>
                    <div className="enter-img">
                        <img src="/invoice.gif" style={{borderRadius: '25px', marginTop: '20px'}} width={'100%'} alt="about" />
                    </div>
                </center>
            </Container>
        </div>
        <div className="abt-section">
            <center>
                <h2>Take advantage of a variety of products.</h2>
                <p>Take a look at some of the interesting products designed to assist you in your growth.</p>
            </center>
            <Row className="align-items-center swap-card">
                <Col xs="5" >
                    <img src="left.svg" alt="logo" width={'100%'} />
                    <h4>Swap Data Capture</h4>
                    <h6>Discover how to extract data from International passports under 60 seconds.... </h6>
                </Col>
                <Col xs="2">
                     <img src="bord.png" alt="logo" width={'2%'} />
                </Col>
                <Col xs="5">
                    <img src="right.png" alt="logo" width={'77%'} />
                    <h4>Custom Data Capture</h4>
                    <h6>Discover how to extract data from any type of document under 60 seconds </h6>
                </Col>
            </Row>
        </div>
        <div className="why-us">
            <Container>
                <div>
                    <h2><span>Why</span> Swapbase!</h2>
                    <p>Unleashing our clients potential by maximising the innovation</p>
                </div>
                <Row style={{ padding: '50px'}}>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><i class="fa fa-check" aria-hidden="true"></i> Swapbase as a means to capturing data </Card.Title>
                                <Card.Text>
                                We developed Swapbase as a means to capturing data in the most efficient and secure ways for individuals, business and governments. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><i class="fa fa-check" aria-hidden="true"></i> Swapbase machine learning infrastructure  </Card.Title>
                                <Card.Text>
                                Our Machine Learning infrastructure facilitates data automation, secured data management and easy of data handling for everyday work.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><i class="fa fa-check" aria-hidden="true"></i> Swapbase makes automation easy </Card.Title>
                                <Card.Text>
                                Digitizes your archives and paperwork while you're on the go, removing obstacles to quick and safe access to correct data. Swapbase makes your work routine paperless, automated and digital.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><i class="fa fa-check" aria-hidden="true"></i>  Swapbase support businesses </Card.Title>
                                <Card.Text>
                                By staying ahead of countless bottlenecks to economic growth, we also support businesses with the essential resources, enabling them dominant access to a pool of customers in a fast-paced and highly secure channel.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="our-products">
            <Container>
                 <h2>We build <span>ideals</span>  driven by the future.</h2>
                <p>Unleashing our clients potential by maximising the innovation</p>
                <Row style={{ padding: '50px 0px 0px 50px'}}>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><img src="05.png" alt="logo" width={'40px'} /> Swapbase for Developers </Card.Title>
                                <Card.Text>
                                Swapbase helps your startup, company or venture quickly scale data without breaking sweat 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><img src="06.png" alt="logo" width={'40px'} /> Swapbase for Governments  </Card.Title>
                                <Card.Text>
                                Governments and agencies can quickly automate archaic processes of data extraction and management
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><img src="07.png" alt="logo" width={'40px'} /> Swapbase for Individuals </Card.Title>
                                <Card.Text>
                                Use swapbase solutions to extract your personal data. You can do more with swapbase. Contact us to find out. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card style={{ width: '30rem' }} className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Body>
                                <Card.Title><img src="08.png" alt="logo" width={'40px'} /> Swapbase for Developers </Card.Title>
                                <Card.Text>
                                As a developer you can quickly integrate Swapbase APIs to your software. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="our-clients">
            <Container>
            <h2>We Help Clients Solve Business Problems <br></br> and Increase Productivity.</h2>
            <h5>Trusted by</h5>
                <Carousel breakPoints={breakPoints}>
                <Item><img src="09.png" alt="logo" width={'100px'} /></Item>
                <Item><img src="10.png" alt="logo" width={'100px'} /></Item>
                <Item><img src="11.png" alt="logo" width={'80px'} /></Item>
                <Item><img src="12.png" alt="logo" width={'80px'} /></Item>
                <Item><img src="13.png" alt="logo" width={'100px'} /></Item>
                </Carousel>
            </Container>     
        </div>
        <div className="testimonials">
            <Container>
            <h2>Hear from <span>happy </span>Users.</h2>
            <h6>Unleashing our clients potential by maximising the innovation</h6>
                <Carousel breakPoints={breakPoints}>
                    <Card style={{ width: '30rem' }} className="testimonial shadow p-3 mb-5 bg-body rounded">
                        <div className="user-icon">
                            <img src="dev.png" alt="logo" width={'80px'} />
                        </div>
                        <p>I'm only just starting to work with Swapbase, but so far it looks great and extremely customizable. Not erything was clear to me though, but the support has been absolutely amazing.</p>
                        <h6>A.O Samson</h6>
                        <p>UI/UX Designer</p>
                        <div className="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </Card>
                    <Card style={{ width: '30rem' }} className="testimonial shadow p-3 mb-5 bg-body rounded">
                        <div className="user-icon">
                            <img src="dev.png" alt="logo" width={'80px'} />
                        </div>
                        <p>I'm only just starting to work with Swapbase, but so far it looks great and extremely customizable. Not erything was clear to me though, but the support has been absolutely amazing.</p>
                        <h6>C. Confidence</h6>
                        <p>Software Developer</p>
                        <div className="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </Card>
                </Carousel>
            </Container>     
        </div>
    </main>


export default Home;