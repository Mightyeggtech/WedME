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
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiShirt } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";

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
                                        <h1 className="home-title font-montserrat text-white text-center font-uppercase">Summer & Saad</h1>
                                        <p className="font-cormorant">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                        </div>
                                    </Col>
                                    <Col xl ={2} ></Col>                                
                                </Row>
                            </Col>
                        </Row>
                        <Row className="single-realwedding-section2">
                            <Col xs={1} sm={1} md={2}></Col>
                            <Col xs={10} sm={10} md={8}>
                                <Row className="bg-white single-realwedding-section2-inner">
                                    <Col lg={5} className="d-flex justify-content-center">
                                        <Image src='/img/single-realwedding.png'  className="img-fluid  pb-2"/>    
                                    </Col>
                                    <Col lg={7}>
                                        <Row className="d-flex align-items-center">
                                            <Col xs={12} className="d-flex justify-content-center">
                                                <p className="font-cormorant text-center text-purple pt-4">Intimate Wedding In Old Dhaka With The Bride In Ethereal Jewellery... <a href="">Read Blog</a></p>
                                            </Col>
                                            <Col xs={12} className="d-flex justify-content-center">
                                                <a href="#taggedvendors" className="btn browseAllVendors my-3 font-montserrat text-purple text-center font-uppercase ">View Tagged Vendors</a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={1} sm={1} md={2}></Col>
                        </Row>
                        {/* Section 1 (Hero Section) End */}
                        <Row className="pt-5 pb-3">
                            <Col lg ={12}>
                                <h4 className="font-montserrat text-purple font-uppercase paT-80 font-weight-bold">Photo Gallery</h4>
                            </Col>  
                        </Row>
                        <Row className="bg-lightPink mx-0 " id="singleVendorGrid">
                            <Col lg={12} className="px-0 ">
                                <Tabs defaultActiveKey="allFunction" className="singleVendor">
                                    <Tab eventKey="allFunction" title="All Function" className="allFunction">
                                        <Tabs defaultActiveKey="Reception" >
                                            <Tab eventKey="Reception" title="Reception">
                                                <ul className="single-vendor-grid p-3">
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
                                                    <a href="#" class="btn browseAllVendors my-3 font-montserrat text-purple text-center font-uppercase">View All</a>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Wedding" title="Wedding">
                                                <ul className="single-vendor-grid p-3">
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
                                                    <a href="#" class="btn browseAllVendors my-3 font-montserrat text-purple text-center font-uppercase">View All</a>
                                                </Row>
                                            </Tab>
                                            <Tab eventKey="Mehendi" title="Mehendi">
                                                <ul className="single-vendor-grid p-3">
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
                                                    <a href="#" class="btn browseAllVendors my-3 font-montserrat text-purple text-center font-uppercase">View All</a>
                                                </Row>
                                            </Tab>                                                
                                        </Tabs> 
                                    </Tab>
                                    <Tab eventKey="topPhotos" title="Top Photos" className="about">
                                        <ul className="single-vendor-grid p-3">
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
                                            <a href="#" class="btn browseAllVendors my-3 font-montserrat text-purple text-center font-uppercase">View All</a>
                                        </Row>
                                    </Tab>
                                </Tabs>                                           
                            </Col>
                        </Row>        
                        <Row>
                            <Col lg ={12}>
                                <h4 className="font-montserrat text-purple font-uppercase paT-80 pb-4 font-weight-bold text-center">Tagged Vendors</h4>
                            </Col>
                        </Row>
                        <Row id="taggedvendors">
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><FaCameraRetro/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">House On The Clouds</h6></div>
                                        <div className="font-cormorant">Photographers</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><GiVikingLonghouse/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">The Ananta</h6></div>
                                        <div className="font-cormorant">Venues</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><IoMdTimer/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">Facts & Fiction Pvt Ltd</h6></div>
                                        <div className="font-cormorant">Wedding Planners</div>
                                    </div>
                                </div>
                            </Col>                            
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><GiLipstick/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">Pratibha Biswas</h6></div>
                                        <div className="font-cormorant">Bridal Makeup</div>
                                    </div>
                                </div>
                            </Col>  
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><FaHeadphones/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">DJ Sahil</h6></div>
                                        <div className="font-cormorant">Djs</div>
                                    </div>
                                </div>
                            </Col>  
                            <Col lg ={4} className="py-3 d-flex justify-content-center">
                                <div className="tagged-vendor">
                                    <div className="col-tagged-vendor"><GiShirt/></div>
                                    <div className="col-tagged-vendor pl-4">
                                        <div><h6 className="font-montserrat text-purple font-uppercase font-weight-bold">Abu Jani Sandeep Khosla</h6></div>
                                        <div className="font-cormorant">Groom Wear</div>
                                    </div>
                                </div>
                            </Col>  
                        </Row>                        
                        <Row className="real-wedding-section2">
                            <Col sm={12}>
                                <h2 className="font-montserrat text-purple text-center font-uppercase paT-80 pb-5">SIMILLAR WEDDINGS</h2>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="#" className="my-4">Click Here</a>
                                        </div>
                                    </div>
                                    <div><Image src='/img/hero-home.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/BookingSearvicesImages.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
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
                                    <div><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
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
                                    <h1 className="text-center text-white font-uppercase font-montserrat text-purple">View Our Venue Booking Service</h1>
                                    <p className="font-cormorant text-white  text-center">Practical, On Trend Advice You Cannot Afford To Miss Out. Think Of It Like Your Wedding Planning BFF.</p>
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
                                        <h3 className="text-center font-uppercase font-montserrat text-purple">Discover Wedding Ideas</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg ={6} xl ={4} className="my-2">
                                <Card className="second-section-vendor-card p-4">
                                    <div className="cardIconFix">
                                        <Card.Img src="/img/material-event-note.png"/> 
                                    </div>
                                    <Card.Body>
                                        <h3 className="text-center font-uppercase font-montserrat text-purple">Book Trusted Vendors</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg ={6} xl ={4} className="my-2">
                                <Card className="second-section-vendor-card p-4">
                                    <div className="cardIconFix">
                                        <Card.Img src="/img/material-description.png"/>
                                    </div>
                                    <Card.Body>
                                        <h3 className="text-center font-uppercase font-montserrat text-purple">Always Stay Organised</h3>
                                    </Card.Body>
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
