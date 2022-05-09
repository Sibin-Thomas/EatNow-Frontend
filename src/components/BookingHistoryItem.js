function BookingHistoryItem(props) {
    return (
        <div className="container border border-3 p-3">
            <h5>{props.name}</h5>
            <h6>{props.time}</h6>
        </div>
    )
}

export default BookingHistoryItem;