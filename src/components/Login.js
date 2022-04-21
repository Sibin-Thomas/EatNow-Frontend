import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Branding from "./Branding";
import {useNavigate} from "react-router-dom";

function Login() {
    let navigate = useNavigate()


    const onSubmit = () =>
    {
        fetch("http://localhost:8090/findUser", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "type": document.getElementById('selectMode').value
            })
        })
        .then(res => res.json())
        .then(res => res.user_id == null ? console.log("incorrect credentials") : (document.getElementById('selectMode').value === 'Customer' ? navigate("/userPage/"+res.user_id) : navigate("/restaurantPage/"+res.user_id)))
    
    }

    return (
        <div>
            <Branding/>
            <div className="container p-2 border-bottom border-top mt-3">
                <div className="container d-flex justify-content-center p-3 h3">Please Sign In</div>
                <div className="row w-100">
                    <div className="col"/>
                    <div className="col-3">
                        <select class="form-select" aria-label="Default select example" id="selectMode">
                            <option selected>Customer</option>
                            <option>Restaurant</option>
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
                        <input type="submit" className="form-control-lg btn-primary" id="submit" onClick={onSubmit} placeholder="Submit"/>
                        <div className="container ml-3">
                        New User?
                        <Link to='/register'>Register here</Link>
                        </div>
                    </div>
                    <div className="col" />
                </div>
            </div>
        </div>
    )
}

export default Login;