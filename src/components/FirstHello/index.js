import React, { useState } from "react";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../images/avatar.png";

const useStyles = makeStyles(theme => ({
    avatar: {
        borderRadius: "50%",
        margin: 0,
        // padding: "50px",
        // height: "100%",
        width: "45%",
    },
}));

export default ({ handleOpen, setHandleOpen }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
            <AutoRotatingCarousel
                label="Get started"
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                autoplay={false}
                style={{ position: "absolute" }}
            >
                <Slide
                    media={<img src={Avatar} className={classes.avatar} />}
                    mediaBackgroundStyle={{ backgroundColor: theme.palette.primary.main }}
                    style={{ backgroundColor: theme.palette.primary.dark }}
                    title="Hi, welcome to my portfolio"
                    subtitle="Nice to meet you"
                />
                <Slide
                    media={
                        <img
                            src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"
                            className={classes.avatar}
                        />
                    }
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title="Ever wanted to be popular?"
                    subtitle="Here you can find some of my project!"
                />
                <Slide
                    media={
                        <img src="https://media.giphy.com/media/kaBmqpJtdvFqo/giphy.gif" className={classes.avatar} />
                    }
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title="May the force be with you"
                    subtitle="Be friend and do something wonderful together"
                />
            </AutoRotatingCarousel>
        </div>
    );
};
