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

    cancelOrder = () => {
        const {id, status} = this.state;
        fetch('http://localhost:8080/cancelOrder', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderID: id,
            })
        }).then();
    }


    componentDidMount() {
        // fetch("http://localhost:8080/getTrips")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items,
        //                 error: null
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error: error,
        //                 items: []
        //             });
        //         }
        //     )
    }

    render() {
        const {id, date, status, username} = this.state;
        return (
            <div className="productLink">
                <h3>Order #{id}</h3>
                <Container>
                    <Row>
                        <Col>
                            {date}<br/>
                            {status}
                            <Button variant="primary" type="submit" onClick={this.cancelOrder} disabled={status !== 'confirmed'}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Order;