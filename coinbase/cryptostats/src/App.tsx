import React from 'react';
import './App.css';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Routes} from "./routes/routes";


function App() {
    return (
        <>
            <Routes />
        </>
    );
}

export default App;
