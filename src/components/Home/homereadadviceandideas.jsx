import React, { Component } from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function HomeReadAdviceAndIdeas () {
    return (
        <Row>
            <Col xl={12}>
                <Row className="bg-lightPink Section7 mt-5 py-5">
                    <Col xl={2}></Col>
                    <Col xl={8}>
                    <Row className="pt-5 pb-4">
                            
                            <Col lg ={12}>
                                <h1 className="text-center text-white font-uppercase">Read Advice & Ideas</h1>
                                <p className="font-cormorant text-white  text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col xl={2}></Col>
                    <Col xl={2}></Col>
                    <Col xl={8}>
                            <Form>
                                <Form.Row className="d-flex justify-content-center">
                                    <Form.Group  className="col-xl-5">
                                        <Form.Control type="email" placeholder="Email*" className="custom-input"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="btn-home col-xl-2">
                                        Submit
                                    </Button>
                                </Form.Row>
                            </Form>
                            <Row>
                                <Col xl={12} className="pb-4">
                                    <div className="text-center follow-us"><span>Follow Us On  : </span><a href="#"><FaFacebookF/></a><a href="#"><FaTwitter/></a><a href="#"><FaPinterestP/></a><a href="#"><FaSnapchatGhost/></a><a href="#"><FaInstagram/></a><a href="#"><FaYoutube/></a></div>
                                </Col>
                                <Col xl={12}>
                                    <h2 className="text-center text-purple">Contact us to get best deals</h2>
                                    <div className="text-center"><span className="text-purple">Email : </span><a href="#"  className="text-purple">Vendors@Demo.Com </a>&#124;<a href="#" className="text-purple"> Vendors@Demo.Com</a></div>
                                </Col>
                                <Col xl={12} className="pb-5">
                                    <div className="text-center"><span>Whatsapp Number : <a href="mailto:#" className="text-purple">+(00)-0000-000-000</a></span></div>
                                </Col>                        
                            </Row>
                        </Col>
                    <Col xl={2}></Col>
                </Row>
            </Col>
            <Col xl={12}>
                <Row className="GWOUS">
                    <Col xl={5} className="bg-light-GWOUS d-flex justify-content-center p-5">
                        <Image src="/img/GWOUS.png" className="img-fluid"/>
                    </Col>
                    <Col xl={7} className="bg-dark-GWOUS d-flex align-items-center">
                        <Row className="">
                            <Col xl={12} className="text-center"><h2 className="text-purple">Get Wedme On Your Smartphone</h2></Col>
                            <Col xl={12} className="text-center"><p className="font-cormorant text-purple">You Will Receive An SMS With A Link To Download The Wedmegood App For Free</p></Col>
                            <Col xl={12} className="">
                                <Form>
                                    <Form.Row className="d-flex justify-content-center">
                                        <Col xl={2}></Col>
                                        <Col lg={12} xl={8}>
                                            <Form.Group>
                                                <Form.Control type="email" placeholder="Email*" className="custom-input"/>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={2}></Col>
                                        <Col xl={4}></Col>
                                        <Col xl={4} lg={12} className="d-flex justify-content-center">
                                            <Button variant="primary" type="submit" className="btn-home text-center"> 
                                                Submit
                                            </Button>
                                        </Col>
                                        <Col xl={4}></Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
            );
        }
export default HomeReadAdviceAndIdeas;