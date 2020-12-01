import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProductLink from "./ProductLink";
import './styles/customerView.css';
import EventEmitter from './Events';
import ProductInCart from "./ProductInCart";
import {Col, Container, Row} from "react-bootstrap";

export class CurrentOrder extends Component {
    constructor(props) {
        super(props);
        // const history = useHistory();
        this.state = {
            order: {
                products: [],
                // id: props.id,
                username: props.username,
            },
            isLoaded: false,
        }

        EventEmitter.subscribe('addToCart', (event) => this.addToCart(event));
    }

    addToCart(data) {
        this.setState((state, props) => {
            return {
                order: {
                    products: [...state.order.products, data],
                    username: state.order.username,
                }
            }
        });
    }

    submitOrder = () => {
        const {order} = this.state;
        fetch(`http://localhost:8080/submitOrder`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order: order,
            })
        }).then();
    }

    // grab all the products in the products table
    componentDidMount() {
        // fetch(`http://localhost:8080/getAllProducts`,)
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
        //                 items: null
        //             });
        //         }
        //     )
    }

    render() {
        const products = this.state.order.products;
        console.log(`products ${JSON.stringify(products)}`);
        return (
            <Container className="currentOrder">
                <Row>
                    <Col>
                        <h1>Order</h1>
                        <ul className={"menu"}>
                            {products.map(item => (
                                <li key={item.id}>
                                    <ProductInCart
                                        id={item.id}
                                        name={item.name}
                                        img={item.img}
                                        description={item.description}
                                        options={item.options}
                                        size={item.size}
                                        qty={item.qty}
                                    />
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" type="submit" onClick={this.submitOrder}>
                            Submit Order
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CurrentOrder;
