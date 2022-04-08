import Branding from "./Branding";
import React  from "react";
import Search from "./Search";

class UserPage extends React.Component {
    render() {
        return (
            <div className="">
                <Branding/>
                <div className="row mt-3">
                    <div className="col-3">
                        <div className="container">
                            <button className="container btn-primary d-block">Search Restaurant</button>
                            <button className="container btn-primary d-block">Account</button>
                            <button className="container btn-primary d-block">Order History</button>
                            <button className="container btn-primary d-block">Booking History</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <Search></Search>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserPage;