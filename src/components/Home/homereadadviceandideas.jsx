import React, { Component } from "react";
import { section } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import ContactUsToGetBestDeal from '../contactUsToGetBestDeal'
import ReadAdviceAndIdeas from '../readAdviceAndIdeas.jsx';
function HomeReadAdviceAndIdeas () {
    return (
        <div className="container-fluid">
            <Row>
                <Col xl={12}>
                    <ReadAdviceAndIdeas/>
                </Col>
                <Col xl={12}>
                    <ContactUsToGetBestDeal/>
                </Col>
            </Row>
        </div>
            );
        }
export default HomeReadAdviceAndIdeas;