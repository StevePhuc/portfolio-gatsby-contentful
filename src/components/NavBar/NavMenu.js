import React, { useState, useEffect } from "react";
import {
    Typography,
    Toolbar,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    ListItemAvatar,
    Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
// import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AvatarImage from "../../images/avatar.png";
import FirstHello from "../FirstHello";

const useStyles = makeStyles(theme => ({
    toolbar: {
        // overflowX: "auto",
        "& .MuiListItem-root": {
            // maxWidth: "180px",
            // minWidth: "100px",
        },
        "& a:link": {
            color: "white",
        },
        "& a:hover": {
            textDecoration: "none",
            // backgroundColor: theme.palette.primary.light,
        },
    },
    iconItemList: {
        justifyContent: "center",
    },
    toolbarList: {
        justifyContent: "space-between",
        width: "100%",
        display: "flex",
        color: "white!important",
        padding: theme.spacing(0),
        // flexShrink: 0,
    },
    avatarLink: {
        // flex: 1,
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            color: "white",
        },
        marginLeft: "auto",
        "& li": {
            paddingTop: "5px",
            paddingBottom: "5px",
            margin: "0",
        },
    },
    [theme.breakpoints.down("sm")]: {
        hideMedium: {
            display: "none",
        },
        avatarLink: {
            display: "flex",
            "& div": {
                textAlign: "center",
            },
        },
        avatarItem: {
            display: "flex",
            justifyContent: "center",
        },
    },
    [theme.breakpoints.down("xs")]: {
        cointainer: {
            padding: 0,
        },
        toolbar: {
            overflowX: "auto",
        },
        ItemList: {
            flexWrap: "wrap",
            justifyContent: "center",
            "& div": {
                textAlign: "center",
            },
            padding: "5px 5px 0 5px",
        },
    },
}));

export default () => {
    const classes = useStyles();
    // const theme = useTheme();
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleShowHello = () => {
        setHandleOpen({ open: true });
    };

    const matches = useMediaQuery("(max-width:600px)");
    useEffect(() => {
        // localStorage.clear();
        if (localStorage.getItem("firstTime") === null) {
            localStorage.setItem("firstTime", "true");
            setHandleOpen({ open: true });
        }
    }, []);

    return (
        <Container className={classes.cointainer}>
            <Toolbar component="nav" variant="dense" disableGutters className={classes.toolbar}>
                <List className={classes.toolbarList}>
                    <Link key="Home" href="#home">
                        <ListItem button className={classes.ItemList}>
                            <ListItemIcon className={classes.iconItemList}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link key="Project" href="#project">
                        <ListItem button className={classes.ItemList}>
                            <ListItemIcon className={classes.iconItemList}>
                                <AssignmentTurnedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItem>
                    </Link>
                    <Link key="Contact" href="#contact">
                        <ListItem button className={classes.ItemList}>
                            <ListItemIcon className={classes.iconItemList}>
                                <ContactMailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </Link>
                    <Link key="avatar" onClick={handleShowHello} className={classes.avatarLink}>
                        <ListItem className={classes.avatarList}>
                            <ListItemAvatar className={classes.avatarItem}>
                                <Avatar alt="Steve Phuc" src={AvatarImage} />
                            </ListItemAvatar>
                            <ListItemText primary="Steve Phuc" className={classes.hideMedium} />
                        </ListItem>
                        <FirstHello isMobile={matches} handleOpen={handleOpen} setHandleOpen={setHandleOpen} />
                    </Link>
                </List>
            </Toolbar>
        </Container>
    );
};
