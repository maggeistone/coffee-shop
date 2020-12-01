import React from "react";
import './styles/customerView.css';
import EventEmitter from './Events';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";



class ProductLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            img: props.img,
            description: props.description,
            options: '',
            size: 'Small',
            qty: 1,
        };
    }

    addToCart = (event) => {
        event.preventDefault()
        console.log(`event received ${event.target.value}`);
        const {id, name, description, options, size, qty} = this.state;
        console.log(`emitted ${JSON.stringify({id, name, description, options, size, qty})}`);
        EventEmitter.dispatch('addToCart', {id, name, description, options, size, qty});
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
        const {id, name, img, options, size, qty, description} = this.state;
        return (
            <div className="productLink">
                <h3>{name}</h3>
                <p>{description}</p>
                <Container>

                    <Form action="#" onSubmit={this.addToCart}>
                        <Row>
                            <Col>
                                <Form.Group
                                    type="text"
                                    onChange={(e) => this.setState((state, props) => {
                                        console.log(`setting state to qty ${e.target.value}`);
                                        return {qty: e.target.value};
                                    })}
                                    controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group
                                    type="text"
                                    onChange={(e) => this.setState((state, props) => {
                                        return {size: e.target.value};
                                    })}
                                    controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control as="select">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                        <option>X-Large</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Add To Cart
                        </Button>
                    </Form>
                </Container>
            </div>

        );
    }
}

export default ProductLink;