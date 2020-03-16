import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import ContactUsToGetBestDeal from '../contactUsToGetBestDeal'
import ReadAdviceAndIdeas from '../readAdviceAndIdeas.jsx';
function HomeReadAdviceAndIdeas () {
    return (
        <div className="bg-lightPink">
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