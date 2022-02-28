import React from 'react';
import {Routes as ReactRouterRoutes, Route} from "react-router";
import {LoginFormComponent} from "../components/auth/loginForm/login-form.component";
const LoginPage: React.FunctionComponent = () => {
    return (
       <LoginFormComponent/>
    );
}
export {LoginPage}