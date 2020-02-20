import React, { Component } from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import HomeReadAdviceAndIdeas from './Home/homereadadviceandideas.jsx';
function SingleRealWedding () {
    return (
        <React.Fragment>
            <div className="wrap paB-80">
                <section id="herosection">        
                    <div className="container-fluid">
                        {/* Section 1 (Hero Section) */}
                        <Row className="heroimgrealWedding">
                            <div className="overlay"></div>
                            <Col sm={12} className="align-self-center">
                                <Row>
                                    <Col xl ={2} ></Col>
                                    <Col lg={12} xl ={8} className="align-self-center"> 
                                        <div className="custom-items-align ">
                                        <h1 className="home-title">OUR . FOREVER . AFTER</h1>
                                        <p className="font-cormorant">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                        </div>
                                    </Col>
                                    <Col xl ={2} ></Col>                                
                                </Row>
                            </Col>
                        </Row>
                        {/* Section 1 (Hero Section) End */}
                        <Row className="py-5">
                            <Col lg ={2} ></Col>
                            <Col lg ={8}>
                                <h1 className="text-center font-montserrat">OUR . FOREVER . AFTER</h1>
                                <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </Col>
                            <Col lg ={2} ></Col>    
                        </Row>
                        
                        <Row className="bg-lightPink mx-0 " id="singleVendorGrid">
                            <Col lg={12}>
                                <Tabs defaultActiveKey="allFunction">
                                    <Tab eventKey="allFunction" title="All Function">
                                        <Tabs defaultActiveKey="Portfolio" >
                                            <Tab eventKey="Portfolio" title="Portfolio">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid" /></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center pb-4">
                                                    <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Albums" title="Albums">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center pb-4">
                                                    <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="videos" title="videos">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center  pb-4">
                                                        <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>                                                
                                        </Tabs> 
                                    </Tab>
                                    <Tab eventKey="about" title="About">
                                        <Tabs defaultActiveKey="Portfolio" >
                                            <Tab eventKey="Portfolio" title="Portfolio">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid" /></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                    <li><Card.Img src="/img/photo.png" className="img-fluid"/></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center pb-4">
                                                    <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Albums" title="Albums">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center pb-4">
                                                    <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="videos" title="videos">
                                                <ul className="single-vendor-grid py-3">
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                    <li><Card.Img variant="top" src="/img/photo.png" /></li>
                                                </ul>
                                                <Row className="d-flex justify-content-center  pb-4">
                                                        <Button variant="primary" type="submit" className="btn-home col-3">Submit</Button>
                                                </Row>
                                            </Tab>                                                
                                        </Tabs> 
                                    </Tab>
                                </Tabs>                                           
                            </Col>
                        </Row> 


                        
                        <Row className="real-wedding-section2">
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="#" className="my-4">Click Here</a>
                                        </div>
                                    </div>
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="#" className="my-4">Click Here</a>
                                        </div>
                                    </div>                                
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="#" className="my-4">Click Here</a>
                                        </div>
                                    </div>                                  
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>                                                                        
                        </Row> 
                    </div>
                </section>
            </div>
            <div class="container-fluid" id="homeReadAdviceAndIdeas">
                <HomeReadAdviceAndIdeas/>
            </div> 
        </React.Fragment>
        );
    }
    export default SingleRealWedding;
