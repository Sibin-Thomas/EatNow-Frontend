import React from "react";
import Branding from "./Branding";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Router } from "react-router-dom";

class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Login/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App