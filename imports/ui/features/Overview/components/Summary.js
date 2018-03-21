import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { moment } from "meteor/momentjs:moment";

import Chip from "material-ui/Chip";
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";

import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";

import Grid from "material-ui/Grid";
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import TextField from "material-ui/TextField";
import { MenuItem } from "material-ui/Menu";

import Create from "material-ui-icons/Create";
import CheckCircle from "material-ui-icons/CheckCircle";
import Button from "material-ui/Button";

const styles = theme => ({
    card: {
        margin: "15px 0",
        padding: 30
    },
    formControl: {
        margin: "0 0 25px 0",
        display: "block"
    },
    formSkills: {
        width: "100%"
    },
    deadlineHeader: {
        color: "#FFF",
        backgroundColor: "#c2c2c2",
        borderRadius: 4,
        fontSize: 12,
        padding: 6,
        marginRight: 20
    },
    input: {
        color: "#000"
    },
    inputDate: {
        color: "#5ca5ff"
    },
    textareaField: {
        fontWeight: 400,
        color: "#7a7a7b",
        lineHeight: "34px"
    }
});

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            expanded: false
        };
    }

    handleChange = name => event => {
        this.setState({
            name: event.target.value
        });
    };

    handleEdit = () => {
        this.setState({
            edit: !this.state.edit,
            expanded: !this.state.edit
        });
    };

    handleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const { classes, project } = this.props;
        const { expanded } = this.state;
        const edit = !this.state.edit;

        const dueDate = (
            <Input
                type="date"
                defaultValue={moment(project.deadline).format("YYYY-MM-DD")} //DD-MMM-YYYY
                className={classNames(classes.textField, "deadlineInputField")}
                disabled={edit}
                disableUnderline={edit}
                className={classes.inputDate}
                onChange={this.props.updateProjectField(
                    project._id,
                    "deadline"
                )}
            />
        );
        const subheader = (
            <div style={{ color: "#5ca5ff", fontWeight: 500 }}>
                <span className={classes.deadlineHeader}>
                    <i
                        className="material-icons"
                        style={{
                            color: "#FFF",
                            padding: "0 4px 0 2px",
                            fontSize: 8
                        }}
                    >
                        fiber_manual_record
                    </i>
                    New project
                </span>
                Due to: {dueDate}
            </div>
        );

        return (
            <form noValidate autoComplete="off">
                <Card className={classNames(classes.card, "card-summary")}>
                    <CardHeader
                        action={
                            <IconButton onClick={this.handleEdit}>
                                {this.state.edit ? (
                                    <i className="material-icons">done</i>
                                ) : (
                                    <i className="material-icons">edit</i>
                                )}
                            </IconButton>
                        }
                        title="Build a Team"
                        style={{ paddingBottom: 0 }}
                    />
                    <CardContent>
                        <div
                            style={{
                                color: "#5ca5ff",
                                fontWeight: 500,
                                marginBottom: 20
                            }}
                        >
                            <span className={classes.deadlineHeader}>
                                <i
                                    className="material-icons"
                                    style={{
                                        color: "#FFF",
                                        padding: "0 4px 0 2px",
                                        fontSize: 8
                                    }}
                                >
                                    fiber_manual_record
                                </i>
                                New project
                            </span>
                            Due to: {dueDate}
                        </div>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel>Website URL</InputLabel>
                            <Input
                                defaultValue={project.siteURL}
                                className={classes.textField}
                                disabled={edit}
                                disableUnderline={edit}
                                className={classes.input}
                                fullWidth
                                onChange={this.props.updateProjectField(
                                    project._id,
                                    "siteURL"
                                )}
                            />
                        </FormControl>

                        <FormControl
                            fullWidth
                            className={classNames(
                                classes.formControl,
                                "form-skills"
                            )}
                        >
                            <InputLabel>Skills requested</InputLabel>
                            <Input
                                defaultValue={project.skills}
                                disabled={edit}
                                disableUnderline={edit}
                                className={classes.input}
                                fullWidth
                                onChange={this.props.updateProjectField(
                                    project._id,
                                    "skills"
                                )}
                            />
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel>Client information</InputLabel>
                            <Grid container spacing={24}>
                                <Grid item xs={6} style={{minWidth: "140px"}}>
                                    <Input
                                        defaultValue={project.client.name}
                                        disabled={edit}
                                        disableUnderline={edit}
                                        className={classes.input}
                                        onChange={this.props.updateProjectField(
                                            project._id,
                                            "client.name"
                                        )}
                                    />
                                    <Input
                                        defaultValue={project.client.location}
                                        autoComplete="address-level2"
                                        disabled={edit}
                                        disableUnderline={edit}
                                        className={classes.input}
                                        onChange={this.props.updateProjectField(
                                            project._id,
                                            "client.location"
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6} style={{minWidth: "140px"}}>
                                    <Input
                                        defaultValue={
                                            project.client.phoneNumber
                                        }
                                        disabled={edit}
                                        disableUnderline={edit}
                                        className={classes.input}
                                        onChange={this.props.updateProjectField(
                                            project._id,
                                            "client.phoneNumber"
                                        )}
                                    />
                                    <Input
                                        defaultValue={project.client.timezone}
                                        disabled={edit}
                                        disableUnderline={edit}
                                        className={classes.input}
                                        onChange={this.props.updateProjectField(
                                            project._id,
                                            "client.timezone"
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </FormControl>

                        <FormControl
                            className={classNames(classes.formControl)}
                        >
                            <InputLabel>Project description</InputLabel>
                            <Input
                                defaultValue={project.description}
                                className={classNames(
                                    classes.textareaField,
                                    expanded ? "" : "expanded"
                                )}
                                multiline
                                fullWidth
                                disabled={edit}
                                disableUnderline={edit}
                                onChange={this.props.updateProjectField(
                                    project._id,
                                    "description"
                                )}
                            />
                            <Typography
                                component="p"
                                style={{
                                    color: "#5ca5ff",
                                    fontWeight: 500,
                                    cursor: "pointer"
                                }}
                                onClick={() =>
                                    this.setState({ expanded: !expanded })
                                }
                            >
                                {expanded ? "Read less" : "Read more"}
                            </Typography>
                        </FormControl>
                    </CardContent>
                </Card>
            </form>
        );
    }
}

Summary.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Summary);
