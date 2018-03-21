import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";

import Chip from "material-ui/Chip";
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";
import List, {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemIcon
} from "material-ui/List";

import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";

import Create from "material-ui-icons/Create";
import Radio from "material-ui-icons/Radio";

const styles = theme => ({
    card: {
        margin: "15px 0",
        padding: 30
    },
    listItem: {
        padding: "8px 0"
    }
});

const issues = [
    { name: "Feature", icon: <i className="material-icons">call_made</i>, counter: "1/2/4", color: "#48d3c2" },
    {
        name: "Bug",
        icon: <i className="material-icons">bug_report</i>,
        counter: "2/2/5",
        color: "#ff5722"
    },
    {
        name: "Support",
        icon: <i className="material-icons">settings</i>,
        counter: "2/4/8",
        color: "#502da8"
    },
    {
        name: "Question",
        icon: <i className="material-icons">help</i>,
        counter: "1/3/7",
        color: "#5ca5ff"
    },
    {
        name: "DevOps",
        icon: <i className="material-icons">code</i>,
        counter: "0/0/0",
        color: "#ffd2fb"
    },
    {
        name: "Design",
        icon: <i className="material-icons">brush</i>,
        counter: "0/0/0",
        color: "#f5a523"
    },
    {
        name: "Epic",
        icon: <i className="material-icons">folder_open</i>,
        counter: "0/0/0",
        color: "#b8e986"
    }
];

class Issues extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="title">Issue Tracking</Typography>
                        <List>
                            {issues.map(issue => (
                                <ListItem
                                    key={issue.name}
                                    dense
                                    button
                                    className={classes.listItem}
                                >
                                    <ListItemIcon>{issue.icon}</ListItemIcon>
                                    <ListItemText primary={issue.name} />
                                    <ListItemSecondaryAction style={{padding: "12px 0"}}>
                                        <Chip
                                            label={issue.counter}
                                            style={{
                                                backgroundColor: issue.color,
                                                color: "#FFF",
                                                fontWeight: 500,
                                                height: 24
                                            }}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Issues.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);
