import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";

function Cart (props) {
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState([]);

    useEffect(
        () => {
            let x = 0
            props.cartItems.map(
                (cart) => x = x + cart.price
            )
            setTotal(x)
            setCartItems(props.cartItems)
        }
    , [])

    const onPlaceOrder = () => 
    {
        let menuItemIds = []
        props.cartItems.map(
            (cartItem) => menuItemIds.push(cartItem.menu_id)
        )
        console.log(menuItemIds);
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/placeOrder", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "userId": props.userId,
                "menuItemIds": menuItemIds,
                "orderTotal": total,
                "restaurantId": props.restaurantId
            })
        })
        .then(res => res.text())
        .then(() => {
            console.log('reached')
            setTotal(0);
            setCartItems([]);
            props.clearCart();
        })
        .then(alert("Order Placed Successfully"))
    }

    return (
        <div>
            {
                cartItems.map(
                    (menu) => <MenuItemCard key={menu.menu_id+new Date().toUTCString()} dishName = {menu.dishName} price = {menu.price}/>
                )
            }
            {
                total > 0 ? 
                <div>
                    <h2>Total: {total}</h2>
                    <button className="btn btn-success" onClick={onPlaceOrder}>Place Order</button>
                </div> :
                <></>
            }
             
        </div>
    )
}

export default Cart;