function DiningRestaurant(props) {

    const updateCapacity = () => {
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/updateCapacity", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "restaurantId": props.restaurantId,
                "capacity": document.getElementById("capacity").value
            })
        })
        .then(res => res.text())
        .then(alert("Updated Capacity"))
    }

    return (
        <div>
            <input type="text" className="display-inline p-2 m-3" id="capacity" placeholder="Capacity"></input>
            <button onClick={updateCapacity}>Update</button>
        </div>
    )

}

export default DiningRestaurant;