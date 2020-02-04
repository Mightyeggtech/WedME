import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { GoDash } from "react-icons/go"

function BottomFooter () {
    return(
        <Row>
            <Col sm={6}>
                <div>Made With Love by ME Tech</div>
            </Col>
            <Col sm={6} className="social-media">
                <div><span>Facebook</span><GoDash/><span>Twitter</span><GoDash/><span>Pinterest</span><GoDash/><span>Youtube</span><GoDash/><span>Instagram</span></div>
            </Col>
        </Row>
    );
}
export default BottomFooter;

 