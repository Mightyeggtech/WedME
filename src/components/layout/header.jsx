import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../css/main.css';
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
function TopNavigation () {
        return (
            <container>
            <Navbar className="nav-height" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto custom-navbar">
                <NavDropdown title="VENDORS" id="basic-vendors-nav-dropdown" className="vendors-item">
                    <Row className="vendors-content">
                        <Col>
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>              
                <NavDropdown title="PHOTOS" id="basic-photos-nav-dropdown" className="photos-item">
                    <Row className="photos-content">
                        <Col>
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>
                <NavDropdown title="REAL WEDDINGS" id="basic-wedding-nav-dropdown" className="wedding-item">
                    <Row className="wedding-content">
                        <Col>
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>  
                <NavDropdown title="BLOGS" id="basic-blogs-nav-dropdown" className="blogs-item">
                    <Row className="blogs-content">
                        <Col>
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>
                <NavDropdown title="PROGRAMS" id="basic-programs-nav-dropdown" className="programs-item">
                    <Row className="programs-content">
                        <Col>
                            <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </Col>
                    </Row>
                </NavDropdown>  
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
          </container>
        );
}
export default TopNavigation;