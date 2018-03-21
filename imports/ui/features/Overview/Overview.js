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
import Compression from "../../components/Compression";

import { Projects } from "/imports/api/projects/projects.js";

import "./styles/Overview.less";

const styles = theme => ({});

class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLowResolution: false
        };

        this.updateProjectField = this.updateProjectField.bind(this);

        window.addEventListener("resize", () => {
            if (window.innerWidth < 1260) {
                this.setState({ isLowResolution: true });
            } else if (window.innerWidth >= 1260) {
                this.setState({ isLowResolution: false });
            }
        });
    }

    updateProjectField = (projectId, fieldName) => event => {
        Projects.update_field(projectId, fieldName, event.target.value);
    };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes, users, project } = this.props;
        const isLowResolution = this.state.isLowResolution;
        return (
            <Grid
                container
                spacing={24}
                style={{
                    marginTop: 7
                }}
                className="Overview"
            >
                {isLowResolution ? null : <Grid item xs={1} />}
                <Grid item xs={6} style={{ minWidth: "475px" }}>
                    {isLowResolution ? (
                        <div>
                            <Compression title={"Summary"}>
                                <Summary
                                    updateProjectField={this.updateProjectField}
                                    project={project}
                                />
                            </Compression>
                            <Compression title={"Links"}>
                                <Links project={project} />
                            </Compression>
                            <Compression title={"Production"}>
                                <Production
                                    updateProjectField={this.updateProjectField}
                                    project={project}
                                />
                            </Compression>
                        </div>
                    ) : (
                        <div>
                            <Summary
                                updateProjectField={this.updateProjectField}
                                project={project}
                            />
                            <Links project={project} />
                            <Production
                                updateProjectField={this.updateProjectField}
                                project={project}
                            />
                        </div>
                    )}
                </Grid>
                <Grid item xs={4} style={{ minWidth: "310px" }}>
                    {isLowResolution ? (
                        <div>
                            <Compression title={"Times"}>
                                <Times />
                            </Compression>
                            <Compression title={"Members"}>
                                <Members users={users} />
                            </Compression>
                            <Compression title={"Issues"}>
                                <Issues />
                            </Compression>
                        </div>
                    ) : (
                        <div>
                            <Times />
                            <Members users={users} />
                            <Issues />
                        </div>
                    )}
                </Grid>
                {isLowResolution ? null : <Grid item xs={1} />}
            </Grid>
        );
    }
}

Overview.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Overview);
