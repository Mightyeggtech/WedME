import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import HomeReadAdviceAndIdeas from './Home/homereadadviceandideas.jsx';

function RealWedding () {
    return (
        <React.Fragment>
            <div className="wrap paB-80">
                <section id="herosection">        
                    <div className="container-fluid">
                        {/* Section 1 (Hero Section) */}
                        <Row className="heroimgrealWedding">
                            <div className="overlay"></div>
                            <Col sm={12} className="align-self-center">
                                <Row>
                                    <Col xl ={2} ></Col>
                                    <Col lg={12} xl ={8} className="align-self-center"> 
                                        <div className="custom-items-align ">
                                        <h1 className="home-title">OUR . FOREVER . AFTER</h1>
                                        <p className="font-cormorant">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                            
                                            <Form>
                                                <Form.Row  className="justify-content-center">
                                                    <Form.Group as={Col} className="col-12 col-md-3 home-dropdown">
                                                        <Form.Control as="select" >
                                                            <option>Choose...</option>
                                                            <option>a</option>
                                                            <option>b</option>
                                                            <option>d</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group as={Col} className="col-12 col-md-3 home-dropdown">
                                                        <Form.Control as="select">
                                                            <option>Choose...</option>
                                                            <option>c</option>
                                                            <option>d</option>
                                                            <option>e</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group as={Col} className="col-12 col-md-3 home-dropdown">
                                                        <Form.Control as="select">
                                                            <option>Choose...</option>
                                                            <option>c</option>
                                                            <option>d</option>
                                                            <option>e</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit" className="col-12 col-md-3 btn-home">
                                                    Submit
                                                    </Button>
                                                </Form.Row>
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col xl ={2} ></Col>                                
                                </Row>
                            </Col>
                        </Row>
                        {/* Section 1 (Hero Section) End */}
                        <Row className="py-5">
                            <Col lg ={2} ></Col>
                            <Col lg ={8}>
                                <h1 className="text-center font-montserrat">OUR . FOREVER . AFTER</h1>
                                <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </Col>
                            <Col lg ={2} ></Col>    
                        </Row>
                        <Row className="real-wedding-section2">
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>                                
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>                                  
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>  
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>  
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg ={4} xl ={4} className="py-3">
                                <Card className="">
                                    <div className="overlay-card">
                                        <div className="overlay-card-inner">
                                            <h3 className="font-montserrat">Mr X & Mrs Y</h3>
                                            <a href="/single-real-wedding" className="my-4">Click Here</a>
                                        </div>
                                    </div>  
                                    <div><Image src='/img/BookingSearvicesImages.png'  className="img-fluid real-wedding-card-1 pb-2"/></div>
                                    <div className="real-wedding-card-inner">
                                        <div className="w-50"><Image src='/img/indian-woman.png'  className="img-fluid real-wedding-card-2 pr-1"/></div>
                                        <div className="w-50"><Image src="/img/hero-home.png" className="img-fluid real-wedding-card-2 pl-1"/></div>
                                    </div>
                                </Card>
                            </Col>                                                                         
                        </Row> 
                    </div>
                </section>
            </div>
            <div class="container-fluid" id="homeReadAdviceAndIdeas">
                <HomeReadAdviceAndIdeas/>
            </div> 
        </React.Fragment>
        );
    }
    export default RealWedding;
