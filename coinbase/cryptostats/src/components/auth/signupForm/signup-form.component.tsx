import React, { useState } from 'react';
import { Button, Link as MuiLink, TextField } from "@mui/material";
import { Link as RouteLink } from 'react-router-dom';

const SignupFormComponent: React.FunctionComponent = () => {
    const [ email, setEmail ] = useState('');
    const [ emailErrorRed, setEmailErrorRed ] = useState(false);
    const [ password, setPassword ] = useState('');
    const [ passwordErrorRed, setPasswordErrorRed ] = useState(false);
    const handleSignup = () => {
        if ( !email ) {
            setEmailErrorRed(true);
        } else setEmailErrorRed(false);
        if ( !password ) {
            setPasswordErrorRed(true);
        } else setPasswordErrorRed(false);
    }
    return (
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">Cryptostats</h1>
            <div className="flex flex-col gap-2">
                <TextField label="Email" className="w-80"
                           type="email"
                           required
                           helperText={ emailErrorRed && "Please enter a valid Email" }
                           value={ email }
                           onChange={ (event) => setEmail(event.target.value) }
                           error={ emailErrorRed }
                />
                <TextField label="Password"
                           className="w-80"
                           type="password"
                           required
                           helperText={ passwordErrorRed && "Please enter a valid Passowrd" }
                           value={ password }
                           onChange={ (event) => setPassword(event.target.value) }
                           error={ passwordErrorRed }
                />

                <RouteLink to="/login" className="justify-self-start self-start mt-2">
                    <MuiLink> Login</MuiLink>
                </RouteLink>
            </div>
            <Button variant="contained" className="w-80" onClick={ handleSignup }>
                <span className="p-1">Sign Up</span>
            </Button>
        </div>
    );
}
export { SignupFormComponent }