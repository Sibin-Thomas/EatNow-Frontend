import { useEffect, useState } from "react";

function OrderStatusDecider(props) {

    const setStatus = () => {
        console.log(props.orderId)
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/updateOrderStatus", 
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "orderId": props.orderId,
                    "status": document.getElementById('selectMode').value+"ED"
                })
            })
            .then(alert("order changed"))
    }

    return (
        <div>
            <select class="form-select-sm" aria-label="Default select example" id="selectMode">
                <option selected>ACCEPT</option>
                <option>REJECT</option>
            </select>
            <button className="btn btn-primary" onClick={setStatus}>Submit</button>
        </div>
    )
}

export default OrderStatusDecider;