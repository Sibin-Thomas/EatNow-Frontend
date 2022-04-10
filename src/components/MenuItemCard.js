
function MenuItemCard(props)
{   
    return (
        <div className="container border border-3 p-3">
            <h5>{props.dishName}</h5>
            <h6>{props.price}</h6>
        </div>
    )
}

export default MenuItemCard;