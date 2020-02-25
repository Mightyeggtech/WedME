import React from 'react';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function ReadAdviceAndIdeas() {
    return (
        <Row className="bg-lightPink Section7 paB-80">
            <Col xl={12}>
            <Row className="paT-80">
                <Col lg ={12}>
                    <h2 className="font-montserrat text-purple text-center font-uppercase">Read Advice & Ideas</h2>
                    <p className="font-cormorant text-white  text-center mb-5">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </Col>  
            </Row>
            </Col>
            <Col md={3} lg={1} xl={2}></Col>
            <Col md={6} lg={10} xl={8}>
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
                    <Col xl={12} className="paB-80">
                        <div className="text-center follow-us"><span>Follow Us On  : </span><a href="#"><FaFacebookF/></a><a href="#"><FaTwitter/></a><a href="#"><FaPinterestP/></a><a href="#"><FaSnapchatGhost/></a><a href="#"><FaInstagram/></a><a href="#"><FaYoutube/></a></div>
                    </Col>
                    <Col xl={12}>
                        <h3 className="text-center text-purple font-montserrat">Contact us to get best deals</h3>
                        <div className="text-center"><span className="text-purple">Email : </span><a href="#"  className="text-purple">Vendors@Demo.Com </a>&#124;<a href="#" className="text-purple"> Vendors@Demo.Com</a></div>
                    </Col>
                    <Col xl={12} className="">
                        <div className="text-center"><span>Whatsapp Number : <a href="mailto:#" className="text-purple">+(00)-0000-000-000</a></span></div>
                    </Col>                        
                </Row>
            </Col>
            <Col md={3} lg={1} xl={2}></Col>
        </Row>       
    );
}
export default ReadAdviceAndIdeas;