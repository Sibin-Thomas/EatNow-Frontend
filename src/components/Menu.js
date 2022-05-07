import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";

function Menu(props)
{
    const [menuItems, setMenuItems] = useState([]);

    useEffect(
        () => {
            // console.log(props.isRestaurant);
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/findMenuItems", {
                method: "POST",
                body: JSON.stringify({
                    restaurant_id: props.user_id
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((res) => setMenuItems(res))
            
        }, []
    )

    
    return (
        <div>
            {
                menuItems.map(
                    (menu) => <MenuItemCard key={menu.menu_item_id} id={menu.menu_item_id} dishName = {menu.name} price = {menu.price} isRestaurant={props.isRestaurant} passDishData={props.passDishData}/>
                )
            }
        </div>
    )
}

export default Menu;