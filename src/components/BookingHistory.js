import { useEffect, useState } from "react";
import BookingHistoryItem from "./BookingHistoryItem";

function BookingHistory(props) {
    const [fetched, setFetched] = useState(false);
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/getBookingHistory", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "userId": props.userId,
                "restaurantId": props.restaurantId,
                "type": props.type
            })
        })
        .then(res => res.json())
        .then(res => setBookingHistory(res))
        .then(setFetched(true))
    },
    [])

    if (fetched)
    {
        return (
            <div>
                {
                bookingHistory.map(
                    (booking) => <BookingHistoryItem name={booking.restaurantName} time={booking.time}/>
                    )
                }
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default BookingHistory;