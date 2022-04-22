import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./CustomData.css";


const CustomData = () => <main>
     <center>
     <div className="breadcrumb">
       <h2>Custom Data Capture</h2>
       <p>Bridging the gap between the physical and the digital world</p>
    </div>
     </center>
     <Container className="custom-main">
         <center>
             <h1>Swapbase’s Custom Data capture is a fully customisable AI enterprise Software platform that lets businesses, organizations and Government bodies extract data from any kind of document.</h1>
         </center>
         <Row>
             <Col xs="6">
                <img src="/right.png" width={'100%'} alt="about" />
             </Col>
             <Col xs="6">
                <div  className="checker">
                <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                <p>This is a groundbreaking solution that will save your organizations and Government agencies countless hours spent on manual data entry and structuring your data. </p>
                </div>
                <div  className="checker">
                <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                <p>This is a groundbreaking solution that will save your organizations and Government agencies countless hours spent on manual data entry and structuring your data. </p>
                </div>
                <div  className="checker">
                <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                <p>This is a groundbreaking solution that will save your organizations and Government agencies countless hours spent on manual data entry and structuring your data. </p>
                </div>
             </Col>
         </Row>
     </Container>
     <Container className="capture">
         <center>
            <h2>The Custom Data Capture process is <span>simple</span> with the following steps:</h2>
         </center>
     </Container>
     <center>
     <div className="infograph desktop">
            <img src="/infograph.png" alt="infographics" width={'70%'} />
         </div>
         <div className="infograph mobile">
            <img src="/infom.png" alt="infographics" width={'80%'} />
         </div>
     </center>
         

</main>

export default CustomData;