import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function  ContactUsToGetBestDeal () {
    return (
        <Row className="GWOUS">
            <Col xl={5} className="bg-light-GWOUS d-flex justify-content-center p-5">
                <Image src="/img/GWOUS.png" className="img-fluid"/>
            </Col>
            <Col xl={7} className="bg-dark-GWOUS d-flex align-items-center">
                <Row className="  paT-80 paB-80">
                    <Col xl={12} className="text-center"><h3 className="text-purple font-montserrat">Get Wedme On Your Smartphone</h3></Col>
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
    );
}       
export default ContactUsToGetBestDeal;
                
                
                
                
                
                
