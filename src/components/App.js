import React from "react";
import Branding from "./Branding";
import Login from "./Login";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Branding/>
                <Login/>
            </div>
        )
    }
}

export default App