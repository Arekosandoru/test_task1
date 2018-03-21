import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Badge from "material-ui/Badge";

import "./styles/LeftMenu.less";

const drawerWidth = 278;

const styles = theme => ({
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        backgroundColor: "#FFF"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 70,
        height: 70
    },
    itemText: {
        color: "#797979"
    }
});

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { isOnline: true }
        };
    }

    render() {
        const { classes } = this.props;
        const projects = [
            {
                _id: 1,
                name: "Buildateam",
                color: "#3e4db8"
            },
            {
                _id: 2,
                name: "Kickstagram",
                color: "#f5a523"
            }
        ];

        return (
            <Drawer
                variant="permanent"
                className="LeftMenu"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div className={classNames(classes.toolbar, "Drawer-toolbar")}>
                    <Grid
                        className="Drawer-toolbar-inner"
                        container
                        alignItems="center"
                        direction="row"
                        justify="space-around"
                    >
                        <Grid item xs={4}>
                            <Avatar
                                alt="User Avatar"
                                src="/images/default-avatar.jpg"
                                className={classNames(
                                    classes.avatar,
                                    classes.bigAvatar
                                )}
                            />
                            <div className="user-status-wrap">
                                <div
                                    className={classNames(
                                        "user-status",
                                        this.state.user.isOnline
                                            ? "user-status-online"
                                            : ""
                                    )}
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={7}
                            container
                            alignItems="center"
                            direction="row"
                            justify="space-around"
                        >
                            <Badge
                                className={classNames(
                                    classes.margin,
                                    "notifications-badge"
                                )}
                                badgeContent={1}
                                color="secondary"
                            >
                                <i className="material-icons md-light">
                                    notifications
                                </i>
                            </Badge>
                            <i className="material-icons md-light">settings</i>
                            <i className="material-icons icon_file_upload md-light">
                                file_upload
                            </i>
                        </Grid>
                    </Grid>
                </div>
                <Divider />
                <List className="projects-dashboard">
                    <Grid
                        container
                        spacing={0}
                        style={{ padding: "10px 20px 0 20px" }}
                    >
                        <i className="material-icons light-icon">dashboard</i>
                        <span className="list-header-title">
                            PROJECTS DASHBOARD
                        </span>

                        <div>
                            <List component="nav" className="projects-list">
                                {projects.map(proj => {
                                    <ListItem
                                        button
                                        key={proj._id}
                                        className="left_menu_list_item"
                                    >
                                        <ListItemIcon>
                                            <i
                                                className="material-icons"
                                                style={{ color: proj.color }}
                                            >
                                                fiber_manual_record
                                            </i>
                                        </ListItemIcon>
                                        <ListItemText
                                            inset
                                            disableTypography
                                            primary={proj.name}
                                            className="list-text"
                                        />
                                    </ListItem>;
                                })}
                            </List>
                        </div>
                    </Grid>
                </List>
                <Divider />
                <List>
                    <Grid
                        container
                        spacing={0}
                        style={{ padding: "10px 20px" }}
                    >
                        <i className="material-icons light-icon">event</i>
                        <span className="list-header-title">MY ISSUES</span>
                    </Grid>
                </List>
                <Divider />
                <List>
                    <Grid
                        container
                        spacing={0}
                        style={{ padding: "10px 20px" }}
                    >
                        <i className="material-icons light-icon">timer</i>
                        <span className="list-header-title">TIME TRACKING</span>

                        <List component="nav" className="projects-list">
                            <ListItem button className="left_menu_list_item">
                                <ListItemIcon>
                                    <i
                                        className="material-icons"
                                        style={{ color: "#48d3c2" }}
                                    >
                                        play_arrow
                                    </i>
                                </ListItemIcon>
                                <ListItemText
                                    inset
                                    disableTypography
                                    primary="Start tracking"
                                    className="list-text"
                                />
                            </ListItem>
                            <ListItem button className="left_menu_list_item">
                                <ListItemIcon>
                                    <i
                                        className="material-icons"
                                        style={{ color: "#ffd2fb" }}
                                    >
                                        refresh
                                    </i>
                                </ListItemIcon>
                                <ListItemText
                                    inset
                                    disableTypography
                                    primary="Last tracked"
                                    className="list-text"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </List>
            </Drawer>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftMenu);
