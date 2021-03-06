import { useEffect, useState } from "react";

function OrderHistory (props) 
{
    const [orders, setOrders] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(
        
        () => {
            console.log(props.userId)
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/fetchUserOrders", 
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "user_id": props.userId
                })
            })
            .then(res => res.json())
            .then((res) => setOrders(res))
            .then(setFetched(true))
        }
    ,[])
    if (fetched)
    {
        return (
            <div>
                {
                    orders.map(
                        (order) => 
                        <div className="container border border-3 p-3">
                            <h4>{order.restaurantName}</h4>
                            <h6>OrderId: #{order.orderId}</h6>
                            <h6>OrderTotal: {order.total}</h6>
                            <h6>Status: {order.status === 'PENDING' ?
                            <h6 className="text-dark">PENDING</h6>
                            :
                            order.status === 'ACCEPTED' ?
                            <h6 className="text-success">ACCEPTED</h6>
                            :
                            <h6 className="text-danger">NOT ACCEPTED</h6>
                        }</h6>
                        </div>
                    )
                }
            </div>
        );
    }
    else
    {
        return (
            <div></div>
        )
    }
}

export default OrderHistory;