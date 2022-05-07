import Branding from "./Branding";
import React, { useEffect, useState }  from "react";
import Search from "./Search";
import UserAccount from "./UserAccount";
import {useParams} from "react-router-dom";
import OrderHistory from "./OrderHistory";

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
                return <Search></Search>
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
    );
}

export default UserPage;