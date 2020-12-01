import React from "react";
import './styles/customerView.css';
import EventEmitter from './Events';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import DefaultImage from './129-1293327_coffee-icon-coffee-cup-flat-icon.png';



class ProductInCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            img: props.img,
            description: props.description,
            options: props.options,
            size: props.size,
            qty: props.qty,
        };
    }

    // addToCart = (event) => {
    //     event.preventDefault()
    //     const {id, name, description, options, size, qty} = this.state;
    //     EventEmitter.dispatch('addToCart', {id, name, description, options, size, qty});
    // }

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
            <Container className="productInCart">
                <Row>
                    <Col sm={3}>
                        <img src={DefaultImage} alt={"coffee"} className={"productImage"}/>
                    </Col>
                    <Col sm={8} className={"productInfo"}>
                        {name} <br/>
                        {description} <br/>
                        size: {size} qty: {qty}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default ProductInCart;