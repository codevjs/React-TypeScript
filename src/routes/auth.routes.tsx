import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {Auth} from "modules";

const AuthRoute : React.FC<any> = ({ component : Component , ...rest  }) => {

    const {authenticated } = useContext(Auth.AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                return authenticated
                    ? <Component {...props} />
                    : <Redirect to={"/login"}/>
            }}
        />
    )
};

export default AuthRoute;
