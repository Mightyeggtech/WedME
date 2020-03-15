import React from "react";
import { Row } from "react-bootstrap";
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
function Review () {
    return (
        <React.Fragment>
            <section className="wrap paB-80 paT-80">
                <div className="container-fluid">
                    <Row>
                        <Col lg={12}>
                            <p className="font-cormorant text-purple">Home > Vendors > Wedding Photographers > Dhaka > Reviews</p>
                        </Col>
                    </Row>
                    <Row className="paB-80 shadowed mx-0 my-5 px-lg-5">
                        <Col xs={12} className="text-purple paT-80 pb-5"><h2 className="text-center">REVIEWS</h2></Col>
                        <Col xl={12}>     
                            <Form  className="review-section">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Row>
                                            <h5 className="col-lg-9 font-montserrat text-purple">Review Radisson Blu Resort</h5>
                                            <h5 className="col-lg-3 font-montserrat text-purple">Rating: 3.00</h5>
                                        </Row>
                                        <Form.Label className="starRating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></Form.Label>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>    
                                    <Form.Group as={Col}>
                                        <Row>
                                            <h5 className="col-lg-9 font-montserrat text-purple">Rate vendor*</h5>
                                            <h5 className="col-lg-3 font-montserrat text-purple">Rating: 3.00</h5>
                                        </Row>
                                        <Form.Label className="starRating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></Form.Label>
                                    </Form.Group>                                    
                                </Form.Row>
                                <Form.Row >
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control as="textarea" rows="6" placeholder="Please share your experience with us" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Control type="text" placeholder="How much you paid for vendors" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Control type="file" placeholder="How much you paid for vendors" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity" className="socialIconForShare">
                                    {['checkbox'].map(type => (
                                        <div key={`custom-inline-${type}`} className="mb-3">
                                        <Form.Check
                                            custom 
                                            inline
                                            label={<FaFacebookF/>}
                                            type={type}
                                            id={`custom-inline-${type}-1`}
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            label={<FaTwitter/>}
                                            type={type}
                                            id={`custom-inline-${type}-2`}
                                        />
                                        </div>
                                    ))}                                      
                                    </Form.Group>
                                </Form.Row>
                                <div className="d-flex justify-content-end paT-80 paB-80">
                                    <a href="/#" type="submit" className=" btn-generic col-3 text-center font-white font-cormorant">
                                        Submit
                                    </a>
                                </div>
                            </Form>
                        </Col>
                        <Col xl={12}>
                            <Row className="shadowed review-card my-4 mx-2 px-3  py-5">
                                <Col lg={2} className="text-center"> <Image src="img/hero-single-vendor.png" className="img-fluid"/></Col>
                                <Col lg={10}>
                                    <Row>
                                        <Col sm={5} className="review-info pb-4">
                                            <h4 className="font-montserrat mb-0">Sabiha Jahan</h4>
                                            <small className="font-montserrat">4 months ago</small>
                                        </Col>
                                        <Col sm={7}>
                                            <ul className=" d-flex justify-content-md-end align-items-center font-montserrat">
                                                <li className="pr-4">Share on:</li>
                                                <li className="socialIconForShare pr-3"><a href="/#"><FaFacebookF/></a></li>
                                                <li className="socialIconForShare pr-3"><a href="/#"><FaTwitter/></a></li>
                                                <li><div className="review-card-star-vendors"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}> 
                                            <p className="font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, harum! Consectetur cum facilis sint dignissimos enim culpa fugit nemo dolorem. Quos magnam quaerat exercitationem assumenda distinctio optio, at quisquam? Error. <a href="/#" className="read-more">Read More</a></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>  
                            <Row className="shadowed review-card my-4 mx-2 px-3  py-5">
                                <Col lg={2} className="text-center"> <Image src="img/hero-single-vendor.png" className="img-fluid"/></Col>
                                <Col lg={10}>
                                    <Row>
                                        <Col sm={5} className="review-info pb-4">
                                            <h4 className="font-montserrat mb-0">Sabiha Jahan</h4>
                                            <small className="font-montserrat">4 months ago</small>
                                        </Col>
                                        <Col sm={7}>
                                            <ul className=" d-flex justify-content-md-end align-items-center font-montserrat">
                                                <li className="pr-4">Share on:</li>
                                                <li className="socialIconForShare pr-3"><a href="/#"><FaFacebookF/></a></li>
                                                <li className="socialIconForShare pr-3"><a href="/#"><FaTwitter/></a></li>
                                                <li><div className="review-card-star-vendors"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}> 
                                            <p className="font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, harum! Consectetur cum facilis sint dignissimos enim culpa fugit nemo dolorem. Quos magnam quaerat exercitationem assumenda distinctio optio, at quisquam? Error. <a href="/#" className="read-more">Read More</a></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>                        
                            <Row>
                                <Col xs={12}>
                                    <div class="d-flex justify-content-center">
                                        <button type="submit" class="btn-home font-cormorant btn btn-primary">See More</button></div>
                                </Col>
                            </Row>
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
                </div>
            </section>
            <div className="container-fluid">
                <ReadAdviceAndIdeas/>
            </div>
        </React.Fragment>
    );
}

export default Review;