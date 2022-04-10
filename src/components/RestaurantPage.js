import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import UserAccount from "./UserAccount";
import { Route, useParams, useSearchParams } from "react-router-dom";
import Menu from "./Menu";

function RestaurantPage({navigation, route}) {
    const [tabValue, setTabValue] = useState("search")
    const [userDetails, setUserDetails] = useState()
    let {userId} = useParams();

    useEffect(
        () => {
            fetch('http://localhost:8080/findUserById', {
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

    const renderTabs = (value) =>
    {
        switch(value)
        {
            case "account":
                return <UserAccount username={userDetails.username} address={userDetails.address} email={userDetails.email} phone={userDetails.phone}></UserAccount>
            case "menu":
                return <Menu user_id={userId}></Menu>
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