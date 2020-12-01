import React from "react";
import './styles/customerView.css';
import EventEmitter from './Events';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";



class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            date: props.date,
            status: props.status,
            username: props.username,
        };
    }

    changeStatus = () => {
        const {id, status} = this.state;
        fetch('http://localhost:8080/changeStatus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderID: id,
                status: status,
            })
        }).then();
    }

    componentDidMount() {
    }

    render() {
        const {id, date, status, username} = this.state;
        return (
            <div className="productLink">
                <h3>Order #{id}</h3>
                <Container>
                    <Row>
                        <Col>
                            {date}
                            <Form action="#" onSubmit={this.changeStatus}>
                                <Form.Group
                                    type="text"
                                    onChange={(e) => this.setState((state, props) => {
                                        return {status: e.target.value};
                                    })}
                                    controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as="select">
                                        <option>Confirmed</option>
                                        <option>Ready</option>
                                        <option>Completed</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Change Status
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Order;