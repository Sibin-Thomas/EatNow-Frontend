import { useEffect, useState } from "react";

function MenuItemCard(props)
{
    const [isRestaurant, setIsRestaurant]  = useState(true);

    useEffect( () => 
        {
            if (props.isRestaurant != undefined)
                setIsRestaurant(props.isRestaurant);
        },
        []
    )
    
    const onAddClick = () => {
        props.passDishData({
            "dishName": props.dishName,
            "price": props.price,
            "menu_id": props.id
        })
    }

    return (
        <div className="container border border-3 p-3">
            <h5>{props.dishName}</h5>
            <h6>{props.price}</h6>
            {
                !isRestaurant ? <button className="container btn-primary d-block" id="add" onClick={onAddClick}>Add</button> : <></>
            }
        </div>
    )
}

export default MenuItemCard;