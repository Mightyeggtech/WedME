import React from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { GoPrimitiveDot } from "react-icons/go";
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
import ContactUsToGetBestDeal from './contactUsToGetBestDeal.jsx';
function BlogSingle () {
    return (
        <React.Fragment>
            <div className="wrap paB-80">
                <section className="container-fluid">
                    <Row className="paT-80">
                        <Col xl={9}>
                            <Carousel className="blog-main-hero-carousel">
                                <Carousel.Item>
                                    <img className="d-block w-100" 
                                        src="img/girl-pink-background.jpg" 
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
                                    src="/img/ring.jpg" 
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
                                    src="img/pinkbride-whitegrom.jpg"
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
                            <Row>
                                <Col lg={12} className="py-5 blog-single-paragraph">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam voluptatum reiciendis, quae placeat itaque nostrum nobis accusamus minima modi velit quos quod laudantium odit! Voluptatibus quidem tenetur temporibus enim.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={3} className="popularPosts">
                            <div className="pos-relative pt-2">
                                <div className="filter">
                                    <h4>Popular Posts</h4>
                                </div>
                            </div>
                            <a href="/blog-single">
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/BridalMakeupPhoto.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>
                            </a>
                            <a href="/blog-single">
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/weddingDecorators.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>
                            </a>
                            <a href="/blog-single">
                                <Row className="recent-posts py-3">
                                    <Col xs={4}>
                                        <Image src="/img/BridalMakeupPhoto.png" className="img-fluid" />
                                    </Col>
                                    <Col xs={8}>
                                        <small className="font-cormorant">June 3, 2019 <GoPrimitiveDot/> Sushmita Roy Chowdhury</small>
                                        <h3 className="py-2 text-purple">Approaches To Improve Your Fashion</h3>
                                    </Col>
                                </Row>
                            </a>
                            <div className="pos-relative pt-2">
                                <div className="filter">
                                    <h4>Photos</h4>
                                </div>
                            </div>
                            <Row>
                                <Col lg={12}>
                                    <div className="blog-single-photos py-3">
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                        <div><Image src="/img/weddingDecorators.png" className="img-fluid" /></div>
                                    </div>
                                </Col>
                            </Row>                                                                    
                        </Col>
                    </Row>

                    {/* <Row>
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
                    </Row> */}
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
    export default BlogSingle;
