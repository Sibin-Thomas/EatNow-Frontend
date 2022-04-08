import React from "react";
import Branding from "./Branding";

class Register extends React.Component {
    
    render() {
        return (
            <div>
                <Branding/>
                <div>
                    <div className="container d-flex justify-content-center p-3 h3">Register here</div>
                    <div className="row w-100">
                        <div className="col"/>
                        <div className="col-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Restaurant
                        </label>
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
                            <input type="button" className="form-control-lg shadow-none btn-primary" value="Submit"/>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;