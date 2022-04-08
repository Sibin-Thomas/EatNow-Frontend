import React from "react";

class RestaurantCard extends React.Component {
    constructor(props)
    {
        super(props);
        this.onRestaurantClick = this.onRestaurantClick.bind(this)
    }
    
    onRestaurantClick()
    {
        console.log(this.props.restaurantId)
    }

    render() {
        return (
            <div className="mt-1 border border-3 p-2" onClick={this.onRestaurantClick}>
                <h3>{this.props.name}</h3>
                <h5>{this.props.address}</h5>
                <h6>Rating: {this.props.rating}</h6>
                <h6>{this.props.diningAvailable == "true" ? "Dining Available": ""}</h6>
            </div>
        ) 
    }
}

export default RestaurantCard;