import React from "react";
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Radio } from 'react'
import { FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';

function Vendors () {
    return (
        <React.Fragment>
            <div className="wrap paB-80 paT-80">
                <section className="container-fluid vendors">
                    <Row><Col sm={12}><div className="font-cormorant pb-4">Home > Vendors > Wedding Venues</div></Col></Row>
                    <Row className="">
                        <Col xl={9}>
                            <Row>
                                <Col sm={12} md={6} lg={6} lg={12}>
                                    <Row className="border-2 post-wrap mb-4">
                                        <Col lg={5}>
                                            <Image src='/img/photo.png' className="img-fluid"/>
                                        </Col>
                                        <Col lg={7} className="pt-4 px-4">
                                            <Row>
                                                <Col lg={7}>
                                                    <div><h3>Radisson Blu Resort</h3></div>
                                                    <div><h4><span className="pr-2"><FiMapPin/></span>Delhi NCR (View on Map)</h4></div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className="review-star-vendors mx-auto"><span className="font-28 pr-1"><FaStar/></span><span className="number">5</span></div>
                                                    <div><h4 class="mt-2 text-center">34 reviews</h4></div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={8}>
                                                    <p className="font-cormorant">Lorem Ipsum Dolor Sit Amet, Consectetur 
        Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad <a href="#" className="read-more">Read More</a> 
                                                    </p>
                                                </Col>
                                                <Col lg={4}></Col>
                                            </Row>
                                            <Row className ="pb-3">
                                                <Col lg={6}>
                                                    <h4>Core specialty</h4>
                                                    <p className="font-cormorant">Lorem Ipsum </p>
                                                </Col>
                                                <Col lg={6} className="d-flex align-items-center justify-content-center">
                                                    <a href="#" className="browseAllVendors">View Details</a>
                                                </Col>
                                            </Row>                                    
                                            <Row className="dashed-border-top">
                                                <Col>
                                                    <h3 className="py-3">৳ 40,000<span className="per-plate"> per plate</span></h3>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} md={6} lg={6} lg={12}>
                                    <Row className="border-2 post-wrap mb-4">
                                        <Col lg={5}>
                                            <Image src='/img/photo.png' className="img-fluid"/>
                                        </Col>
                                        <Col lg={7} className="pt-4 px-4">
                                            <Row>
                                                <Col lg={7}>
                                                    <div><h3>Radisson Blu Resort</h3></div>
                                                    <div><h4><span className="pr-2"><FiMapPin/></span>Delhi NCR (View on Map)</h4></div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className="review-star-vendors mx-auto"><span className="font-28 pr-1"><FaStar/></span><span className="number">5</span></div>
                                                    <div><h4 class="mt-2 text-center">34 reviews</h4></div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={8}>
                                                    <p className="font-cormorant">Lorem Ipsum Dolor Sit Amet, Consectetur 
        Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad <a href="#" className="read-more">Read More</a> 
                                                    </p>
                                                </Col>
                                                <Col lg={4}></Col>
                                            </Row>
                                            <Row className ="pb-3">
                                                <Col lg={6}>
                                                    <h4>Core specialty</h4>
                                                    <p className="font-cormorant">Lorem Ipsum </p>
                                                </Col>
                                                <Col lg={6} className="d-flex align-items-center justify-content-center">
                                                    <a href="#" className="browseAllVendors">View Details</a>
                                                </Col>
                                            </Row>                                    
                                            <Row className="dashed-border-top">
                                                <Col>
                                                    <h3 className="py-3">৳ 40,000<span className="per-plate"> per plate</span></h3>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} md={6} lg={6} lg={12}>
                                    <Row className="border-2 post-wrap mb-4">
                                        <Col lg={5}>
                                            <Image src='/img/photo.png' className="img-fluid"/>
                                        </Col>
                                        <Col lg={7} className="pt-4 px-4">
                                            <Row>
                                                <Col lg={7}>
                                                    <div><h3>Radisson Blu Resort</h3></div>
                                                    <div><h4><span className="pr-2"><FiMapPin/></span>Delhi NCR (View on Map)</h4></div>
                                                </Col>
                                                <Col lg={5}>
                                                    <div className="review-star-vendors mx-auto"><span className="font-28 pr-1"><FaStar/></span><span className="number">5</span></div>
                                                    <div><h4 class="mt-2 text-center">34 reviews</h4></div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={8}>
                                                    <p className="font-cormorant">Lorem Ipsum Dolor Sit Amet, Consectetur 
        Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad <a href="#" className="read-more">Read More</a> 
                                                    </p>
                                                </Col>
                                                <Col lg={4}></Col>
                                            </Row>
                                            <Row className ="pb-3">
                                                <Col lg={6}>
                                                    <h4>Core specialty</h4>
                                                    <p className="font-cormorant">Lorem Ipsum </p>
                                                </Col>
                                                <Col lg={6} className="d-flex align-items-center justify-content-center">
                                                    <a href="#" className="browseAllVendors">View Details</a>
                                                </Col>
                                            </Row>                                    
                                            <Row className="dashed-border-top">
                                                <Col>
                                                    <h3 className="py-3">৳ 40,000<span className="per-plate"> per plate</span></h3>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>                                                              
                            </Row>
                        </Col>
                        <Col xl={3} className="filter">
                           <div>
                               <div>
                                    <Form >
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
                                        <div className="pos-relative"><h3>VENDORS <span></span></h3></div>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label><div className="pos-relative"><h4>Dance & Music</h4></div></Form.Label>
                                            <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label><div className="pos-relative"><h4>Invites & Gifts</h4></div></Form.Label>
                                            <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="pos-relative">
                                            <h4>Photographers</h4>
                                        </div>
                                        <div className="pt-2">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group1"/>
                                                    <InputGroup.Text >Photographers</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Cinema/Video</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group3"/>
                                                    <InputGroup.Text >Pre Wedding Shoot</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                        </div>
                                        <div className="pos-relative">
                                            <h4>Makeup</h4>
                                        </div>
                                        <div>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group1"/>
                                                    <InputGroup.Text >Bridal Makeup</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Family Makeup</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                        </div>
                                        <div className="pos-relative">
                                            <h4>Bridal Wear</h4>
                                        </div>
                                        <div>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group1"/>
                                                    <InputGroup.Text >Bridal Lehengas</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Kanjeevaram / Silk Sarees</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group3"/>
                                                    <InputGroup.Text >Cocktail Gowns</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group3"/>
                                                    <InputGroup.Text >Trousseau Sarees</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group3"/>
                                                    <InputGroup.Text >View All Bridal Wear</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>                                                                                            
                                        </div>
                                        <div className="pos-relative">
                                            <h4>Groom Wear</h4>
                                        </div>
                                        <div>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group1"/>
                                                    <InputGroup.Text >Sherwani</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup> 
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Wedding Suits / Tuxes</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >View All Groom Wear</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>                                              
                                        </div>
                                        <div className="pos-relative">
                                            <h4>Planning & Decor</h4>
                                        </div>
                                        <div>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Wedding Planners</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Radio  name="group2"/>
                                                    <InputGroup.Text >Decor</InputGroup.Text>
                                                </InputGroup.Prepend>
                                            </InputGroup>                                              
                                        </div>                                                                                                                                                                 
                                    </Form>
                               </div>
                           </div>
                        </Col>                        
                    </Row>
                    <Row className="VOVBS paT-80 paB-80">
                        <Col lg={12}>
                            <Row className="pb-5">
                            <Col lg ={2} ></Col>
                            <Col lg ={8}>
                                <h1 className="text-center text-white font-uppercase">Read Advice & Ideas</h1>
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
            <div class="container-fluid" id="homeReadAdviceAndIdeas">
                <ReadAdviceAndIdeas/>
            </div> 
        </React.Fragment>
    );
}
export default Vendors;