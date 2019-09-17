import React from "react";
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
import InboxIcon from "@material-ui/icons/Inbox";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
// import { useTheme } from "@material-ui/styles";

const sections = ["Home", "Project", "Contact"];
const useStyles = makeStyles(theme => ({
    toolbarSecondary: {
        overflowX: "auto",
        "& .MuiListItem-root": {
            width: "180px",
        },
        "& a:link": {
            color: "white",
        },
        "& a:hover": {
            textDecoration: "none",
        },
    },
    toolbarLink: {
        justifyContent: "space-between",
        width: "100%",
        display: "flex",
        color: "white!important",
        padding: theme.spacing(0),
        flexShrink: 0,
    },
    iconLink: {
        justifyContent: "center",
    },
    avatarList: {
        // flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        marginLeft: "auto",
        "& li": {
            paddingTop: "5px",
            paddingBottom: "5px",
            margin: "0",
        },
    },
}));

export default () => {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <Container>
            <Toolbar component="nav" variant="root" disableGutters className={classes.toolbarSecondary}>
                {/* {sections.map(section => (
                <Link key={section} href={`#${section}`} className={classes.toolbarLink}>
                    <HomeIcon />
                    <Typography>{section}</Typography>
                </Link>
            ))} */}

                <List className={classes.toolbarLink}>
                    <Link key="Home" href="#Home">
                        <ListItem button>
                            <ListItemIcon className={classes.iconLink}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link key="Home" href="#Project">
                        <ListItem button>
                            <ListItemIcon className={classes.iconLink}>
                                <AssignmentTurnedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItem>
                    </Link>
                    <Link key="Home" href="#Contact">
                        <ListItem button>
                            <ListItemIcon className={classes.iconLink}>
                                <ContactMailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </Link>
                    <Link key="Home" href="#Info" className={classes.avatarList}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Steve Phuc"
                                    src="http://images.ctfassets.net/4isj4wkaqd88/syTzt6GKnRD9JEuBYCARk/a7bafdfb0f965561f81f7eb45cc7e21c/phucavata.jpg?w=150&h=150&q=50&fm=webp&fit=fill"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Steve Phuc" />
                        </ListItem>
                    </Link>
                </List>
            </Toolbar>
        </Container>

        /* <div>
                <nav classNames="flex-nav nav-menutop">
                    <ul>
                        <li>
                            <a id="menu">
                                {" "}
                                <i classNames="fas fa-bars"></i> <span>Menu</span>{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav classNames="flex-nav nav-menutoplink">
                    <ul>
                        <li>
                            <a href="#home"> Home</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav> */
        // </div>
    );
};
