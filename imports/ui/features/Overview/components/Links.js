import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";
import Typography from "material-ui/Typography";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

const styles = theme => ({
    formControl: {
        margin: "15px 25px",
        display: "block",
        position: "relative"
    }
});

class Links extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, project } = this.props;

        const linkValue = project ? project.googleDriveUrl : "";
        return (
            <Card className={classes.card}>
                <CardContent>
                    <FormControl className={classes.formControl}>
                        <InputLabel>
                            Project Google Drive Folder Link
                        </InputLabel>
                        <Input
                            id="google-drive"
                            defaultValue={linkValue}
                            fullWidth
                        />
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}

Links.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Links);
