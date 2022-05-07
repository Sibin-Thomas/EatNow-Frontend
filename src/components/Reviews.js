import { useEffect, useState } from "react";

function Reviews(props)
{
    const [comments, setComments] = useState([])
    useEffect(
        () => {
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/findComments", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "restaurantId": props.restaurantId
            })
        })
        .then(res => res.json())
        .then(res => setComments(res))
        }    
    ,[])  
    
    return (
        <div>
        {
            comments.map(
                (comment) => 
                <div className="container border border-3 p-3">
                    <h5>Rating: {comment.rating}</h5>
                    <h5>Coment: {comment.comment}</h5>
                    <h6>UserId: #{comment.userId}</h6>
                </div>
            )
        }
        </div>
    )
}
export default Reviews;