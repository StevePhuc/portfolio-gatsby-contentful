import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import NavMenu from "./NavMenu";
import green from "@material-ui/core/colors/green";

const primary = green[500]; // #F44336

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const [windowHeigh, setWindowHeigh] = useState(1000);
    useEffect(() => {
        setWindowHeigh(document.documentElement.clientHeight);
        console.log(document.documentElement.clientHeight);
    }, []);

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        // disableHysteresis: true,
        threshold: windowHeigh,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger} timeout={700}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function HideAppBar(props) {
    return (
        <>
            {/* <CssBaseline /> */}
            <HideOnScroll {...props}>
                <AppBar position="sticky" color="primary">
                    {/* <Toolbar> */}
                    <NavMenu />
                    {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}
                    {/* </Toolbar> */}
                </AppBar>
            </HideOnScroll>
            {/* <Toolbar /> */}
        </>
    );
}
