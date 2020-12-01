import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProductLink from "./ProductLink";
import './styles/customerView.css';
import {Col, Container, Row} from "react-bootstrap";

export class AddNewProduct extends Component {
    constructor(props) {
        super(props);
        // const history = useHistory();
        this.state = {
            name: '',
            description: '',
        }
        // const [getUsername, setUsername] = useState('');
        // const [getPassword, setPassword] = useState('');
    }


    addProduct = (e) => {
        e.preventDefault();
        const {name, description} = this.state;
        fetch(`http://localhost:8080/addProduct`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
            })
        }).then();
    };


    render() {
        const {name, description} = this.state;
        return (
            <Container>
               <Row>
                   <Col>
                       <h1>Add a Product</h1>
                       <Form action="#" onSubmit={this.addProduct}>
                           <Form.Group
                               type="text"
                               onChange={(e) => this.setState((state, props) => {
                                   console.log(`setting state to qty ${e.target.value}`);
                                   return {name: e.target.value};
                               })}
                               controlId="exampleForm.ControlSelect1">
                               <Form.Label>Product Name</Form.Label>
                               <Form.Control type="text" placeholder="" />
                               <Form.Text className="text-muted">

                               </Form.Text>
                           </Form.Group>
                           <Form.Group
                               type="text"
                               onChange={(e) => this.setState((state, props) => {
                                   console.log(`setting state to qty ${e.target.value}`);
                                   return {description: e.target.value};
                               })}
                               controlId="exampleForm.ControlSelect1">
                               <Form.Label>Product Description</Form.Label>
                               <Form.Control type="text" placeholder="" />
                               <Form.Text className="text-muted">

                               </Form.Text>
                           </Form.Group>
                           <Button variant="primary" type="submit">
                               Create Product
                           </Button>
                       </Form>
                       
                   </Col>
               </Row>
            </Container>
        );
    }
}

export default AddNewProduct;