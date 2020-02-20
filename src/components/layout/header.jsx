import React, { Component } from "react";
import { Button, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../css/main.css';
import Routes from '../../route.jsx';
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Home from '../Home/index';
import logo from './logome.png';
import { Link } from 'react-dom';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route
//   } from 'react-router-dom'
function TopNavigation () {
        return (
            <div>
            <Navbar className="nav-height" expand="lg">
            <Navbar.Brand><a href="/"><img src={logo} className="App-logo" alt="logo" style={{height: 80}}/></a></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto custom-navbar">
              <NavDropdown title="VENUES" id="basic-wedding-nav-dropdown" className="wedding-item" href="/real-wedding">
                    <Row className="wedding-content">
                        <Col sm={12}>
                            <Row>
                                <Col sm={4}>
                                    <ul>
                                        <li>By City</li>
                                        <li><NavDropdown.Item href="#">Dhaka</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Commila</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Others</NavDropdown.Item></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>By Type</li>
                                        <li><NavDropdown.Item href="#">Resort</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">5 Star and other hotels</NavDropdown.Item></li>
                                    </ul>
                                </Col> 
                                <Col sm={4}>
                                    <ul>
                                        <li>By Theme</li>
                                        <li><NavDropdown.Item href="#">Destination</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Grand & Luxurious</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Mordern & Stylish</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">International</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
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
                                        <li><NavDropdown.Item href="#">Photographers</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Cinema / Video</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Pre-Wedding Shoot</NavDropdown.Item></li>
                                        <li>Makeup</li>
                                        <li><NavDropdown.Item href="#">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Family Makeup</NavDropdown.Item></li>
                                        <li>Bridal wear</li>
                                        <li><NavDropdown.Item href="#">Bridal Lehengas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Silk Sarees</NavDropdown.Item></li>      
                                        <li><NavDropdown.Item href="#">Cocktail gowns</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Troussear sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">View All Bridal wear</NavDropdown.Item></li>                                             
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Groom Wear</li>
                                        <li><NavDropdown.Item href="#">Sherwani</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Suits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">View All Groom Wear</NavDropdown.Item></li>
                                        <li>Mehndi</li>
                                        <li><NavDropdown.Item href="#">Mehendi Artist</NavDropdown.Item></li>
                                        <li>Planning & Decoretor</li>
                                        <li><NavDropdown.Item href="#">Wedding planner</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Decoretor</NavDropdown.Item></li>
                                        <li>Planning & Decoretor</li>      
                                        <li><NavDropdown.Item href="#">Cocktail gowns</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Troussear sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">View All Bridal wear</NavDropdown.Item></li>                                             
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Food</li>
                                        <li><NavDropdown.Item href="#">Catering Services</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Cake</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Chaat & food stall</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bartenders</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">View All Food</NavDropdown.Item></li>
                                        <li>Jewellery & Accesories</li>
                                        <li><NavDropdown.Item href="#">Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Flower Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Jewellery on rent</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">View all Jewellery & Accesories</NavDropdown.Item></li>
                                        <li>Music & Dance</li>
                                        <li><NavDropdown.Item href="#">Djs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Sangeet Choreagrapher</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Entertainment</NavDropdown.Item></li>                                        
                                    </ul>
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Wedding Cards</li>
                                        <li><NavDropdown.Item href="#">Wedding Cards</NavDropdown.Item></li>
                                        <li>Invites & Gifts</li>
                                        <li><NavDropdown.Item href="#">Invitations</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Favors</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Trousseau Package</NavDropdown.Item></li> 
                                        <li><NavDropdown.Item href="#">Invitation gifts</NavDropdown.Item></li>                                          
                                        <li><NavDropdown.Item href="#">Wedding Gifts for bride or groom</NavDropdown.Item></li>   
                                        <li><NavDropdown.Item href="#">Mehendi Favors</NavDropdown.Item></li>   
                                        <li><NavDropdown.Item href="#">View All Invites & Gifts</NavDropdown.Item></li>  
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
                                        <li><NavDropdown.Item href="#">Bridal Lehengas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Sarees</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Engagement / Cocktail Outfits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">>Mehendi Outfits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Blouse Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                        <li>Jewellery & Accessories</li>
                                        <li><NavDropdown.Item href="#">Bridal Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Engagement Rings</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Floral Jewellery</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>   
                                    </ul>                                 
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Mehndi</li>
                                        <li><NavDropdown.Item href="#">Mehndi Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Arabic Mehndi</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Simple Mehndi</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">>Unique Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                        <li>Decor & Ideas</li>
                                        <li><NavDropdown.Item href="#">Wedding Decor</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Entry Ideas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Groom Entry Ideas</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Games & Entertainment</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                    </ul>                                    
                                </Col>     
                                <Col sm={3}>
                                    <ul>
                                        <li>Wedding Card Designs</li>
                                        <li><NavDropdown.Item href="#">Wedding Card Designs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Gifts & Packaging</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                        <li>Wedding Photography</li>
                                        <li><NavDropdown.Item href="#">Pre-Weddng Photography</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Photography</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                        <li>Groom Wear</li>
                                        <li><NavDropdown.Item href="#">Sherwani</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Suits</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                    </ul>                                                                          
                                </Col>
                                <Col sm={3}>
                                    <ul>
                                        <li>Bridal Makeup & Hair</li>
                                        <li><NavDropdown.Item href="#">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Engagement Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Mehndi Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>  
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
                                <Col sm={4}>
                                    <ul>
                                        <li>By City</li>
                                        <li><NavDropdown.Item href="#">Dhaka</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Commila</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Others</NavDropdown.Item></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>By Culture</li>
                                        <li><NavDropdown.Item href="#">Bangali</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
                                    </ul>
                                </Col> 
                                <Col sm={4}>
                                    <ul>
                                        <li>By Theme</li>
                                        <li><NavDropdown.Item href="#">Destination</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Grand & Luxurious</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Mordern & Stylish</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">International</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">More</NavDropdown.Item></li>
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
                                        <li><NavDropdown.Item href="#">Bridal Makeup</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Honeymoons</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Songs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Decor Ideas</NavDropdown.Item></li>
                                    </ul>                                    
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>Browse by Category</li>
                                        <li><NavDropdown.Item href="#">Old Dhaka wedding</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Real Brides Reveal</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Buys</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">real Wedding</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Mehendi Ideas</NavDropdown.Item></li>
                                    </ul>                                      
                                </Col>
                                <Col sm={4}>
                                    <ul>
                                        <li>Browse by Category</li>
                                        <li><NavDropdown.Item href="#">Wedding Songs</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Marriage Dates 2020</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Blouse Designer</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Bridal Hairstyles</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Invitations</NavDropdown.Item></li>
                                        <li><NavDropdown.Item href="#">Wedding Invitations</NavDropdown.Item></li>
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