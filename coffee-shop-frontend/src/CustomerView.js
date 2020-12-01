import React, {Component} from 'react'
import './styles/customerView.css'
import {Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
import EventEmitter from './Events';
import CurrentOrder from "./CurrentOrder";
import {Col, Container, Row} from "react-bootstrap";
import MyOrders from './MyOrders';


// this is the customer view page
// it includes:
//      the menu
//      a cart

class CustomerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            username: '',
            currentOrder: [],
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this.state.username = params.username;
        console.log(JSON.stringify(this.state.username));
        this.setState({
           isLoaded: true,
            error: null,
        });
        // const {match: {params}} = this.props;
        // this.state.userId = params.userId;
        // fetch(`http://localhost:8080/getUsers?username=${params.username}`,)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(JSON.stringify(result));
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
        const {error, isLoaded, items, currentOrder, username, id} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container className="CustomerView">
                    <Row>
                        <Col>
                            <h2>Welcome {username}!</h2>
                        </Col>
                    </Row>
                    <Row>

                        <Col><Menu
                            username={username}
                            id={id}
                        /></Col>
                        <Col><CurrentOrder
                            username={username}
                            id={id}
                        /></Col>
                        <Col><MyOrders
                            userID={id}
                            username={username}
                        /></Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default CustomerView;