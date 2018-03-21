import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "material-ui/styles";

import Navbar from "../features/Navbar/Navbar";
import LeftMenu from "../features/LeftMenu/LeftMenu";
import RightMenu from "../features/RightMenu/RightMenu";
import Overview from "../features/Overview/Overview";
import Loader from "../components/Loader";

const styles = theme => ({
    root: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden"
    },
    appFrame: {
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        padding: theme.spacing.unit * 3,
        height: "calc(100% - 110px)",
        marginTop: 110,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 110
        }
    }
});

class MainLayout extends React.Component {
    render() {
        const { user, users, project, classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <Navbar />
                    <LeftMenu />
                    <main className={classNames(classes.content, "body-main")}>
                        {project && users ? (
                            <Overview project={project} users={users} />
                        ) : (
                            <Loader />
                        )}
                    </main>
                    {users ? <RightMenu users={users} /> : <Loader />}
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
    users: PropTypes.array,
    project: PropTypes.object
};

export default withStyles(styles)(MainLayout);
