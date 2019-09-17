import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
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

export default ({ title, subheader, body2 }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader title={title || "Title"} subheader={subheader} />
            <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body2}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
<<<<<<< HEAD
                <a href="#contact" className={classes.linkGit} target="_blank">
=======
                <Link variant="body2" href="#contact" className={classes.linkGit}>
>>>>>>> 3c49d149099eaa06db74340ce59af92deb353959
                    <IconButton aria-label="share">
                        <CodeIcon color="secondary" />
                    </IconButton>
                    <Typography color="textSecondary">Github</Typography>
<<<<<<< HEAD
                </a>
=======
                </Link>
>>>>>>> 3c49d149099eaa06db74340ce59af92deb353959
                <Link variant="body2" href="#contact" className={classes.linkDemo}>
                    <IconButton aria-label="share">
                        <VisibilityIcon color="secondary" />
                    </IconButton>
                    <Typography color="textSecondary">DEMO</Typography>
                </Link>
            </CardActions>
        </Card>
    );
};
