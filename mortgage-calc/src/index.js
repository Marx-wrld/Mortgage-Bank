import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from  "./theme";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //importing the theme.js file in our index.js file and wrapping the app with the ThemeProvider
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);


