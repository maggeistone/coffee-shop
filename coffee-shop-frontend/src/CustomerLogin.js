import React, {Component} from 'react';
import {useState} from 'react';
import './styles/welcome.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from "react-router-dom";

//this component allows a user to login
export class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        // const history = useHistory();
        this.state = {
            path: null,
            username: '',
            password: '',
            message: '',
            verified: false,
            error: null,
            isLoaded: false,
            id: '',
            user: '',
        }
    }

    validateForm() {
        const {username, password} = this.state;
        if (username === '' || password === '') {
            return true
        }
        // check if the username is in the users table

        // check if the password is correct for the user
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password, message} = this.state;
        fetch(`http://localhost:8080/verify?username=${username}&password=${password}`,)
            .then(res => res.json())
            .then((result) => {
                    console.log(`received result: ${JSON.stringify(result)}`);
                    if (result.verified) {
                        this.setState((state, props) => {
                            return {
                                path: `/customerView/${state.username}`,
                                isLoaded: true,
                                id: result.id,
                                user: result.username,
                            };
                        });
                    } else {
                        this.setState((state, props) => {
                            return {
                                path: null,
                                isLoaded: true,
                                message: result.message,
                            }
                        })
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {path, message, id, user} = this.state;
        if (path) {
            return <Redirect to={path}/>
        }
        return (
            <>
                <div className="login">
                    <h3> Customer Login </h3>
                    <p id="formError">{message}</p>
                    <Form action="#" onSubmit={this.handleSubmit}>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="username"
                                onChange={(e) => this.setState((state, props) => {
                                    return {username: e.target.value};
                                })}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => this.setState((state, props) => {
                                    return {password: e.target.value};
                                })}
                            />
                        </Form.Group>

                        <Button block size="lg" type={"submit"} disabled={this.validateForm()}>
                            Login
                        </Button>
                    </Form>
                </div>
            </>
        );
    }
}

export default CustomerLogin;