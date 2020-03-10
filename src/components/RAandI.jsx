import React from "react";
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function RAandI () {
    return (
        <React.Fragment>
            <Row className="py-5">
                <Col lg ={2} ></Col>
                <Col lg ={8}>
                    <h1 className="text-center font-uppercase font-montserrat text-purple">Read Advice & Ideas</h1>
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
        </React.Fragment>        
    );}
export default RAandI;