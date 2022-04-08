import React from "react";
import RestaurantCard from "./RestaurantCard";

class Search extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            restaurantList : [],
            searchValue: ""
        }
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onSearchValueChange = this.onSearchValueChange.bind(this)
    }

    
    onSearchClick() 
    {
        // console.log(this.state.searchValue)
        fetch("http://localhost:8080/searchRestaurants", 
        {
            method: "POST",
            body: JSON.stringify({searchValue: this.state.searchValue}),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => this.setState({
            restaurantList: res
        })
        )
        .then(()=>console.log(this.state.restaurantList[1]))
    }

    onSearchValueChange(e)
    {
        this.setState({
            searchValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <input type="text" id="search-bar" className="form-control" placeholder="Search restaurants, dishes etc..." onChange={this.onSearchValueChange}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="form-control btn-primary" onClick={this.onSearchClick}/>
                    </div>  
                </div>
                {
                    this.state.restaurantList.map(
                        (restaurant) => <RestaurantCard name={restaurant[0]} id={restaurant[4]} rating={restaurant[1]} address={restaurant[2]} diningAvailable={restaurant[3]} restaurantId={restaurant[4]}/>
                        )
                }
            </div>
        )
    }
}

export default Search;