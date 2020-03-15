import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
function FAQ () {
    return (
        <div className="wrap">
            <section className="container-fluid">
                <Row className="vbs-heroimg" id="faqsSection">  
                    <div className="bgDark"></div>
                    <Col className="align-self-center">
                        <Row>
                            <Col xl={2} ></Col>
                            <Col lg={12} xl ={8}> 
                                <div className="custom-items-align ">
                                    <h1 className="home-title font-montserrat">FAQs</h1>
                                </div>
                            </Col>
                            <Col xl ={2} ></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="paT-80">
                    <Col xs={12}>
                        <h2 className="text-center font-montserrat text-purple font-uppercase">Frequently Asked Questions</h2>
                        <p className="font-cormorant py-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col xs={12}>
                        <Accordion defaultActiveKey="0" id="faq" className="paB-80">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Lorem ipsum dolor sit amet ?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Lorem ipsum dolor sit amet ?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Lorem ipsum dolor sit amet ?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Lorem ipsum dolor sit amet ?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
                                </Accordion.Collapse>
                            </Card>                            
                        </Accordion>
                    </Col>
                </Row>
            </section>
        </div>
    );
}
export default FAQ;