import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Blog.css'




const Blog = () => <main>
      <center>
     <div className="breadcrumb">
       <h2>Blog</h2>
       <p>Bridging the gap between the physical and the digital"</p>
    </div>
     </center>
     <Container className="blog">
         <Row>
             <Col xs="6">
                 <img src="/blog.png" width={'100%'} alt="blog" />
                 <p className="category">By Swapbase Team</p>
                 <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
             </Col>
             <Col xs="6">
                 <img src="/blog.png" width={'100%'} alt="blog" />
                 <p className="category">By Swapbase Team</p>
                 <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
             </Col>
             <Col xs="6">
                 <img src="/blog.png" width={'100%'} alt="blog" />
                 <p className="category">By Swapbase Team</p>
                 <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
             </Col>
             <Col xs="6">
                 <img src="/blog.png" width={'100%'} alt="blog" />
                 <p className="category">By Swapbase Team</p>
                 <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
             </Col>
         </Row>
     </Container>
     <Container>
            <Row>
                <Col xs="10">
                    <div className="swap-update">
                        <h2>Swapbase Updates</h2>
                        <p>Keep up with the latest happenings in swapbase with Swapbase  updates.</p>
                    </div>
                </Col>
                <Col xs="2">
                    <div className="swap-update">
                        <Link to="/" disabled>View all</Link>
                    </div>
                </Col>
            </Row>
            <Row className="inner-blog">
                <Col xs="4">
                    <img src="/blog.png" width={'100%'} alt="blog" />
                    <p className="category">By Swapbase Team</p>
                    <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
                    <hr />
                    <div className="blog-date">
                      <h6>January 4, 2020</h6>
                      <h6>4 mins ago</h6>
                    </div>
                </Col>
                <Col xs="4">
                    <img src="/blog.png" width={'100%'} alt="blog" />
                    <p className="category">By Swapbase Team</p>
                    <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
                    <hr />
                    <div className="blog-date">
                      <h6>January 4, 2020</h6>
                      <h6>4 mins ago</h6>
                    </div>
                </Col>
                <Col xs="4">
                    <img src="/blog.png" width={'100%'} alt="blog" />
                    <p className="category">By Swapbase Team</p>
                    <h2>Using OCR and Deep Learning to Automate Receipt Digitization</h2>
                    <hr />
                    <div className="blog-date">
                      <h6>January 4, 2020</h6>
                      <h6>4 mins ago</h6>
                    </div>
                </Col>
            </Row>
     </Container>
</main>

export default Blog