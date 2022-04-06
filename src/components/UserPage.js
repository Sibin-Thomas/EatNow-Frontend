import Branding from "./Branding";
import React  from "react";
class UserPage extends React.Component {
    
    render() {
        return (
            <div className="">
                <Branding/>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="Search restaurants, dishes etc..."/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="form-control btn-primary" />
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        );
    }

}

export default UserPage;