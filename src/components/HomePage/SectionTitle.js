import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    h2: {
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: " 3px 3px 0 rgba(0, 0, 0, 0.1)",
        color: "rgba(0, 0, 0, 0.59)",
        textAlign: "center",
        padding: "20px",
    },
}));

export default ({ title }) => {
    const classes = useStyles();

    return (
        <div id={title} style={{ paddingTop: "30px" }}>
            <Typography variant="h2" className={classes.h2}>
                {title}
            </Typography>
        </div>
    );
};
