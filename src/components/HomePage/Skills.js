import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Divider from "./Divider";

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
                <SectionTitle title="skills" />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="Javascript"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                            projects={[{ name: "Learning with Texts" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="React"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/react.svg"
                            projects={[{ name: "Finlary" }, { name: "Eventify" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="NodeJs"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                            projects={[{ name: "Finlary" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="MongoDB"
                            // avatarLink="https://cdn-assets-cloud.frontify.com/local/frontify/h_lNxVXLqrDqb2kyrixW3lMmUl7n-aBRzJUzyvzD7_-upBkdVDdsiMx8u-vvbrD7FrTHM1LaNiPHIF44B_UR4k0b-W0vhVtw2GwRWw7av6zEi-Lrx-Voqml87dS6Dwz5?width=2400"
                            projects={[{ name: "Finlary" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="Firebase"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                            projects={[{ name: "Finlary" }, { name: "Eventify" }, { name: "Rokotin" }, { name: "TTU" }]}
                        />
                    </Grid>{" "}
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="Gatsby"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/gatsby.svg"
                            projects={[{ name: "TTU" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="Contenful"
                            avatarLink="https://d21buns5ku92am.cloudfront.net/41748/images/265846-Mark_Circular_darkBg_800x800-dd92d6-large-1511779631.png"
                            projects={[{ name: "TTU" }]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Divider
                            title="Figma"
                            avatarLink="https://cdn.worldvectorlogo.com/logos/figma-1.svg"
                            projects={[{ name: "TTU" }]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
