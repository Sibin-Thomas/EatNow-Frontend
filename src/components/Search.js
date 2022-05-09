import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

function Search(props) {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [fetched, setFetched] = useState(false);

    
    const onSearchClick = () => 
    {
        // console.log(this.state.searchValue)
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/searchRestaurants", 
        {
            method: "POST",
            body: JSON.stringify({"searchValue": searchValue}),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setRestaurantList(res))
        .then(setFetched(true))
    }

    const onSearchValueChange = (e) => 
    {
        setSearchValue(e.target.value);
    }

    if (fetched)
    {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <input type="text" id="search-bar" className="form-control" placeholder="Search restaurants, dishes etc..." onChange={onSearchValueChange}/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="form-control btn-primary" onClick={onSearchClick}/>
                    </div>
                </div>
                {
                    restaurantList.map(
                        (restaurant) => <RestaurantCard name={restaurant.username} rating={restaurant.rating} address={restaurant.address} diningAvailable={restaurant.diningAvailable} restaurantId={restaurant.userId} userId={props.userId}/>
                        )
                }
            </div>
        )
    }
    else
    {
        return (
        <div>
            <div className="row">
                <div className="col-8">
                    <input type="text" id="search-bar" className="form-control" placeholder="Search restaurants, dishes etc..." onChange={onSearchValueChange}/>
                </div>
                <div className="col-2">
                    <input type="submit" className="form-control btn-primary" onClick={onSearchClick}/>
                </div>
            </div>
        </div>
        )
    }
}


export default Search;