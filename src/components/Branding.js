import React from "react";
import logo from "../images/logo.jpg"

class Branding extends React.Component {
    render()
    {
        return (
            <div className="container-fluid d-flex">
                <img src={logo} className="img-thumbnail"/>
                <div className="h1 d-flex align-items-center">Eat Now</div>
            </div>
        )
    }
}

export default Branding