import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green, orange } from "@material-ui/core/colors";
import SEO from "../components/seo";
import "typeface-roboto";
import "../components/index.css";
import Header from "../components/header";
import OldIndex from "../components/old-html";
import MainHome from "../components/HomePage/MainHome";
import HideAppBar from "../components/NavBar/HideAppBar";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#6fbf73",
            main: "#4caf50",
            dark: "#357a38",
        },
        secondary: {
            main: "#795548",
        },
    },
});

const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <Header />
        <HideAppBar />
        <MainHome />
        {/* <OldIndex /> */}
    </ThemeProvider>
);

export default IndexPage;
