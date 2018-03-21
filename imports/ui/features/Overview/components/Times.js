import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";

import Chip from "material-ui/Chip";
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";

import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Input, { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";

const styles = theme => ({
    card: {
        margin: "15px 0"
    },
    cardContent: {
        padding: 0,
        paddingBottom: 0
    },
    formControl: {
        margin: "0 0 25px 0",
        display: "block"
    },
    container: {
        margin: "7px 0 0 0",
        width: "100%"
    },
    paragraphTitle: {
        color: "#797979",
        opacity: 0.8,
        fontSize: "0.75rem"
    },
    paragraphTime: {
        fontWeight: 500,
        fontSize: 20,
        opacity: 0.8
    },
    timeSectionBottom: {
        backgroundColor: "#f1f1f1"
    }
});

class Times extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <div className="time-section-top">
                        <Grid
                            container
                            spacing={24}
                            className={classes.container}
                        >
                            <Grid
                                item
                                xs={2}
                                style={{ padding: "20px 0 0 20px" }}
                            >
                                <i
                                    className="material-icons"
                                    style={{
                                        fontSize: "34px",
                                        lineHeight: "34px",
                                        color: "#929292"
                                    }}
                                >
                                    av_timer
                                </i>
                            </Grid>
                            <Grid item xs={5} style={{ minWidth: 115,
                             paddingRight: 0 }}>
                                <Typography
                                    component="p"
                                    className={classes.paragraphTitle}
                                >
                                    Total Estimated
                                </Typography>
                                <Typography
                                    component="p"
                                    style={{
                                        fontWeight: 500,
                                        fontSize: 22
                                    }}
                                >
                                    13:11:34:27
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                container
                                className={classes.container}
                                alignItems="flex-end"
                                style={{
                                    margin: 0,
                                    padding: "14px 14px 15px 14px",
                                }}
                            >
                                <Typography
                                    component="p"
                                    style={{    
                                        color: "#5ca5ff",
                                        fontWeight: 500,
                                        cursor: "pointer"
                                    }}
                                >
                                    See Activity
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div
                        className={classNames(
                            classes.timeSectionBottom,
                            "time-section-bottom"
                        )}
                    >
                        <Grid
                            container
                            spacing={24}
                            className={classes.container}
                        >
                            <Grid item xs={2} />
                            <Grid item xs={10} style={{ minWidth: 145 }}>
                                <Typography
                                    component="p"
                                    className={classes.paragraphTitle}
                                >
                                    Total time purchased
                                </Typography>
                                <Typography
                                    component="p"
                                    className={classes.paragraphTime}
                                >
                                    13:11:34:27
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={24}
                            className={classes.container}
                        >
                            <Grid item xs={2} />
                            <Grid
                                item
                                xs={10}
                                style={{
                                    minWidth: 145,
                                    padding: "0 12px",
                                    marginBottom: 12
                                }}
                            >
                                <Typography
                                    component="p"
                                    className={classes.paragraphTitle}
                                >
                                    Total time tracked
                                </Typography>
                                <Typography
                                    component="p"
                                    className={classes.paragraphTime}
                                >
                                    13:11:34:27
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        );
    }
}

Times.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Times);
