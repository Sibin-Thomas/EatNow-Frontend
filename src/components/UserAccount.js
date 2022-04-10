import React from "react";

class UserAccount extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                <h5>Username: {this.props.username}</h5>
                <h5>Address: {this.props.address}</h5>
                <h5>Email: {this.props.email}</h5>
                <h5>Phone: {this.props.phone}</h5>
            </div>
        )
    }
}

export default UserAccount;