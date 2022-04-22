import React from "react";
import {Container, Tab, Tabs, Col, Row} from 'react-bootstrap';
import "./Swapdata.css"


const Swapdata = () => <main>
     <center>
     <div className="breadcrumb">
       <h2>Swap Data Capture</h2>
       <p>Bridging the gap between the physical and the digital world</p>
    </div>
     </center>
    <Container>
    <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Invoice Data Capture">
            <Container className="swap-main">
                <center>
                    <h1>Automate invoice, by extracting and verifying data from numerous invoice type documents. 
                    </h1>
                </center>
                <Row>
                    <Col xs="6">
                        <img src="/invoice.gif" style={{borderRadius: '25px', marginTop: '20px'}} width={'100%'} alt="invoice" />
                    </Col>
                    <Col xs="6">
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>This feature allows you to extract data from your Printed Invoices, Handwritten Invoices and Point of Sales Receipts</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>Do efficient record keeping and financial tracking to optimize business workflow through our fast and simple integration</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>You can extract data points including: <strong>Invoice ID, Date, Quantity, Item Description, Cost, Sales Tax, Subtotal Cost and Total Cost</strong> </p>
                        </div>
                    </Col>
                </Row>
                <Container className="direct capture">
                    <center>
                        <h6>DIRECTION THAT MATTERS</h6>
                        <h2>How it Works</h2>
                    </center>
                </Container>
                <Row className="graph">
                    <Col xs="4" style={{marginTop: '200px', marginLeft: '150px'}} className="desktop">
                        <div className="data">
                        <h2>Swapbase AI Technology</h2>
                            <p>The Swapbase AI technology will automatically extract information from submitted NIN Slip. Editing and reviewing the retrieved data is possible.</p>
                        </div>
                    </Col>
                    <Col xs="4" className="desktop">
                        <img src="/swapd.png" alt="Swapdata" width={'70%'} style={{marginLeft: '-100px'}} />
                    </Col>
                    <Col xs="4" style={{marginTop: '50px', marginLeft: '-250px'}} className="desktop">
                        <div className="data">
                            <h2>Export Data</h2>
                            <p>Export the captured data fields as Excel or CSV. It can also be exported into a decentralized database.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="data">
                            <h2>Uploading images</h2>
                            <p>Passport bio page on our dashboard for structured data extraction of verifiable data points like your bio data and passport number using state of the art AI techniques.</p>
                        </div>
                    </Col>
                   <div className="mobile">
                        <img src="/swapm.png" alt="Swapdata" width={'100%'}/>
                   </div>
                </Row>
                <Container className="direct usecase">
                    <center>
                        <h6>USE CASES</h6>
                        <h2>Passport Data Capture <br></br> Use Cases </h2>
                    </center>
                </Container>
                <Row>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                         <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="second" title="Passport Data Capture">
            <Container className="swap-main">
                <center>
                    <h1>The process of obtaining data from paper or electronic documents and transforming it into data for important systems is known as data capture. It's where most companies start when it comes to information management and digital transformation.
                    </h1>
                </center>
                <Row>
                    <Col xs="6">
                        <img src="/epassport.gif" style={{borderRadius: '25px', marginTop: '20px'}} width={'100%'} alt="about" />
                    </Col>
                    <Col xs="6">
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>Automated data capture systems help regulate the messiness of paper-based operations by reducing manual data entry. Workforces can simply acquire relevant data from a variety of sources and apply it to specific workflows.</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>Passport data capture is the process of automating data capture and verification from Passport bio page extraction for the verifiable credential checks.</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>We have developed an automated end-to-end passport data capture using OCR in a bid to reduce the time spent and cost of data transfer from physical to digital format in minutes. </p>
                        </div>
                    </Col>
                </Row>
                <Container className="direct capture">
                    <center>
                        <h6>DIRECTION THAT MATTERS</h6>
                        <h2>How it Works</h2>
                    </center>
                </Container>
                <Row className="graph">
                    <Col xs="4" style={{marginTop: '200px', marginLeft: '150px'}} className="desktop">
                        <div className="data">
                        <h2>Swapbase AI Technology</h2>
                            <p>The Swapbase AI technology will automatically extract information from submitted NIN Slip. Editing and reviewing the retrieved data is possible.</p>
                        </div>
                    </Col>
                    <Col xs="4" className="desktop">
                        <img src="/swapd.png" alt="Swapdata" width={'70%'} style={{marginLeft: '-100px'}} />
                    </Col>
                    <Col xs="4" style={{marginTop: '50px', marginLeft: '-250px'}} className="desktop">
                        <div className="data">
                            <h2>Export Data</h2>
                            <p>Export the captured data fields as Excel or CSV. It can also be exported into a decentralized database.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="data">
                            <h2>Uploading images</h2>
                            <p>Passport bio page on our dashboard for structured data extraction of verifiable data points like your bio data and passport number using state of the art AI techniques.</p>
                        </div>
                    </Col>
                   <div className="mobile">
                        <img src="/swapm.png" alt="Swapdata" width={'100%'}/>
                   </div>
                </Row>
                <Container className="direct usecase">
                    <center>
                        <h6>USE CASES</h6>
                        <h2>Passport Data Capture <br></br> Use Cases </h2>
                    </center>
                </Container>
                <Row>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                         <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="third" title="NIN Slip Data Capture">
        <Container className="swap-main">
                <center>
                    <h1>
                        The constant struggle for many Nigerians that many are going through with the ongoing registration for the National Identification Number (NIN) does not seem to be slowing down. The registration process is slow, tedious and very manual. Despite the fact that 64.4 million unique NINs have been granted to Nigerians, the National Identity Management Commission (NIMC) has disclosed that at least 140 million Nigerians are still to enroll for the National Identity Number (NIN) in the nation. 

                    </h1>
                </center>
                <Row>
                    <Col xs="6">
                        <img src="/nin.gif" style={{borderRadius: '25px', marginTop: '20px'}} width={'100%'} alt="nin" />
                    </Col>
                    <Col xs="6">
                        <div  className="checker nin">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>The NIN Slip Data Capture process involves manually inputting data into a system that takes a long time to complete for each Nigerian.  The SwapBase NIN Slip Data capture technology eliminates the time spent on the data capture process by at least 80%.</p>
                        <br></br> <br></br>
                        </div>
                        <div  className="checker">
                        <i id="stubborn" class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>This also enables the data entry officers to speed up their daily targets and increase productivity. By using the Swapbase AI software for NIN Slip Data Capture, millions of Nigerians can rest assured that the delays in receiving their National Identification Numbers will be eliminated and their everyday lives can progress without the hustle and bustle of NIN registration.</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>The National Identity Management Commission (NIMC) will also be able to process NIN faster and hit faster milestones in terms of NIN issuances to Nigerian Citizens.</p>
                        </div>
                    </Col>
                </Row>
                <Container className="direct capture">
                    <center>
                        <h6>DIRECTION THAT MATTERS</h6>
                        <h2>The SwapBase NIN Slip Data Capture <span>process</span></h2>
                    </center>
                </Container>
                <Row className="graph">
                    <Col xs="4" style={{marginTop: '200px', marginLeft: '150px'}} className="desktop">
                        <div className="data">
                        <h2>Swapbase AI Technology</h2>
                            <p>The Swapbase AI technology will automatically extract information from submitted NIN Slip. Editing and reviewing the retrieved data is possible.</p>
                        </div>
                    </Col>
                    <Col xs="4" className="desktop">
                        <img src="/swapd.png" alt="Swapdata" width={'70%'} style={{marginLeft: '-100px'}} />
                    </Col>
                    <Col xs="4" style={{marginTop: '50px', marginLeft: '-250px'}} className="desktop">
                        <div className="data">
                            <h2>Export Data</h2>
                            <p>Export the captured data fields as Excel or CSV. It can also be exported into a decentralized database.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="data">
                            <h2>Uploading images</h2>
                            <p>Passport bio page on our dashboard for structured data extraction of verifiable data points like your bio data and passport number using state of the art AI techniques.</p>
                        </div>
                    </Col>
                   <div className="mobile">
                        <img src="/swapm.png" alt="Swapdata" width={'100%'}/>
                   </div>
                </Row>
                <Container className="direct usecase">
                    <center>
                        <h6>USE CASES</h6>
                        <h2>Passport Data Capture <br></br> Use Cases </h2>
                    </center>
                </Container>
                <Row>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                         <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="fourth" title="LASRA Data Capture">
        <Container className="swap-main">
                <center>
                    <h1>The process of obtaining data from paper or electronic documents and transforming it into data for important systems is known as data capture. It's where most companies start when it comes to information management and digital transformation. </h1>
                </center>
                <Row>
                    <Col xs="6">
                        <img src="/lasra.gif" style={{borderRadius: '25px', marginTop: '20px'}} width={'100%'} alt="lassra" />
                    </Col>
                    <Col xs="6">
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>This feature allows you to extract data from your Lagos State Residents’ Registration Agency Card. </p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>You can extract data points including: <strong> Name, Address, Date of Birth, Gender, LGA </strong></p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>It's where most companies start when it comes to information management and digital transformation.
</p>
                        </div>
                    </Col>
                </Row>
                <Container className="direct capture">
                    <center>
                        <h6>DIRECTION THAT MATTERS</h6>
                        <h2>The SwapBase LASRA  Data Capture <span>process</span></h2>
                    </center>
                </Container>
                <Row className="graph">
                    <Col xs="4" style={{marginTop: '200px', marginLeft: '150px'}} className="desktop">
                        <div className="data">
                        <h2>Swapbase AI Technology</h2>
                            <p>The Swapbase AI technology will automatically extract information from submitted NIN Slip. Editing and reviewing the retrieved data is possible.</p>
                        </div>
                    </Col>
                    <Col xs="4" className="desktop">
                        <img src="/swapd.png" alt="Swapdata" width={'70%'} style={{marginLeft: '-100px'}} />
                    </Col>
                    <Col xs="4" style={{marginTop: '50px', marginLeft: '-250px'}} className="desktop">
                        <div className="data">
                            <h2>Export Data</h2>
                            <p>Export the captured data fields as Excel or CSV. It can also be exported into a decentralized database.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="data">
                            <h2>Uploading images</h2>
                            <p>Passport bio page on our dashboard for structured data extraction of verifiable data points like your bio data and passport number using state of the art AI techniques.</p>
                        </div>
                    </Col>
                   <div className="mobile">
                        <img src="/swapm.png" alt="Swapdata" width={'100%'}/>
                   </div>
                </Row>
                <Container className="direct usecase">
                    <center>
                        <h6>USE CASES</h6>
                        <h2>Passport Data Capture <br></br> Use Cases </h2>
                    </center>
                </Container>
                <Row>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                         <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="fifth" title="Financial Services">
        <Container className="swap-main">
                <center>
                    <h1>The Swapbase custom data capture solution allows financial services in banking, insurance, pensions, loans to extract, validate and verify data from typical documents including invoices, account opening forms, insurance claims, loan verification documents and more. 
                    </h1>
                </center>
                <Row>
                    <Col xs="6">
                        <img src="/fin.png" width={'80%'} alt="about" />
                    </Col>
                    <Col xs="6">
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>For banking, finances, insurance, pensions, loan startups and money lenders.</p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>This solution helps financial services reduce turnaround time and save costs up to about 50%. </p>
                        </div>
                        <div  className="checker">
                        <i class="fa fa-check shadow p-3 mb-5 bg-body rounded" aria-hidden="true"></i>
                        <p>The product is built with capabilities to help financial services structure, verify data and automate processes in a seamless manner. </p>
                        </div>
                    </Col>
                </Row>
                <Container className="direct capture">
                    <center>
                        <h6>DIRECTION THAT MATTERS</h6>
                        <h2>The SwapBase Financial Service <span>process</span></h2>
                    </center>
                </Container>
                <Row className="graph">
                    <Col xs="4" style={{marginTop: '200px', marginLeft: '150px'}} className="desktop">
                        <div className="data">
                        <h2>Swapbase AI Technology</h2>
                            <p>The Swapbase AI technology will automatically extract information from submitted NIN Slip. Editing and reviewing the retrieved data is possible.</p>
                        </div>
                    </Col>
                    <Col xs="4" className="desktop">
                        <img src="/swapd.png" alt="Swapdata" width={'70%'} style={{marginLeft: '-100px'}} />
                    </Col>
                    <Col xs="4" style={{marginTop: '50px', marginLeft: '-250px'}} className="desktop">
                        <div className="data">
                            <h2>Export Data</h2>
                            <p>Export the captured data fields as Excel or CSV. It can also be exported into a decentralized database.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="data">
                            <h2>Uploading images</h2>
                            <p>Passport bio page on our dashboard for structured data extraction of verifiable data points like your bio data and passport number using state of the art AI techniques.</p>
                        </div>
                    </Col>
                   <div className="mobile">
                        <img src="/swapm.png" alt="Swapdata" width={'100%'}/>
                   </div>
                </Row>
                <Container className="direct usecase">
                    <center>
                        <h6>USE CASES</h6>
                        <h2>Passport Data Capture <br></br> Use Cases </h2>
                    </center>
                </Container>
                <Row>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                         <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="cont shadow p-0 mb-5 bg-body rounded">
                             <img src="/passp.png" width={'100%'} alt="extract" /> 
                             <div className="cont-info">
                                 <p>Extracting data from NIN Slips for verification purposes</p>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
    </Tabs>
    </Container>
</main>

export default Swapdata;