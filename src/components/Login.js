import React from "react";
import { Link } from "react-router-dom";
import Branding from "./Branding";

class Login extends React.Component {

    render()
    {
        return (
            <div>
                <Branding/>
                <div className="container p-2 border-bottom border-top mt-3">
                    <div className="container d-flex justify-content-center p-3 h3">Please Sign In</div>
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
                    <div className="row  w-100 mt-1">
                        <div className="col"/>
                        <div className="col-3">
                            <input type="password" className="form-control-lg" id="password" placeholder="Password"/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row w-100 mt-1">
                        <div className="col"/>
                        <div className="col-3 d-flex">
                            <input type="submit" className="form-control-lg btn-primary" id="submit" placeholder="Submit"/>
                            <div className="container ml-3">
                            New User?
                            <Link to='/register'>Register here</Link>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Login