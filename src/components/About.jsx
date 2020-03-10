import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FaCameraRetro } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiShirt } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { GiLargeDress } from "react-icons/gi";
import { GiGemPendant } from "react-icons/gi";
import { GiLoveLetter } from "react-icons/gi";
import { FiGift } from "react-icons/fi";
import ReadAdviceAndIdeas from './readAdviceAndIdeas.jsx';
function About() {
    return (
        <React.Fragment>
            <div className="wrap">
                <section className="container-fluid" > 
                    {/* Section 1 (Hero Section) */}
                        <Row className="vbs-heroimg" id="aboutSection">  
                            <Col className="align-self-center">
                                <Row>
                                    <Col xl ={2} ></Col>
                                    <Col lg={12} xl ={8}> 
                                        <div className="custom-items-align ">
                                            <h1 className="home-title font-montserrat">About Us</h1>
                                        </div>
                                    </Col>
                                    <Col xl ={2} ></Col>
                                </Row>
                            </Col>
                        </Row>
                    {/* Section 1 (Hero Section) End */}  
                </section>
                <section className="container-fluid">
                    <Row className="pt-5">
                        <Col sm={1} md={2} lg={2} xl={3}></Col>
                        <Col sm={10} md={8} lg={8} xl={6}>
                            <p className="font-cormorant text-center">Sugar, spice and everything nice!WedMeGood is a team of powerpuff humans, that link their professional expertise to their personal love for weddings.We work at weddings, from weddings, for weddings. So sit back, log on to WedMeGood, and feed all your whims and fancies!</p>
                        </Col>
                        <Col sm={1} md={2} lg={2} xl={3}></Col>
                    </Row>
                </section>            
                <section className="container-fluid">
                    <Row className="py-5">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2 className="text-center font-montserrat text-purple font-uppercase">VENDORS</h2>
                            <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </Row>
                    <Row className="pb-5"> 
                        <Col sm={12}>
                            <div className="main-grid">
                                <div className="grid-items">
                                    <div><FaCameraRetro/></div>
                                    <h4>Photographers</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiLipstick/></div>
                                    <h4>Makeup</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiLargeDress/></div>
                                    <h4>Bridal Wear</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiShirt/></div>
                                    <h4>Groom Wear</h4>
                                </div>
                                <div className="grid-items">
                                    <div><FaHandHoldingHeart/></div>
                                    <h4>Mehendi</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiTeamIdea/></div>
                                    <h4>Planning  &  Decoretor </h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiMeal/></div>
                                    <h4>Food</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiGemPendant/></div>
                                    <h4>Jewellery & Accesories</h4>
                                </div>
                                <div className="grid-items">
                                    <div><IoIosMusicalNotes/></div>
                                    <h4>Music & Dance</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiLoveLetter/></div>
                                    <h4>Wedding Cards</h4>
                                </div>
                                <div className="grid-items">
                                    <div><FiGift/></div>
                                    <h4>Invites & Gifts</h4>
                                </div>
                                <div className="grid-items">
                                    <div><GiVikingLonghouse/></div>
                                    <h4>Venues</h4>
                                </div>                                
                            </div>
                        </Col>
                    </Row>
                    <Row className="paT-80">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2 className="text-center font-montserrat text-purple font-uppercase">Blog</h2>
                            <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            <p className="font-cormorant text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </Row>
                    <Row>
                        <Col lg ={12} className="d-flex justify-content-center paB-80">
                            <a href="#" className="btn browseAllVendors my-3">Browse All Blog Posts</a>
                        </Col>
                    </Row>   
                    <Row className="py-5">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2 className="text-center font-montserrat text-purple font-uppercase">PHOTOS</h2>
                            <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </Row>
                    <Row className="vendor">
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card wedding-venues">
                                <Card.Body>
                                    <a href="#" class="btn">Wedding Venues</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card wedding-photography">
                                <Card.Body>
                                    <a href="#" class="btn">Wedding Photography</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card bridal-makeup">
                                <Card.Body>
                                    <a href="#" class="btn">Jewellery & Accessories</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card wedding-decorators">
                                <Card.Body>
                                    <a href="#" class="btn">Decorators</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card bridal-wear">
                                <Card.Body>
                                    <a href="#" class="btn">Outfit</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg ={6} xl ={4} className="my-2">
                            <Card className="second-section-vendor-card wedding-cards">
                                <Card.Body>
                                    <a href="#" class="btn">Wedding Cards</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg ={12} className="d-flex justify-content-center paB-80">
                            <a href="#" className="btn browseAllVendors my-3">Browse All Categories</a>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2 className="text-center font-montserrat text-purple font-uppercase">Real Weddings</h2>
                            <p className="font-cormorant text-center">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </Row>
                    <Row className="real-wedding-section2 paB-80">
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
            <div class="container-fluid">
                <ReadAdviceAndIdeas/>
            </div> 
        </React.Fragment>
    );
}
export default About;
