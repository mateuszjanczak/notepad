import React from "react";
import {Route, Redirect} from 'react-router-dom'
import AuthService from "../Service/AuthService";
import {routes} from "./Routes";

class AuthenticatedRoute extends React.Component<any, any> {

    render() {
        if(AuthService.isLogged()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to={routes.login} />
        }
    }
}

export default AuthenticatedRoute;