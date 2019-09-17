import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

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
                <SectionTitle title="contact" />
            </Container>
        </>
    );
};
