import React from 'react';
import {Button, Link as MuiLink, TextField} from "@mui/material";
import {Link as RouteLink} from 'react-router-dom';

const LoginFormComponent: React.FunctionComponent = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">Cryptostats</h1>
            <div className="flex flex-col gap-2">
                <TextField label="Email" className="w-80" type="email" required/>
                <TextField label="Password" className="w-80" type="password" required/>
                <RouteLink to="/signup" className="justify-self-start self-start mt-2">
                    <MuiLink> Sign Up</MuiLink>
                </RouteLink>
            </div>
            <Button variant="contained" className="w-80">
                <span className="p-1">Login</span>
            </Button>
        </div>
    );
}
export {LoginFormComponent}