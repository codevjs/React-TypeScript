import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// context
import {AuthProvider} from "../components/context/auth.context";
// component
import Spinner from "../components/spin";
import AuthRoute from "./auth.routes";

// pages
const Home   : React.FC = React.lazy(() => import('../pages/home'));
const Login  : React.FC = React.lazy(() => import('../pages/login'));

const Router : React.FC = () => {

    return (
        <AuthProvider>
        <React.Suspense fallback={<Spinner tip={'fetching component ...'} spinning={true} />}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path={'/login'} component={Login} />
                    <AuthRoute  path={'/'} component={Home} />
                </Switch>
            </BrowserRouter>
        </React.Suspense>
        </AuthProvider>
    )
};

export default Router;
