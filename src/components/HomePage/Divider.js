import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        "& h4": {
            margin: 0,
        },
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(2, 1),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
    bigAvatar: {
        // margin: 10,
        width: 60,
        // height: "100%",
        height: 60,
        "& img": { margin: 0 },
    },
    gridItem: {
        height: 60,
    },
}));

export default ({ title, avatarLink, description, projects = [] }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        {avatarLink && <Avatar alt={title} src={avatarLink} className={classes.bigAvatar} />}
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    {description}
                </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <Typography gutterBottom variant="body1">
                    Project
                </Typography>
                <div>
                    {projects.map(project => (
                        <Chip key={project.name} className={classes.chip} variant="outlined" label={project.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};
