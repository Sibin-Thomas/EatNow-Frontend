import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import UserAccount from "./UserAccount";
import { Route, useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import RestaurantOrderHistory from "./RestaurantOrderHistory";
import RestaurantPendingOrderHistory from "./RestaurantPendingOrderHistory";
import DiningRestaurant from "./DiningRestaurant";
import BookingHistory from "./BookingHistory";
import DiningUser from "./DiningUser";
import logo1 from "../images/logo2.png";

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
        top:"350px",
        left: "1000px",
        width:"2000px",
        transform: "translate(-50%, -50%)",
        "font-size": "20px",
    }
}

function RestaurantPage(props) {
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
        }
    , []);

    const onAddDish = () =>
    {
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/addMenuItem", {
            method: "POST",
            body: JSON.stringify({
                name: document.getElementById("dishName").value,
                price: document.getElementById("price").value,
                restaurant_id: userId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/text'
            }
        })
        .then((res) => res.text())
        .then((res) => alert("Dish Added Successfully"))
    }

    const renderTabs = (value) =>
    {
        switch(value)
        {
            case "account":
                return <UserAccount username={userDetails.username} address={userDetails.address} email={userDetails.email} phone={userDetails.phone}></UserAccount>
            case "menu":
                return (
                    <div>
                        <Menu user_id={userId}></Menu>
                        <div>
                            <input type="text" className="display-inline p-2 m-3" id="dishName" placeholder="Dish Name"></input>
                            <input type="text" className="display-inline p-2 m-3" id="price" placeholder="Price"></input>
                            <input type="submit" className="btn-primary" onClick={onAddDish}></input>
                        </div>
                    </div>
                )
            case "reviews":
                return <Reviews restaurantId={userId} />
            case "gallery":
                return <Gallery restaurantId={userId} userId={userId}/>
            case "pending_orders":
                return <RestaurantPendingOrderHistory restaurantId={userId} status="pending" sss={"sd"}></RestaurantPendingOrderHistory>
            case "order_history":
                return <RestaurantOrderHistory restaurantId={userId} status="notpending"></RestaurantOrderHistory>
            case "dining":
                return <DiningRestaurant restaurantId={userId}/>
            case "booking_history":
                return <BookingHistory userId={userId} restaurantId={userId} type={"Restaurant"} />
            case "booking_table":
                return <DiningUser userId={userId} restaurantId={userId}/>
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
                <button className="container btn-primary d-block" id="account" onClick={onTabClick}>Account</button>
                <button className="container btn-primary d-block" id="menu" onClick={onTabClick}>Menu</button>
                <button className="container btn-primary d-block" id="pending_orders" onClick={onTabClick}>Pending Orders</button>
                <button className="container btn-primary d-block" id="order_history" onClick={onTabClick}>Order History</button>
                <button className="container btn-primary d-block" id="reviews" onClick={onTabClick}>Reviews</button>
                <button className="container btn-primary d-block" id="dining" onClick={onTabClick}>Dining Capacity</button>
                <button className="container btn-primary d-block" id="booking_history" onClick={onTabClick}>Booking History</button>
                <button className="container btn-primary d-block" id="booking_table" onClick={onTabClick}>Booking Table</button>
            </div>
            </div>
            </div>
            <div className="col-8">
            {
                renderTabs(tabValue)
            }
            </div>
            </div>
            </div>
            <img src={logo1} className="img-thumbnail" width="2000px"/>
            </div>
           
        </div>
    );
}

export default RestaurantPage;