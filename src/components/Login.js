import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logo2.png"
import Branding from "./Branding";
import {useNavigate} from "react-router-dom";

var stylingObject = {
    div: {
     position:"absolute",
      color: "white",
      top:"100px",
      left: "250px",
      transform: "translate(-50%, -50%)",
      "text-align": "center",
      "font-family": "Lucida Handwriting",
      "font-style": "italic",
      "font-size": "100px"

    },
    input:{
        position:"absolute",
        top:"350px",
        left: "200px",
        width:"700px",
        transform: "translate(-50%, -50%)",
        "font-size": "1px",
    },
    link:{
        position:"absolute",
        top:"250px",
        left: "350px",
        "font-size": "20px",
        color:"white",
    }
}

function Login() {
    let navigate = useNavigate()


    const onSubmit = () =>
    {
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/findUser", 
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
        .then(res => res == undefined ? alert("incorrect credentials") : (document.getElementById('selectMode').value === 'Customer' ? navigate("/userPage/"+res.userId) : navigate("/restaurantPage/"+res.userId)))
    }
  
    return (
        <div>
            
             <div className="container-fluid d-flex">
            <div style={stylingObject.div}>
             Eat Now!!
           <div style={stylingObject.input}>
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
                        <div style={stylingObject.link}>
                        <div className="container ml-3">
                        New User?
                        <Link to='/register'>Register here</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col" />
                </div>
                
                </div>
                
            </div>
            
           
           <img src={logo1} className="img-thumbnail" width="2000px"/>
           
           </div>
            
        </div>
    )

}

export default Login;