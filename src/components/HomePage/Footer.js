import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

export default () => {
    const classes = useStyles();

    return (
        <footer>
            <div class="wrapper">
                <h2>Steve Phuc ©2019</h2>
            </div>
        </footer>
    );
};
