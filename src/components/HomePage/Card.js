import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/styles";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiCardSearchOutline } from "@mdi/js";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    // linkDemo: {
    //     marginLeft: "auto",
    // },
    cardActions: {
        justifyContent: "space-around",
        // padding: "0 ",
        "& button:hover": {
            backgroundColor: "transparent",
        },
        "& a:hover": {
            textDecoration: "none",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
        "& > *": {
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    },
}));

export default ({ title, subHeader, description, imageSrc, gitHubLink, demoLink }) => {
    const classes = useStyles();
    const theme = useTheme();
    // console.log(theme);

    return (
        <Card className={classes.card}>
            <CardHeader title={title || "Title"} subheader={subHeader} />
            <CardMedia className={classes.media} image={imageSrc} title={title} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {gitHubLink && (
                    <Link href={gitHubLink} className={classes.linkGit} target="_blank">
                        <IconButton aria-label="share">
                            <Icon
                                path={mdiGithubCircle}
                                title="Github Link"
                                size={1}
                                color={theme.palette.secondary.main}
                            />
                        </IconButton>
                        <Typography color="textSecondary">Github</Typography>
                    </Link>
                )}
                {demoLink && (
                    <Link href={demoLink} className={classes.linkDemo} target="_blank">
                        <IconButton aria-label="share">
                            <Icon
                                path={mdiCardSearchOutline}
                                title="Demo Link"
                                size={1}
                                color={theme.palette.secondary.main}
                            />
                        </IconButton>
                        <Typography color="textSecondary">DEMO</Typography>
                    </Link>
                )}
            </CardActions>
        </Card>
    );
};
