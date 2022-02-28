import React from 'react';
import {Routes as ReactRouterRoutes, Route} from "react-router";
import {SignupFormComponent} from "../components/auth/signupForm/signup-form.component";
const SignupPage: React.FunctionComponent = () => {
    return (
       <>
            <SignupFormComponent />
       </>
    );
}
export {SignupPage}