import React from "react";
import { Row } from "react-bootstrap";
import { Col } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa"; 
import { Form } from "react-bootstrap";
import { Checkbox } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import VenuBookingService from './venuebookingservice.jsx';
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
function SingleVendor () {
    return (
        <React.Fragment>
            <section className="wrap paB-80 paT-80">
                <div className="container-fluid">
                    <Row>
                        <Col lg={12}>
                            <p className="font-cormorant text-purple">Home > Vendors > Wedding Venues > Dhaka > Radisson Blu Resort</p>
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col lg={12}>
                                    <Image src="img/hero-single-vendor.png" className="img-fluid"/>
                                </Col>
                                <Col lg={12} className="single-details">
                                    <Row className="mx-0 bg-lightPink p-4 mt-3 ">
                                        <Col lg={7}>
                                            <div><h3 className="single-page-title">Radisson Blu Resort</h3></div>
                                            <div><h4><a href=""><span className="pr-2"><FiMapPin/></span>Delhi NCR (View on Map)</a></h4></div>
                                            <div><h4><a href=""><span className="pr-2"><FiPhoneCall/></span>Contact</a></h4></div>
                                        </Col>
                                        <Col lg={5}>
                                            <div className="review-star-vendors mx-auto"><span className="font-28 pr-1"><FaStar/></span><span className="number">5</span></div>
                                            <div><h4 className="mt-2 text-center"><a href="#">34 reviews</a></h4></div>
                                            <div><h4 className="text-center"><a href="#"><FaRegHeart/> Shortlist</a></h4></div>
                                        </Col>
                                    </Row>
                                    <Row className="mx-0 bg-dark-pink">
                                        <Col lg={4}  className="text-center py-4"><a href=""><IoMdPhotos/> Photos</a></Col>
                                        <Col lg={4}  className="text-center py-4"><a href=""><FaPenNib/> Write a Review</a></Col>
                                        <Col lg={4}  className="text-center py-4"><a href=""><FiShare2/> Share</a></Col>
                                    </Row>
                                    <Row className="my-4 mx-0 bg-dark-purple">
                                        <Col lg={4} className="text-center py-4"><a href=""><IoMdPhotos/> Photos</a></Col>
                                        <Col lg={4} className="text-center py-4"><a href=""><FaPenNib/> Write a Review</a></Col>
                                        <Col lg={4} className="text-center py-4"><a href=""><FiShare2/> Share</a></Col>
                                    </Row>
                                    <Row className="bg-lightPink mx-0 " id="singleVendorGrid">
                                        <Col lg={12}>
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
                                        </Col>
                                    </Row>                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <Row>
                                <Col lg={12}>
                                    <Card className="single-PDPE">
                                        <Card.Title>Per Day Price Estimate</Card.Title>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={6} className="pb-4"><h4>55,000 BDT (per day)</h4></Col>
                                                <Col xs={6} className="pb-4"><h4>Photo change</h4></Col>
                                            </Row>
                                            <Row>
                                                <Col xs={6} className="pb-4"><h4>80,000 BDT (per day)</h4></Col>
                                                <Col xs={6} className="pb-4"><h4>(photo + video)</h4></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Row className="my-4">
                                        <Col sm={6}><a href="#" className="single-BSV-btn btn text-white ">VIEW CONTACT</a></Col>
                                        <Col sm={6}><a href="#" className="single-BSV-btn btn text-white">SEND MESSAGE</a></Col>
                                    </Row>                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <Card  className="single-BSV">
                                        <Card.Body>
                                        <Row>
                                            <Col sm={7}><h4 className="single-BSV-title text-purple">Browse Similar Vendors</h4></Col>
                                            <Col sm={5}><h4 className="single-BSV-title text-lightpink">View All</h4></Col>
                                        </Row>
                                        <Row className="my-3 mx-1 shadowed">
                                            <Col sm={4} className="p-0">
                                                <Image src="img/hero-single-vendor.png" className="img-fluid h-100"/>
                                            </Col>
                                            <Col sm={8} className="p-3">
                                                <Row>
                                                    <Col sm={6}>
                                                        <h4 className="single-BSV-post text-purple">Radisson Blu Resort</h4>
                                                        <h4><a href="" className="single-BSV-post text-purple"><span className="pr-2"><FiMapPin/></span>Dhaka</a></h4>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Row>
                                                            <Col xs={12}><div className="review-card-star-vendors mx-auto"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></Col>
                                                            <Col xs={12}><div className="text-center single-BSV-post text-purple">34 reviews</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12} className="single-BSV-post text-purple">20,000 BTD (per plate)</Col>
                                                </Row>
                                            </Col>                                            
                                        </Row>   
                                        <Row className="my-3 mx-1 shadowed">
                                            <Col sm={4} className="p-0">
                                                <Image src="img/hero-single-vendor.png" className="img-fluid h-100"/>
                                            </Col>
                                            <Col sm={8} className="p-3">
                                                <Row>
                                                    <Col sm={6}>
                                                        <h4 className="single-BSV-post text-purple">Radisson Blu Resort</h4>
                                                        <h4><a href="" className="single-BSV-post text-purple"><span className="pr-2"><FiMapPin/></span>Dhaka</a></h4>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Row>
                                                            <Col xs={12}><div className="review-card-star-vendors mx-auto"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></Col>
                                                            <Col xs={12}><div className="text-center single-BSV-post text-purple">34 reviews</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12} className="single-BSV-post text-purple">20,000 BTD (per plate)</Col>
                                                </Row>
                                            </Col>                                            
                                        </Row>                                       
                                        </Card.Body>
                                    </Card>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row id="aboutVendor" className="mx-0 my-5">
                        <Col lg={12} className="shadowed paT-80 paB-80 ">
                            <Row>
                                <Col lg={1}></Col>
                                <Col lg={10}>
                                    <h2 className="text-center pb-4 text-purple">About Vendor</h2>
                                    <p className="text-center font-cormorant">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod. Et tortor at risus viverra adipiscing. Eu volutpat odio facilisis mauris sit amet. Massa sapien faucibus et molestie ac. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Egestas congue quisque egestas diam in arcu cursus euismod quis. Senectus et netus et malesuada fames ac turpis egestas. Quis auctor elit sed vulputate mi sit amet mauris. Quis blandit turpis cursus in hac habitasse platea dictumst. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Lectus arcu bibendum at varius vel.</p>
                                    <Row className="d-flex justify-content-center pt-4">
                                        <a href="" type="submit" className="btn-generic col-3 text-center font-white font-cormorant">Read More</a>
                                    </Row>
                                </Col>
                                <Col lg={1}></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row id="singleFeatures" className="paT-80 paB-80">
                        <Col lg={12}>
                            <h2 className="text-center text-purple pb-4">Features</h2>
                            <Row className="single-vendor-features">
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Dedicated Venue Expert (on ground)</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Personalised venue suggestions</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Confirmed availability of shortlisted venues within 24 hours</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Guided site visits for up to 5 properties</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Negotiated prices for 2 shortlisted venues and best deal (upto 30% off)</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={3} lg={4} className="text-center"><div><FaUserTie/></div></Col>
                                                <Col xs={9} lg={8}><h3>Currently available only in Dhaka and Chittagong</h3></Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>                                                                                                                                                                                             
                            </Row>
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
                                    <Form.Group as={Col} controlId="" className="socialIconForShare">
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
                                    <a href="" type="submit" className=" btn-generic col-3 text-center font-white font-cormorant">
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
                                            <h4 className="font-montserrat mb-0 text-purple">Sabiha Jahan</h4>
                                            <small className="font-montserrat">4 months ago</small>
                                        </Col>
                                        <Col sm={7}>
                                            <ul className=" d-flex justify-content-md-end align-items-center font-montserrat">
                                                <li className="pr-4 text-purple">Share on:</li>
                                                <li className="socialIconForShare pr-3"><a href=""><FaFacebookF/></a></li>
                                                <li className="socialIconForShare pr-3"><a href=""><FaTwitter/></a></li>
                                                <li><div className="review-card-star-vendors"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}> 
                                            <p className="font-montserrat text-purple">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, harum! Consectetur cum facilis sint dignissimos enim culpa fugit nemo dolorem. Quos magnam quaerat exercitationem assumenda distinctio optio, at quisquam? Error. <a href="#" className="read-more">Read More</a></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>  
                            <Row className="shadowed review-card my-4 mx-2 px-3  py-5">
                                <Col lg={2} className="text-center"> <Image src="img/hero-single-vendor.png" className="img-fluid"/></Col>
                                <Col lg={10}>
                                    <Row>
                                        <Col sm={5} className="review-info pb-4">
                                            <h4 className="font-montserrat mb-0 text-purple">Sabiha Jahan</h4>
                                            <small className="font-montserrat">4 months ago</small>
                                        </Col>
                                        <Col sm={7}>
                                            <ul className=" d-flex justify-content-md-end align-items-center font-montserrat">
                                                <li className="pr-4 text-purple">Share on:</li>
                                                <li className="socialIconForShare pr-3"><a href=""><FaFacebookF/></a></li>
                                                <li className="socialIconForShare pr-3"><a href=""><FaTwitter/></a></li>
                                                <li><div className="review-card-star-vendors"><span className="font-22 pr-2"><FaStar/></span><span className="number">5</span></div></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}> 
                                            <p className="font-montserrat text-purple">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, harum! Consectetur cum facilis sint dignissimos enim culpa fugit nemo dolorem. Quos magnam quaerat exercitationem assumenda distinctio optio, at quisquam? Error. <a href="#" className="read-more">Read More</a></p>
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

export default SingleVendor;