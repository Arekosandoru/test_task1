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
import Avatar from "material-ui/Avatar";

import Share from "material-ui-icons/Share";
import Create from "material-ui-icons/Create";

import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "material-ui/Table";

const styles = theme => ({
    card: {
        marginTop: 10,
        marginBottom: 10
    },
    media: {
        height: 194
    },
    actions: {
        display: "flex"
    },
    avatar: {
        float: "left",
        marginRight: 10
    },
    cell: {
        borderBottom: 0
    },
    membersTitle: {
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "1.3125rem",
        fontWeight: 500,
        fontFamily: "Roboto",
        lineHeight: "1.16667em",
        paddingBottom: 20
    },
    membersRate: {
        paddingBottom: 0
    },
    membersRateValue: {
        fontWeight: 700
    }
});

class Members extends React.Component {
    render() {
        const { classes, users } = this.props;
        const members = users.map((user, i) => {
            return (
                <TableRow key={i}>
                    <TableCell className={classes.cell}>
                        <Avatar
                            className={classes.avatar}
                            alt={user.name}
                            src={user.image}
                        />
                        <Typography variant="body2" noWrap={true}>{user.name}</Typography>
                        <Typography variant="caption" noWrap={true}>{user.role}</Typography>
                    </TableCell>
                    <TableCell
                        className={classNames(
                            classes.cell,
                            classes.membersRateValue
                        )}
                    >
                        ${user.rate}
                    </TableCell>
                </TableRow>
            );
        });

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <CardHeader
                            action={
                                <div>
                                    <IconButton>
                                        <Share />
                                    </IconButton>
                                    <IconButton>
                                        <Create />
                                    </IconButton>
                                </div>
                            }
                            style={{ padding: "0 24px" }}
                        />
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        className={classNames(
                                            classes.cell,
                                            classes.membersTitle
                                        )}
                                    >
                                        Members
                                    </TableCell>
                                    <TableCell
                                        className={classNames(
                                            classes.cell,
                                            classes.membersRate
                                        )}
                                    >
                                        RATE
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{members}</TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Members.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Members);
