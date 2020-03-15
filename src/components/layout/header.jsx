import React from "react";
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../css/main.css';
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import logo from './logome.png';

function TopNavigation () {
        return (
            <div>
            <Navbar className="nav-height" expand="lg">
            <Navbar.Brand><a href="/"><img src={logo} className="App-logo" alt="logo" style={{height: 80}}/></a></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto custom-navbar">
              <NavDropdown title="VENUES" id="basic-wedding-nav-dropdown" className="wedding-item" href="/vendors">
                    <Row className="wedding-content">
                        <Col sm={12}>
                            <Row>
                                <Col sm={4}>
                                    <ul>
                                        <li>By City</li>
                                        <li><NavDropdown.Item href="/vendors">Dhaka</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Commila</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Others</NavDropdown.Item></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>By Type</li>
                                        <li><NavDropdown.Item href="/vendors">Resort</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">5 Star and other hotels</NavDropdown.Item></li>
                                    </ul>
                                </Col> 
                                <Col sm={4}>
                                    <ul>
                                        <li>By Theme</li>
                                        <li><NavDropdown.Item href="/vendors">Destination</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Grand & Luxurious</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Mordern & Stylish</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">International</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                    </ul>
                                </Col>                                                               
                            </Row>
                        </Col>
                    </Row>
                </NavDropdown>                      
                <NavDropdown title="VENDORS" id="basic-vendors-nav-dropdown p-3" className="vendors-item">
                    <Row className="vendors-content">
                        <Col sm={12}> 
                            <Row>
                                <Col sm={3}>
                                    <ul>
                                        <li>Photographers</li>
                                        <li><NavDropdown.Item href="/vendors">Photographers</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Cinema / Video</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Pre-Wedding Shoot</NavDropdown.Item></li>
                                        <li>Makeup</li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Family Makeup</NavDropdown.Item></li>
                                        <li>Bridal wear</li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Lehengas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Silk Sarees</NavDropdown.Item></li>      
                                        <li><NavDropdown.Item href="/vendors">Cocktail gowns</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Troussear sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">View All Bridal wear</NavDropdown.Item></li>                                             
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Groom Wear</li>
                                        <li><NavDropdown.Item href="/vendors">Sherwani</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Suits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">View All Groom Wear</NavDropdown.Item></li>
                                        <li>Mehndi</li>
                                        <li><NavDropdown.Item href="/vendors">Mehendi Artist</NavDropdown.Item></li>
                                        <li>Planning & Decoretor</li>
                                        <li><NavDropdown.Item href="/vendors">Wedding planner</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Decoretor</NavDropdown.Item></li>
                                        <li>Planning & Decoretor</li>      
                                        <li><NavDropdown.Item href="/vendors">Cocktail gowns</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Troussear sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">View All Bridal wear</NavDropdown.Item></li>                                             
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Food</li>
                                        <li><NavDropdown.Item href="/vendors">Catering Services</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Cake</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Chaat & food stall</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Bartenders</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">View All Food</NavDropdown.Item></li>
                                        <li>Jewellery & Accesories</li>
                                        <li><NavDropdown.Item href="/vendors">Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Flower Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Jewellery on rent</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">View all Jewellery & Accesories</NavDropdown.Item></li>
                                        <li>Music & Dance</li>
                                        <li><NavDropdown.Item href="/vendors">Djs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Sangeet Choreagrapher</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Entertainment</NavDropdown.Item></li>                                        
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Wedding Cards</li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Cards</NavDropdown.Item></li>
                                        <li>Invites & Gifts</li>
                                        <li><NavDropdown.Item href="/vendors">Invitations</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Favors</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Trousseau Package</NavDropdown.Item></li> 
                                        <li><NavDropdown.Item href="/vendors">Invitation gifts</NavDropdown.Item></li>                                          
                                        <li><NavDropdown.Item href="/vendors">Wedding Gifts for bride or groom</NavDropdown.Item></li>   
                                        <li><NavDropdown.Item href="/vendors">Mehendi Favors</NavDropdown.Item></li>   
                                        <li><NavDropdown.Item href="/vendors">View All Invites & Gifts</NavDropdown.Item></li>  
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </NavDropdown>              
                <NavDropdown title="PHOTOS" id="basic-photos-nav-dropdown" className="photos-item">
                    <Row className="photos-content">
                        <Col sm={12}>
                            <Row>
                                <Col sm={3}>
                                    <ul>
                                        <li>Outfit</li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Lehengas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Engagement / Cocktail Outfits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">>Mehendi Outfits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Blouse Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                        <li>Jewellery & Accessories</li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Engagement Rings</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Floral Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>   
                                    </ul>                                 
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Mehndi</li>
                                        <li><NavDropdown.Item href="/vendors">Mehndi Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Arabic Mehndi</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Simple Mehndi</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">>Unique Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                        <li>Decor & Ideas</li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Decor</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Entry Ideas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Groom Entry Ideas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Games & Entertainment</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                    </ul>                                    
                                </Col>     
                                <Col sm={3}>
                                    <ul>
                                        <li>Wedding Card Designs</li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Card Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Gifts & Packaging</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                        <li>Wedding Photography</li>
                                        <li><NavDropdown.Item href="/vendors">Pre-Weddng Photography</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Photography</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                        <li>Groom Wear</li>
                                        <li><NavDropdown.Item href="/vendors">Sherwani</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Wedding Suits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>
                                    </ul>                                                                          
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Bridal Makeup & Hair</li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Engagement Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">Mehndi Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/vendors">More</NavDropdown.Item></li>  
                                    </ul>                                                                    
                                </Col>                                                                    
                            </Row>
                        </Col>
                    </Row>
                </NavDropdown>
                <NavDropdown title="REAL WEDDINGS" id="basic-wedding-nav-dropdown" className="wedding-item" href="/real-wedding">
                    <Row className="wedding-content">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6}>
                                    <ul>
                                        <li>By City</li>
                                        <li><NavDropdown.Item href="/real-wedding">Dhaka</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">Commila</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">Others</NavDropdown.Item></li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul>
                                        <li>By Theme</li>
                                        <li><NavDropdown.Item href="/real-wedding">Destination</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">Grand & Luxurious</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">Mordern & Stylish</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">International</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/real-wedding">More</NavDropdown.Item></li>
                                    </ul>
                                </Col>                                                               
                            </Row>
                        </Col>
                    </Row>
                </NavDropdown>                
                <NavDropdown title="BLOGS" id="basic-blogs-nav-dropdown" className="blogs-item">
                    <Row className="blogs-content">
                        <Col sm={12}>
                            <Row>
                                <Col sm={4}>
                                    <ul>
                                        <li>Browse by Category</li>
                                        <li><NavDropdown.Item href="/blog-main">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Honeymoons</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Wedding Songs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Wedding Decor Ideas</NavDropdown.Item></li>
                                    </ul>                                    
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>Browse by Category</li>
                                        <li><NavDropdown.Item href="/blog-main">Old Dhaka wedding</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Real Brides Reveal</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Bridal Buys</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">real Wedding</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Mehendi Ideas</NavDropdown.Item></li>
                                    </ul>                                      
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>Browse by Category</li>
                                        <li><NavDropdown.Item href="/blog-main">Wedding Songs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Marriage Dates 2020</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Bridal Blouse Designer</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Wedding Invitations</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="/blog-main">Wedding Invitations</NavDropdown.Item></li>
                                    </ul>                                      
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </NavDropdown>
                <Nav.Item href="#action/3.1" className="programs-item text-white">PROGRAMS</Nav.Item>
                {/* <NavDropdown title="PROGRAMS" id="basic-programs-nav-dropdown" >
                    <Row className="programs-content">
                        <Col>
                            
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>   */}
                </Nav>
                <Form inline>
                    <Button variant="btn" className="text-white">
                    <span className="custom-Search"><FiSearch /></span>
                </Button>
                </Form>

                <Form inline>
                    <Button variant="btn" className="text-white">
                        <span className="custom-user-circle"><FaUserCircle /> <span>login</span></span>
                        </Button>
                        </Form>

                        <Form inline>
                    <Button variant="btn" className="text-white">
                        <span className="custom-language"><MdLanguage /> <span>BN</span></span>
                        </Button>
                        </Form>                                       
            </Navbar.Collapse>
            </Navbar>
            </div>
        );
}
export default TopNavigation;