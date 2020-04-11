import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext} from "../components/context/auth.context";

const AuthRoute : React.FC<any> = ({ component : Component , ...rest  }) => {

    const {authenticated } = useContext(AuthContext);

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

export default AuthRoute
