import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import Search from "./Search";
import UserAccount from "./UserAccount";
import {useParams} from "react-router-dom";
import OrderHistory from "./OrderHistory";
import BookingHistory from "./BookingHistory";
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
        color: "white",
        top:"300px",
        left: "550px",
        width:"1100px",
        transform: "translate(-50%, -50%)",
        "font-size": "20px",
    }
}


function UserPage({navigation, route}) {
    const [tabValue, setTabValue] = useState("search")
    const [userDetails, setUserDetails] = useState()
    let {userId} = useParams();

    useEffect(
        () => {
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/findUserById", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "user_id" : userId
                })
            })
            .then(res => res.json())
            .then(res => setUserDetails(res))
        }, []
    );

    const renderTabs = (value) =>
    {
        switch(value)
        {
            case "search":
                return <Search userId={userId}></Search>
            case "account":
                return <UserAccount username={userDetails.username} address={userDetails.address} email={userDetails.email} phone={userDetails.phone}></UserAccount>
            case "order":
                return <OrderHistory userId={userId}></OrderHistory>
            case "booking":
                return <BookingHistory userId={userId} restaurantId={userId} type={"Customer"} />
        }
    }

    const onTabClick = (e) =>
    {
        setTabValue(e.target.id)
    }

    return (
        <div className="">
            <div className="container-fluid d-flex">
            <div style={stylingObject.div}>
            Eat Now!!
            <div style={stylingObject.input}>
            <div className="row mt-3">
            <div className="col-3">
                    <div className="container">
                        <button className="container btn-primary d-block" id="search" onClick={onTabClick}>Search Restaurant</button>
                        <button className="container btn-primary d-block" id="account" onClick={onTabClick}>Account</button>
                        <button className="container btn-primary d-block" id="order" onClick={onTabClick}>Order History</button>
                        <button className="container btn-primary d-block" id="booking" onClick={onTabClick}>Booking History</button>
                    </div>
                </div>
                <div className="col-8">
                    {
                        renderTabs(tabValue)
                    }
                </div>
            </div>
            </div>
            </div>
            <img src={logo1} className="img-thumbnail" width="2000px"/>
            </div>
           
        </div>
    );
}

export default UserPage;