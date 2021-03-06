import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiLinkedinBox, mdiTwitterCircle } from "@mdi/js";

// import Card from "./Card";
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
    const theme = useTheme();

    return (
        <>
            <Container>
                <SectionTitle title="contact" />
                <nav className="flex-nav">
                    <ul>
                        <li>
                            <a href="https://github.com/StevePhuc" target="_blank">
                                <Icon
                                    path={mdiGithubCircle}
                                    title="Github Link"
                                    size={1}
                                    // color={theme.palette.secondary.main}
                                />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/steve-phuc/" target="_blank">
                                <Icon
                                    path={mdiLinkedinBox}
                                    title="Github Link"
                                    size={1}
                                    // color={theme.palette.secondary.main}
                                />
                                <span>linkedin</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/StevePhucDev" target="_blank">
                                <Icon
                                    path={mdiTwitterCircle}
                                    title="Github Link"
                                    size={1}
                                    // color={theme.palette.secondary.main}
                                />
                                <span>twitter</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    );
};
