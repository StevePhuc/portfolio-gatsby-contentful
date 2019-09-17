import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";

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

export default () => {
    const classes = useStyles();

    return (
        <>
            <Container>
                <div id="project" style={{ paddingTop: "30px" }}>
                    <Typography variant="h2" className={classes.h2}>
                        Project
                    </Typography>
                </div>
                <Card title="Finlary" subheader="React, Firebase, Mongodb" body2="Description" />
            </Container>
            <Container>
                <div id="contact" style={{ paddingTop: "30px" }}>
                    <Typography variant="h2" className={classes.h2}>
                        Contact
                    </Typography>
                </div>
                <Card />
            </Container>
        </>
    );
};
