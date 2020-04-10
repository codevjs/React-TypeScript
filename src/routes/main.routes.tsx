import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// component
import Spinner from "../components/spin";

// pages
const Home   : React.FC = React.lazy(() => import('../pages/home'));
const Profile : React.FC = React.lazy(() => import('../pages/profile'));

const Router : React.FC = () => {

    return (
        <React.Suspense fallback={<Spinner tip={'Loading...'} spinning={true} />}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={true}
                        path={'/'}
                        component={Home}
                    />
                    <Route
                        exact={true}
                        path={'/profile'}
                        component={Profile}
                    />
                </Switch>
            </BrowserRouter>
        </React.Suspense>
    )
};

export default Router;
