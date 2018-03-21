import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Grid from "material-ui/Grid";

import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";

import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import Tooltip from "material-ui/Tooltip";

const styles = theme => ({
    card: {
        margin: "15px 0",
        padding: 30
    },
    formControl: {
        margin: "0 0 25px 0",
        display: "block"
    },
    input: {
        color: "#000"
    },
    inputWrap: {
        position: "relative"
    }
});

class Production extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

    handleSave = name => event => {
        this.setState({
            name: event.target.value
        });
    };

    handleEdit = () => {
        this.setState({
            edit: !this.state.edit
        });
    };

    render() {
        const { classes, project } = this.props;
        const edit = !this.state.edit;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <div>
                                <Tooltip
                                    id="tooltip-icon"
                                    title={this.state.edit ? "Close" : "Edit"}
                                >
                                    <IconButton onClick={this.handleEdit}>
                                        {this.state.edit ? (
                                            <i className="material-icons">
                                                done
                                            </i>
                                        ) : (
                                            <i className="material-icons">
                                                edit
                                            </i>
                                        )}
                                    </IconButton>
                                </Tooltip>
                            </div>
                        }
                        title="Production"
                    />
                    <CardContent>
                        <FormControl
                            className={classNames(classes.formControl)}
                        >
                            <InputLabel>Production URL</InputLabel>
                            <Input
                                ref="url"
                                defaultValue={project.production.url}
                                disabled={edit}
                                disableUnderline={edit}
                                className={classes.input}
                                fullWidth
                                onChange={this.props.updateProjectField(
                                    project._id,
                                    "production.url"
                                )}
                            />
                        </FormControl>

                        <FormControl
                            className={classNames(classes.formControl)}
                        >
                            <InputLabel>Production Admin Panel URL</InputLabel>
                            <Input
                                ref="adminPanelUrl"
                                defaultValue={project.production.adminPanelUrl}
                                disabled={edit}
                                disableUnderline={edit}
                                className={classes.input}
                                fullWidth
                                onChange={this.props.updateProjectField(
                                    project._id,
                                    "production.adminPanelUrl"
                                )}
                            />
                        </FormControl>

                        <FormControl>
                            <Grid
                                container
                                spacing={24}
                                style={{ marginTop: 7 }}
                            >
                                <Grid item xs={6}>
                                    <div className={classes.inputWrap}>
                                        <InputLabel>Login</InputLabel>
                                        <Input
                                            ref="login"
                                            defaultValue={
                                                project.production.login
                                            }
                                            disabled={edit}
                                            disableUnderline={edit}
                                            className={classes.input}
                                            onChange={this.props.updateProjectField(
                                                project._id,
                                                "production.login"
                                            )}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.inputWrap}>
                                        <InputLabel>Password</InputLabel>
                                        <Input
                                            ref="password"
                                            defaultValue={
                                                project.production.password
                                            }
                                            disabled={edit}
                                            disableUnderline={edit}
                                            className={classes.input}
                                            onChange={this.props.updateProjectField(
                                                project._id,
                                                "production.password"
                                            )}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Production.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Production);
