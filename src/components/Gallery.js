import { useEffect, useState } from "react";

function Gallery(props) {
    let baseUrl = "http://localhost:8090";
    const[images, setImages] = useState([]);
    const[uploadImage, setUploadImage] = useState();

    useEffect(
        () => {
            console.log(props.restaurantId)
            let formData = new FormData();
            formData.append("restaurantId", props.restaurantId)
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/getImages", {
                method: "POST",
                body : formData
            })
            .then(res => res.json())
            .then((res) => setImages(res))
            .then(console.log(images))
        },
        []
    )

    const onImageChange = (e) => {
        setUploadImage(e.target.files[0])
    }

    const onImageSubmit = () => {
        let formData = new FormData();
        formData.append("restaurantId", props.restaurantId)
        formData.append("image", uploadImage)
        formData.append("userId", props.userId)
        fetch(process.env.REACT_APP_BACKEND_ENDPOINT+"/addImage", {
            method: "POST",
            body : formData
        })
        .then(res => res.json())
        .then((res) => setImages(res))
    }

    return (
        <div>
            {
                images.map(
                    (imageUrl) => <img className="img-thumbnail h-50 w-50" src={baseUrl+imageUrl} />
                )
            }
            <input type="file" id="image" onChange={onImageChange}></input>
            <input type="submit" onClick={onImageSubmit}></input>
        </div>
    )
}

export default Gallery;