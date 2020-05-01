import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Spinner} from "components";
import {Auth} from "modules";

// component
import AuthRoute from "./auth.routes";

// pages
const Login     : React.FC = React.lazy(() => import('../pages/login'));
const Dashboard : React.FC = React.lazy(() => import('../pages/dashboard'));
const Account   : React.FC = React.lazy(() => import('../pages/account'));

const Router : React.FC = () => {
    return (
        <Auth.AuthProvider>
            <React.Suspense fallback={<Spinner tip={'fetching component ...'} spinning={true} />}>
                <BrowserRouter>
                    <Switch>
                        <Route      path={'/login'}                  component={Login}     />
                        <AuthRoute  path={'/manage/dashboard'}       component={Dashboard} />
                        <AuthRoute  path={'/manage/setting/account'} component={Account}   />
                    </Switch>
                </BrowserRouter>
            </React.Suspense>
        </Auth.AuthProvider>
    )
};

export default Router;
