import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProductLink from "./ProductLink";
import './styles/customerView.css';
import EventEmitter from './Events';
import ProductInCart from "./ProductInCart";
import {Col, Container, Row} from "react-bootstrap";
import Order from "./Order";

export class MyOrders extends Component {
    constructor(props) {
        super(props);
        // const history = useHistory();
        this.state = {
            userID: props.userID,
            username: props.username,
            orders: [],
            isLoaded: false,
            error: null,
        }

    }

    // grab all the products in the products table
    componentDidMount() {
        const {userID, username} = this.state;
        fetch(`http://localhost:8080/getMyOrders?username=${username}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(`received result from get my orders: ${JSON.stringify(result)}`);
                    this.setState({
                        isLoaded: true,
                        orders: result.orders,
                        error: null
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    render() {
        const {orders} = this.state;
        return (
            <Container className="currentOrder">
                <Row>
                    <Col>
                        <h1>My Orders</h1>
                        <ul className={"menu"}>
                            {orders.map(item => (
                                <li key={item.id}>
                                    <Order
                                        id={item.id}
                                        date={item.date}
                                        status={item.status}
                                        username={item.username}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MyOrders;
