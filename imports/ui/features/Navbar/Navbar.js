import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Tabs, { Tab } from "material-ui/Tabs";
import TextField from "material-ui/TextField";
import Input, { InputLabel } from "material-ui/Input";

import "./styles/Navbar.less";

const underlineStyle = {
    borderColor: "#FFF"
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <AppBar className="AppBar" position="static" color="primary">
                <Toolbar className="AppBar-toolbar">
                    <Typography
                        type="title"
                        color="inherit"
                        style={{
                            flex: 1,
                            fontSize: 23
                        }}
                    >
                        Project
                    </Typography>
                    <div className="search_input">
                        <i className="material-icons">search</i>
                        <Input disableUnderline={true} />
                    </div>
                </Toolbar>
                <Tabs
                    className="AppBar-tabs"
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="white"
                >
                    <Tab label="Overview" />
                    <Tab label="Tasks" />
                    <Tab label="Progress" />
                    <Tab label="Project integrations" />
                </Tabs>
            </AppBar>
        );
    }
}

export default Navbar;