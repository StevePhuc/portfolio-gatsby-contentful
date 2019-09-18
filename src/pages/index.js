import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green, orange } from "@material-ui/core/colors";
import SEO from "../components/seo";
import "typeface-roboto";
import "../components/index.css";
import Header from "../components/header";
// import OldIndex from "../components/old-html";
import Projects from "../components/HomePage/Projects";
import Skills from "../components/HomePage/Skills";
import HideAppBar from "../components/NavBar/HideAppBar";
import Contact from "../components/HomePage/Contact";
import Footer from "../components/HomePage/Footer";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4caf50",
            dark: "#357a38",
        },
        secondary: {
            main: "#af504c",
        },
        third: {
            main: "#4c7aaf",
        },
    },
});

const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <Header />
        <HideAppBar />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        {/* <OldIndex /> */}
    </ThemeProvider>
);

export default IndexPage;
