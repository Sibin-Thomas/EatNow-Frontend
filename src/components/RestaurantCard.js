import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function RestaurantCard (props){

    let navigate = useNavigate();
    
    const onRestaurantClick = () =>
    {
        console.log(props.restaurantId)
        navigate("/restaurantNavigatePage/"+props.restaurantId)
    }

    return (
        <div className="mt-1 border border-3 p-2" onClick={onRestaurantClick}>
            <h3>{props.name}</h3>
            <h5>{props.address}</h5>
            <h6>Rating: {props.rating}</h6>
            <h6>{props.diningAvailable == "true" ? "Dining Available": ""}</h6>
        </div>
    ) 
    
}

export default RestaurantCard;