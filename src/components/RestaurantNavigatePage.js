import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import UserAccount from "./UserAccount";
import { Route, useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import Cart from "./Cart";
import Reviews from "./Reviews";
import Gallery from "./Gallery";

function RestaurantNavigatePage({route, navigation}) {
    const [tabValue, setTabValue] = useState("search")
    const [userDetails, setUserDetails] = useState()
    const [cart, setCart] = useState([])
    let {restaurantId, userId} = useParams();

    useEffect(
        () => {
            fetch('http://localhost:8090/findUserById', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "user_id" : restaurantId
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

    const onAddComment = () => {
        fetch('http://localhost:8090/addComments', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "userId" : userId,
                    "restaurantId": restaurantId,
                    "rating": document.getElementById('rating').value,
                    "comment": document.getElementById('comment').value

                })
            })
            .then(res => res.text())
            .then(res => console.log(res))
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
                        <Menu user_id={restaurantId} isRestaurant={false} passDishData={updateCart}></Menu>
                    </div>
                );
            case "cart":
                return <Cart userId={userId} cartItems={cart} restaurantId={restaurantId} clearCart={clearCart}/>  
            case "reviews":
                return (
                <div>
                    <Reviews userId={userId} restaurantId={restaurantId} />
                    <div>
                            <input type="text" className="display-inline p-2 m-3" id="rating" placeholder="Rating 0-5"></input>
                            <input type="text" className="display-inline p-2 m-3" id="comment" placeholder="Comment"></input>
                            <input type="submit" className="btn-primary" onClick={onAddComment}></input>
                    </div>
                </div>
                );
            case "gallery":
                return <Gallery userId={userId} restaurantId={restaurantId} />
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
                        <button className="container btn-primary d-block" id="account" onClick={onTabClick}>Information</button>
                        <button className="container btn-primary d-block" id="menu" onClick={onTabClick}>Menu</button>
                        <button className="container btn-primary d-block" id="cart" onClick={onTabClick}>Cart</button>
                        <button className="container btn-primary d-block" id="reviews" onClick={onTabClick}>Reviews</button>
                        <button className="container btn-primary d-block" id="gallery" onClick={onTabClick}>Gallery</button>
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