import React, { Component } from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

function HomeSection (){
    return (
        <div className="container-fluid">
            {/* Section 1 (Hero Section) */}
            <Row className="heroimg">  
                <Col xl ={2} ></Col>
                <Col lg={12} xl ={8} className=" align-self-center"> 
                    <div className="custom-items-align ">
                    <h1 className="home-title font-montserrat text-center font-uppercase">OUR . FOREVER . AFTER</h1>
                    <p className="font-cormorant">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        
                        <Form>
                            <Form.Row  className="justify-content-center">
                            <Form.Group as={Col} className="col-12 col-md-4 home-dropdown">
                                <Form.Control as="select" >
                                    <option>Choose...</option>
                                    <option>a</option>
                                    <option>b</option>
                                    <option>d</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} className="col-12 col-md-4 home-dropdown">
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>c</option>
                                    <option>d</option>
                                    <option>e</option>
                                </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="col-12 col-md-2 btn-home">
                                Submit
                                </Button>
                            </Form.Row>
                        </Form>
                    </div>
                </Col>
                <Col xl ={2} ></Col>
            </Row>
            {/* Section 1 (Hero Section) End */}
            <Row className="py-5">
                <Col lg ={2} ></Col>
                <Col lg ={8}>
                    <h2 className="text-center font-montserrat text-purple font-uppercase">OUR . FOREVER . AFTER</h2>
                    <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </Col>
                <Col lg ={2} ></Col>    
            </Row>
            <Row className="vendor">
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-venues">
                        <Card.Body>
                            <a href="" class="btn">Wedding Venues</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-photography">
                        <Card.Body>
                            <a href="" class="btn">Wedding Photography</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card bridal-makeup">
                        <Card.Body>
                            <a href="" class="btn">Bridal Makeup</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-decorators">
                        <Card.Body>
                            <a href="" class="btn">Wedding Decorators</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card bridal-wear">
                        <Card.Body>
                            <a href="" class="btn">Bridal Wear</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-cards">
                        <Card.Body>
                            <a href="" class="btn">Wedding Cards</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
                <Col lg ={12} className="d-flex justify-content-center">
                    <a href="#" className="btn browseAllVendors my-3">Browse All Categories</a>
                </Col>
            </Row>
            <Row className="py-5">
                <Col lg ={2} ></Col>
                <Col lg ={8}>
                    <h2 className="text-center font-montserrat text-purple font-uppercase">HIRE SERVICES</h2>
                    <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </Col>
                <Col lg ={2} ></Col>    
            </Row>
            <Row className="hireServices pb-5">
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-venues">
                        <Card.Body>
                            <a href="/venue-booking-service" class="btn">Venue Booking Services</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-photography">
                        <Card.Body>
                            <a href="" class="btn">Wedding Photography</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card bridal-makeup">
                        <Card.Body>
                            <a href="" class="btn">Bridal Makeup</a>
                        </Card.Body>
                    </Card>
                </Col>     
            </Row>  
            <Row className="Grid">
                <Col className="grid-bg custom-grid-size" sm={12}>
                    <div className="btn-grid text-center font-cormorant text-white hide-on-mb">
                        <Row className="d-flex align-items-center">
                            <Col sm={12} className="">
                                <p className="p-3">We Love Couples, Their Unique Stories & The Different Ways In Which 
                                    They Go About Planning For Their Big Day! From Quaint
                                    Budget Affairs, To Glam Black Tie Events- The 
                                    Most Inspiring Real Wedding Stories
                                    From Across Cultures & Cities!</p>
                            </Col>
                            <Col sm={12} className="">
                               <a href="/real-wedding" target="_blank" className="mt-4 btn">See Wedding</a>
                            </Col>
                        </Row>
                    </div>
                    <Row className="hide-on-mb">
                        <Col sm={4} lg={4}>
                            <Row>
                                <Col lg={12} className="fluid ImageLessHeight"></Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="pl-0">
                                    <Image src='/img/BookingSearvicesImages.png'  className="img-fluid  ImageMoreHeight py-2"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} lg={4}>
                        <Row>
                            <Col lg={12}>
                                <Image src="/img/makeover.png"  className="img-fluid  ImageMoreHeight pb-2"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Image src="/img/hero.png" className="img-fluid  ImageLessHeight py-2"/>
                            </Col>
                        </Row>
                        </Col>
                        <Col sm={4} lg={4}>
                            <Row>
                                <Col lg={12} className="pr-0"><Image src="/img/indian-woman.png"  className="img-fluid ImageLessHeight pb-2"/></Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="pr-0"><Image src="/img/weddingDecorators.png"  className="img-fluid  ImageMoreHeight py-2"/></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="hide-on-mb">
                       <Col sm={8} lg={8}  className="pl-0">
                           <Image src="/img/weddingPhotography.png"  className="img-fluid ImageLessHeight pt-2"/>
                        </Col>
                        <Col  sm={4} lg={4} className="fluid ImageLessHeight">
                        </Col>                       
                    </Row> 
                    <Row className="bg-dark-purple hide-on-desktop p-4">
                        <Col className="mobile-height">
                            <h2 className="text-white text-center">REAL WEDDING</h2>
                            <Row className="d-flex align-items-center text-center font-cormorant text-white">
                                <Col sm={12} className="">
                                    <p className="p-3">We Love Couples, Their Unique Stories & The Different Ways In Which 
                                        They Go About Planning For Their Big Day! From Quaint
                                        Budget Affairs, To Glam Black Tie Events- The 
                                        Most Inspiring Real Wedding Stories
                                        From Across Cultures & Cities!</p>
                                </Col>
                                <Col sm={12} className="">
                                <a href="/real-wedding" className="mt-4 btn">See Wedding</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="py-5">
                <Col lg ={2} ></Col>
                <Col lg ={8}>
                    <h2 className="text-center font-uppercase font-montserrat text-purple">Read Advice & Ideas</h2>
                    <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </Col>
                <Col lg ={2} ></Col>    
            </Row>
            <Row className="hireServices">
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-venues">
                        <Card.Body>
                            <a href="" class="btn">Wedding Venues</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card wedding-photography">
                        <Card.Body>
                            <a href="" className="btn">Wedding Photography</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card bridal-makeup">
                        <Card.Body>
                            <a href="" className="btn">Bridal Makeup</a>
                        </Card.Body>
                    </Card>
                </Col>                     
            </Row>
            <Row className="paB-80">
                <Col lg ={12} className="d-flex justify-content-center">
                    <a href="#" className="btn browseAllVendors my-3">READ THE BLOG</a>
                </Col>
            </Row>
            {/* View Our Venue Booking Service */}
            <Row className="VOVBS paT-80 paB-80">
                <Col lg={12}>
                    <Row className="pb-5">
                    <Col lg ={2} ></Col>
                    <Col lg ={8}>
                        <h1 className="text-center text-white font-uppercase font-montserrat font-uppercase">Read Advice & Ideas</h1>
                        <p className="font-cormorant text-white  text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                    </Col>
                    <Col lg ={2} ></Col>    
                </Row>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card p-4">
                        <div className="cardIconFix"> 
                            <Card.Img src="/img/awesome-lightbulb.png"/>
                        </div>
                        <Card.Body>
                            <h3 className="text-center">Discover Wedding Ideas</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card p-4">
                        <div className="cardIconFix">
                            <Card.Img src="/img/material-event-note.png"/> 
                        </div>
                        <Card.Body>
                            <h3 className="text-center">Book Trusted Vendors</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg ={6} xl ={4} className="my-2">
                    <Card className="second-section-vendor-card p-4">
                        <div className="cardIconFix">
                            <Card.Img src="/img/material-description.png"/>
                        </div>
                        <Card.Body>
                            <h3 className="text-center">Always Stay Organised</h3>
                        </Card.Body>
                    </Card>
                </Col>                     
            </Row>           
        </div>
        );
    }
    export default HomeSection;
