import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";
import NumericInput from 'react-numeric-input';
import PhoneInput from 'react-phone-number-input'
import { MdPhoneInTalk } from  "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import HomeReadAdviceAndIdeas from './Home/homereadadviceandideas.jsx';
import ContactUsToGetBestDeal from './contactUsToGetBestDeal'
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
// import React, { Component } from "react";
function VenuBookingService () {
    return (
        <React.Fragment>
        <div className="wrap">
            <section className="container-fluid" id="herosection"> 
                {/* Section 1 (Hero Section) */}
                    <Row className="vbs-heroimg">  
                        <Col className="align-self-center">
                            <Row>
                                <Col xl ={2} ></Col>
                                <Col lg={12} xl ={8}> 
                                    <div className="custom-items-align ">
                                        <h1 className="home-title font-montserrat">Venue Booking Service</h1>
                                        <p className="font-cormorant">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                    </div>
                                </Col>
                                <Col xl ={2} ></Col>
                            </Row>
                        </Col>
                    </Row>
                 {/* Section 1 (Hero Section) End */}  

            </section>
            <section className="container-fluid section2" >
              <Row>
                  <Col lg={12} className="mb-5">
                      <h2 className="home-title text-center text-purple font-montserrat">HOW IT WORKS</h2>
                  </Col>
                  <Col lg={12} >
                    <Row className="HIW">
                        {/* <Col lg={3}>
                            
                            <h5>Share  requirements</h5>
                        </Col>
                        <Col lg={3}><h5>Receive suggestions</h5></Col>
                        <Col lg={3}><h5>Visit venues</h5></Col>
                        <Col lg={3}><h5>Get upto 30% off</h5></Col> */}
                        <Col>
                            <CardColumns>
                                <Card>
                                    <div class="text-center HIW-icons"><Image src="/img/open-share-boxed.png"/></div>
                                    <Card.Body className="d-flex justify-content-center">
                                    <Card.Title className="font-montserrat">Share requirements</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div class="text-center HIW-icons"><Image src="/img/feather-phone-call.png"/></div>
                                    <Card.Body className="d-flex justify-content-center">
                                    <Card.Title className="font-montserrat">Receive suggestions</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div class="text-center HIW-icons"><Image src="/img/material-place.png"/></div>
                                    <Card.Body className="d-flex justify-content-center">
                                    <Card.Title className="font-montserrat">Visit venues</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <div class="text-center HIW-icons"><Image src="/img/metro-discout.png"/></div>
                                    <Card.Body className="d-flex justify-content-center">
                                    <Card.Title className="font-montserrat">Get upto 30% off</Card.Title>
                                    </Card.Body>
                                </Card>                            
                            </CardColumns>                        
                        </Col>
                    </Row>
                  </Col>
              </Row>
            </section>          
        </div>
        <div className="container-fluid">
            <Row className="vbs-section3">
                <Col className="align-self-center">
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h2 className="text-purple font-montserrat">Best price guaranteed</h2>
                                <p className="text-purple pt-2 font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>

                            <Carousel.Caption>
                                <h2 className="text-purple font-montserrat">Second slide label</h2>
                                <p className="text-purple pt-2 font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h2 className="text-purple font-montserrat">Third slide label</h2>
                                <p className="text-purple pt-2 font-montserrat">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
        <div className="wrap">
            <div className="container">
                <Row className="section4">
                    <Col sm={12} className="d-flex justify-content-center">
                        <h2 className="text-center text-purple pb-5 font-montserrat title">WMG Gold plan @ BDT. 2000/- BDT. 999/-</h2>
                    </Col>
                    <Col sm={12}>
                        <Row className="paB-80">
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Dedicated Venue Expert (on ground)</p></Col>
                                    <Col sm={2}></Col>
                                </Row>
                            </Col>
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Personalised venue suggestions</p></Col>
                                    <Col sm={2}></Col>
                                </Row>                                                              
                            </Col>
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Confirmed availability of shortlisted venues within 24 hours</p></Col>
                                    <Col sm={2}></Col>
                                </Row>                                                              
                            </Col>
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Guided site visits for up to 5 properties</p></Col>
                                    <Col sm={2}></Col>
                                </Row>                                                                  
                            </Col>
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Negotiated prices for 2 shortlisted venues and best deal (upto 30% off)</p></Col>
                                    <Col sm={2}></Col>
                                </Row>                                                                   
                            </Col>
                            <Col xl={4} lg={6}>
                                <Row className="section4-card-items pb-sm-4">
                                    <Col sm={2}></Col>
                                    <Col sm={2} className="d-flex section4-justify-content"><span className="section4-card-icon"><FaUserAlt/></span></Col>
                                    <Col sm={6}><p>Currently available only in Dhaka</p></Col>
                                    <Col sm={2}></Col>
                                </Row>                                                                  
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <Row className="">
                           <Col sm={12}>
                               <h2 className="text-center text-purple font-montserrat">Enter your Requirements</h2>
                               <p className="text-center font-cormorant mb-5">Just Fill In Your Details And Our Venue Experts Will Help You Out With Your Requirements</p>
                           </Col>
                           <Col lg={2}></Col>
                           <Col lg={8}>
                           <Form>
                                <Form.Row className="ER">
                                        <Col md={6} sm={12}>
                                            <Form.Group controlId="date">
                                                <Form.Control type="date" placeholder="Date*" />
                                            </Form.Group>
                                            <Form.Group controlId="name">
                                                <Form.Control type="text" placeholder="Name*" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="email">
                                                <Form.Control type="email" placeholder="Email*" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} sm={12}>
                                            <Form.Group controlId="noOfGuestsMinimum30*">
                                                <NumericInput className="form-control" placeholder="No of guests minimum 30*"/>
                                            </Form.Group>
                                            <Form.Group controlId="name">
                                                <Form.Control type="tel" placeholder="Phone*" />
                                            </Form.Group>
                                            <Form.Group controlId="locality">
                                                <Form.Control as="select" placeholder="Locality*">
                                                    <option>Gulshan</option>
                                                    <option>Baridhara</option>
                                                    <option>Dhanmondi</option>
                                                    <option>Banani</option>
                                                    <option>Mirpur</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Check
                                                inline
                                                label="Veg"
                                                feedback="You must agree before submitting."
                                                />
                                                <Form.Check
                                                inline form-check-label
                                                label="Non-Veg"
                                                feedback="You must agree before submitting."
                                                />                                               
                                            </Form.Group>
                                        </Col>
                                        <Col className="d-flex justify-content-center pt-5">
                                            <Button variant="primary" type="submit" className="btn-home text-center">Submit</Button>
                                        </Col>                                       
                                    </Form.Row>
                                </Form>
                           </Col>
                           <Col lg={2}></Col>
                        </Row>
                    </Col>                
                </Row>
            </div>
        </div>
        <div className="container-fluid bg-lightPink">
            <Row>
                <Col xl={12}>
                    <ReadAdviceAndIdeas/>
                </Col>
                <Col xl={12}>
                    <ContactUsToGetBestDeal/>
                </Col>
            </Row>
        </div>
        </React.Fragment>
    );
}
export default VenuBookingService;
