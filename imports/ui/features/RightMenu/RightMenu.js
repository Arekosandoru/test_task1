import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";

import "./styles/RightMenu.less";

const drawerWidth = 83;

const styles = theme => ({
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
        maxHeight: "80%",
        backgroundColor: "#FFF",
        marginTop: "128px",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
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
        width: 46,
        height: 46
    },
    itemText: {
        color: "#797979"
    }
});

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                isOnline: true
            }
        };
    }

    render() {
        const { classes, users } = this.props;
        const users_list = users.map((user, i) => {
            return (
                <div key={i} className="users_list_item">
                    <Avatar
                        alt={user.name}
                        src={user.image}
                        className="right-menu-userImage"
                    />

                    <span className="right-menu-username">{user.name}</span>

                    {user.trigger ? (
                        <div className="user-status-wrap">
                            <div className="user-status" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            );
        });

        return (
            <Drawer
                variant="permanent"
                className="RightMenu"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="right"
            >
                <List>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="space-around"
                        className="speaker_notes_container"
                    >
                        <Grid item>
                            <i className="material-icons md-dark md-inactive">
                                speaker_notes
                            </i>
                        </Grid>
                    </Grid>
                </List>
                <Divider />
                <List>
                    {users_list}
                    <div className="users_list_item">
                        <i
                            className="material-icons md-dark md-inactive"
                            style={{
                                fontSize: 56,
                                color: "rgba(0, 0, 0, 0.1)",
                                paddingLeft: 14
                            }}
                        >
                            add_circle_outline
                        </i>
                        <span className="right-menu-username">More...</span>
                    </div>
                </List>
            </Drawer>
        );
    }
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftMenu);
