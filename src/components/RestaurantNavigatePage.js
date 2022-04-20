import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import UserAccount from "./UserAccount";
import { Route, useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import Cart from "./Cart";

function RestaurantNavigatePage(props) {
    const [tabValue, setTabValue] = useState("search")
    const [userDetails, setUserDetails] = useState()
    const [cart, setCart] = useState([])
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

    const updateCart = (data) => {
        let x = cart
        x.push(data)
        setCart(x)
    }

    const clearCart = () => {
        setCart([])
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
                        <Menu user_id={userId} isRestaurant={false} passDishData={updateCart}></Menu>
                    </div>
                );
            case "cart":
                return <Cart cartItems={cart} userId={userId} clearCart={clearCart}/>        
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
                        <button className="container btn-primary d-block" id="cart" onClick={onTabClick}>Cart</button>
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

export default RestaurantNavigatePage;