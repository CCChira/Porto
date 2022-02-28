import React from 'react';
import {Routes as ReactRouterRoutes, Route} from "react-router";
import {LoginFormComponent} from "../components/auth/loginForm/login-form.component";
import {LoginPage} from "../pages/login.page";
import {SignupPage} from "../pages/signup.page";
const Routes: React.FunctionComponent = () => {
    return (
        <ReactRouterRoutes>
            <Route path = "login" element={<LoginPage/>} />
            <Route path = "signup" element={<SignupPage/>} />
        </ReactRouterRoutes>
    );
}
export {Routes}