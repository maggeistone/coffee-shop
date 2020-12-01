import './styles/coffeeShop.css';
import React from 'react'

import Welcome from "./Welcome";
import CustomerView from "./CustomerView";
import {Route, Link, BrowserRouter, Router} from 'react-router-dom';
import EmployeeView from "./EmployeeView";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/home">
                <Link to="/customerView">
                    <h1>Customer View 2</h1>
                </Link>
            </Route>

            <Route
                path={`/customerView/:username`}
                component={CustomerView}
            />
            <Route
                path={`/employeeView/:username`}
                component={EmployeeView}
            />
        </BrowserRouter>
    </div>
  );
}

export default App;
