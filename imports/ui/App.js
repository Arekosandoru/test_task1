import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import MainLayoutContainer from './containers/MainLayoutContainer.js';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainLayoutContainer />
            </MuiThemeProvider>
        );
    }
}
