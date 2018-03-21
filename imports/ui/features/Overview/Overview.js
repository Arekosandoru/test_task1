import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import Summary from "./components/Summary";
import Links from "./components/Links";
import Production from "./components/Production";
import Times from "./components/Times";
import Members from "./components/Members";
import Issues from "./components/Issues";


import { Projects } from "/imports/api/projects/projects.js";

import "./styles/Overview.less";

const styles = theme => ({});

class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.updateProjectField = this.updateProjectField.bind(this);
    }

    updateProjectField = (projectId, fieldName) => event => {
        Projects.update_field(projectId, fieldName, event.target.value);
    };

    render() {
        const { classes, users, project } = this.props;

        return (
            <Grid
                container
                spacing={24}
                style={{
                    marginTop: 7
                }}
                className="Overview"
            >
                <Grid item xs={1} />
                <Grid item xs={6}>
                    <Summary updateProjectField={this.updateProjectField} project={project} />
                    <Links project={project} />
                    <Production updateProjectField={this.updateProjectField} project={project} />
                </Grid>
                <Grid item xs={4}>
                    <Times />
                    <Members users={users}/>
                    <Issues />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        );
    }
}

Overview.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Overview);
