import React from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap'; 
import { FormControl } from 'react-bootstrap'; 
import { FiSearch } from "react-icons/fi"
import { GoPrimitiveDot } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
import ContactUsToGetBestDeal from './contactUsToGetBestDeal.jsx';
function BlogMain () {
    return (
        <React.Fragment>
            <div className="wrap paB-80">
                <section className="container-fluid">
                    <Row className="paT-80">
                        <Col lg={9}>
                            <Carousel className="blog-main-hero-carousel">
                                <Carousel.Item>
                                    <img className="d-block w-100" 
                                        src="img/hero-single-vendor.png" 
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <div>
                                            <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                            <h3>Approaches To Improve Your Fashion</h3>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src="/img/hero-home.png" 
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <div>
                                            <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sarah Ali Khan</small>
                                            <h3>Approaches To Improve Your Fashion</h3>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                    className="d-block w-100"
                                    src="img/BridalMakeupPhoto.png"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <div>
                                            <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sagufta Khatun</small>
                                            <h3>Approaches To Improve Your Fashion</h3>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col lg={3}>
                            <Form className="filter">
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="button-textbox"
                                    />
                                    <InputGroup.Append className="button-search">
                                    <Button variant="outline-secondary"><FiSearch/></Button>
                                    </InputGroup.Append>
                                </InputGroup>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>
                                        <div className="pos-relative pt-2">
                                            <h4>Catagories</h4>
                                        </div>
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option>Wedding Vendors</option>
                                        <option>Wedding Planner</option>
                                        <option>Wedding Cards</option>
                                        <option>Wedding Videography</option>
                                        <option>Wedding Photographers</option>
                                        <option>Bridal Makeup</option>
                                        <option>Family Makeup</option>
                                        <option>Wedding Jewellery</option>
                                        <option>Wedding Catering</option>
                                        <option>Trousseau Packers</option>
                                        <option>DJ</option>
                                        <option>Wedding Accessories</option>
                                        <option>Wedding Favors</option>
                                        <option>Bartenders</option>
                                        <option>Wedding Entertainment</option>
                                        <option>Pre Wedding Photographers</option>
                                    </Form.Control>
                                </Form.Group>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            </Form>
                            <div className="pos-relative pt-2">
                                <div className="filter">
                                    <h4>Popular Posts</h4>
                                </div>
                            </div>
                            <div>
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/BridalMakeupPhoto.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/weddingDecorators.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/BridalMakeupPhoto.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>                                                                
                            </div>      
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="blog-main-post-grid paB-80">
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>
                                <div className="blog-main-post-card my-3">
                                    <Image src="/img/BridalWear.png"/>
                                    <div className="blog-main-post-card-content px-4">
                                        <div className="py-3 date-name"><small>June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small></div>
                                        <h3 className="text-purple">Approaches To Improve Your Fashion</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quia ab minus aspernatur, sequi praesentium. Neque maxime placeat facilis! Quidem in facere cumque veritatis consectetur eligendi, illum aliquid deleniti repudiandae.</p>
                                        <div className="font-cormorant">Tagged: <a href="#">BridalWear</a> <GoPrimitiveDot/> <a href="#">Fashionable</a> <GoPrimitiveDot/> <a href="#">Designed</a> <GoPrimitiveDot/> <a href="#">Elegant</a></div>
                                        <a href="#" className="py-3 d-block">Discover</a>
                                    </div>
                                </div>                                                                                                                                
                            </div>
                        </Col>
                    </Row>
                    <Row className="VOVBS paT-80 paB-80 mx-0">
                        <Col lg={12}>
                            <Row className="pb-5">
                            <Col lg ={2} ></Col>
                            <Col lg ={8}>
                                <h1 className="text-center text-white font-uppercase font-montserrat">View Our Venue Booking Service</h1>
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
                </section>
            </div>
            <section className="container-fluid">
                <ReadAdviceAndIdeas/>
                <ContactUsToGetBestDeal/>
            </section>
        </React.Fragment>
        );
    }
    export default BlogMain;
