import React from 'react';
import './App.css';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";

import {LoginFormComponent} from "./components/auth/loginForm/login-form.component";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <LoginFormComponent/>
        </ThemeProvider>
    );
}

export default App;
