import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProductLink from "./ProductLink";
import './styles/customerView.css';

export class Menu extends Component {
    constructor(props) {
        super(props);
        // const history = useHistory();
        this.state = {
            items: [],
        }
        // const [getUsername, setUsername] = useState('');
        // const [getPassword, setPassword] = useState('');
    }

    // grab all the products in the products table
    componentDidMount() {
        fetch(`http://localhost:8080/getAllProducts`,)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                        error: null
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error,
                        items: null
                    });
                }
            )
    }

    render() {
        const {items} = this.state;
        return (
            <div>
                <h1>Menu</h1>
                <ul className={"menu"}>
                    {items.map(item => (
                        <li key={item.id}>
                            <ProductLink
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                description={item.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Menu;