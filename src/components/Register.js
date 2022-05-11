import React from "react";
import Branding from "./Branding";
import logo1 from "../images/logo2.png"

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
        top:"400px",
        left: "100px",
        width:"700px",
        transform: "translate(-50%, -50%)",
        "font-size": "1px",
    }
}

class Register extends React.Component {

    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit()
    {
        console.log(document.getElementById("address").value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/addUser", {
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
        .then(alert('User Registered'))
    }
    
    render() {
        return (
            <div>
                <div>
                 <img src={logo1} className="img-thumbnail" width="2000px"/>
                 <div style={stylingObject.div}>
                  Eat Now!!
                 <div style={stylingObject.input}>
                 <div className="container d-flex justify-content-center p-3 h3">Register here</div>
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
                </div>
               
            </div>
        );
    }
}

export default Register;