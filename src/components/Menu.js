import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";

function Menu(props)
{
    const [menuItems, setMenuItems] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:8080/findMenuItems", {
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
            .then(() => console.log(menuItems))
        }, []
    )

    const onAddDish = () =>
    {
        fetch("http://localhost:8080/addMenuItem", {
            method: "POST",
            body: JSON.stringify({
                name: document.getElementById("dishName").value,
                price: document.getElementById("price").value,
                restaurant_id: props.user_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/text'
            }
        })
        .then((res) => res.text())
        .then((res) => console.log(res))
    }

    return (
        <div>
            {
                menuItems.map(
                    (menu) => <MenuItemCard dishName = {menu.name} price = {menu.price} key={menu.menu_id}/>
                )
            }
            <div>
                <input type="text" className="display-inline p-2 m-3" id="dishName" placeholder="Dish Name"></input>
                <input type="text" className="display-inline p-2 m-3" id="price" placeholder="Price"></input>
                <input type="submit" className="btn-primary" onClick={onAddDish}></input>
            </div>
        </div>
    )
}

export default Menu;