import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DiningUser(props) {
    const [startDate, setStartDate] = useState(new Date());

    const bookTable = () => {
        const datetime = startDate.getDate()+"/"+(startDate.getMonth()+1)+"/22 Time: "+document.getElementById("hour").value;
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/bookTable", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "restaurantId": props.restaurantId,
                "userId": props.userId,
                "datetime": datetime
            })
        })
        .then(res => res.text())
        .then(res => res == "success" ? alert("Booked Table Successfully") : alert("No Tables Available"))
    }

    return (
        <div>
            <h6>Pick Date</h6>
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            <h6>Pick Starting Hour</h6>
            <select class="form-select" aria-label="Default select example" id="hour">
                <option selected>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
            </select>
            <button onClick={bookTable}>Book</button>
        </div>
    );
}
export default DiningUser;