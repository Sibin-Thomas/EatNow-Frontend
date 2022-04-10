import React from "react";
import Branding from "./Branding";

class Register extends React.Component {

    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit()
    {
        console.log(document.getElementById("address").value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        fetch("http://localhost:8080/addUser", {
            method: "POST",
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                type: document.getElementById("selectMode").value,
                address: document.getElementById("address").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/text'
            }
        })
        .then((res) => res.text())
        .then((res) => console.log(res))
    }
    
    render() {
        return (
            <div>
                <Branding/>
                <div>
                    <div className="container d-flex justify-content-center p-3 h3">Register here</div>
                    <div className="row w-100">
                        <div className="col"/>
                        <div className="col-3">
                            <select class="form-select" aria-label="Default select example" id="selectMode">
                                <option selected>Customer</option>
                                <option value="1">Restaurant</option>
                            </select>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-3">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="text" className="form-control-lg shadow-none" id="username" placeholder="Username"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="text" className="form-control-lg shadow-none" id="password" placeholder="Password"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="text" className="form-control-lg shadow-none" id="address" placeholder="Address"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="text" className="form-control-lg shadow-none" id="email" placeholder="Email"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="text" className="form-control-lg shadow-none" id="phone" placeholder="Phone"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="button" className="form-control-lg shadow-none btn-primary" value="Submit" onClick={this.onSubmit}/>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;