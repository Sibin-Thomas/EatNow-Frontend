import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import UserAccount from "./UserAccount";
import { Route, useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import Reviews from "./Reviews";
import Gallery from "./Gallery";

function RestaurantPage(props) {
    const [tabValue, setTabValue] = useState("search")
    const [userDetails, setUserDetails] = useState()
    let {userId} = useParams();

    useEffect(
        () => {
            fetch('http://localhost:8090/findUserById', {
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
        fetch("http://localhost:8090/addMenuItem", {
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
        .then((res) => console.log(res))
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
        }
    }

    const onTabClick = (e) =>
    {
        setTabValue(e.target.id)
    }

    return (
        <div className="">
            <Branding/>
            <div className="row mt-3">
                <div className="col-3">
                    <div className="container">
                        <button className="container btn-primary d-block" id="account" onClick={onTabClick}>Account</button>
                        <button className="container btn-primary d-block" id="menu" onClick={onTabClick}>Menu</button>
                        <button className="container btn-primary d-block" id="pending_orders" onClick={onTabClick}>Pending Orders</button>
                        <button className="container btn-primary d-block" id="order_history" onClick={onTabClick}>Order History</button>
                        <button className="container btn-primary d-block" id="menu" onClick={onTabClick}>Dining</button>
                        <button className="container btn-primary d-block" id="reviews" onClick={onTabClick}>Reviews</button>
                    </div>
                </div>
                <div className="col-8">
                    {
                        renderTabs(tabValue)
                    }
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;