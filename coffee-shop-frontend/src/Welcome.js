import React from 'react'
import CustomerLogin from "./CustomerLogin";
import EmployeeLogin from "./EmployeeLogin";
import './styles/welcome.css'
import {useHistory} from "react-router";
import {Link, Route} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";


// this is the landing page to determine if the user is a
// customer or employee



function Welcome() {

    const history = useHistory();

    return (

        <Container >
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} className="Welcome">
                    <Row>
                        <Col>
                            <h1>Welcome</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <CustomerLogin/>
                        </Col>
                        <Col>
                            <EmployeeLogin/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={2}></Col>
            </Row>

        </Container>
    );
}

export default Welcome;