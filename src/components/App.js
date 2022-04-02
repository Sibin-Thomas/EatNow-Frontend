import React from "react";
import Branding from "./Branding";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <Login/>
            </div>
        )
    }
}

export default App