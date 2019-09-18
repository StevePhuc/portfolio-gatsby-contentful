import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import TTU from "../../images/thinktankunit.png";

const useStyles = makeStyles(theme => ({
    h2: {
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: " 3px 3px 0 rgba(0, 0, 0, 0.1)",
        color: "rgba(0, 0, 0, 0.59)",
        textAlign: "center",
        padding: "20px",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <>
            <Container>
                <SectionTitle title="project" />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Finlary"
                            subHeader="React, Firebase, Nodejs, Mongodb"
                            description="Finlary - Learning Finnish Vocabulary App "
                            imageSrc="https://camo.githubusercontent.com/70795fc8753bb02bfeb86b92ae0958d79074ef90/68747470733a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f5f786a446731547553586574417a4279306a7a7870672e706e67"
                            gitHubLink="https://github.com/DBi1512/demo-day"
                            demoLink="https://finlary.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Eventify "
                            subHeader="React, Redux, Firebase"
                            description="Integrify Intranet Event Manager React App"
                            imageSrc="https://github.com/integrify-class2019/integrify-intranet-event-manager-react-app/raw/master/src/assets/images/demo.png"
                            gitHubLink="https://github.com/integrify-class2019/integrify-intranet-event-manager-react-app"
                            demoLink="https://eventify-beta.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Learning with Texts  "
                            subHeader="Chrome Extension, Javascript"
                            description="Learning Languages with Texts in your Content"
                            imageSrc="https://lh3.googleusercontent.com/PbRZQWkT3cgC-DCFiTC9GRNONcJPiI6BCJOMc3A8WFzu60qcr0Odp7FbhqrfDSAoeiHN4nTI7Q=w640-h400-e365"
                            demoLink="https://chrome.google.com/webstore/detail/learning-languages-with-t/degdjdhdlmnkeccfcpepfobgpjaphbee?hl=en"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Rokotin"
                            subHeader="HTML, Javascript, CSS, Firebase"
                            description="Vaccination-promotion application"
                            imageSrc="https://github.com/xurxe/Rokotin-NHH/raw/develop/assets/images/rokotin_logo_blue+underline-whiteBG.jpg"
                            gitHubLink="https://github.com/xurxe/Rokotin-NHH"
                            demoLink="https://rokotin.fi/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="TTU"
                            subHeader="React, Gatsby, Contentful, Firebase, Figma"
                            description="Think Tank Unit Website"
                            imageSrc={TTU}
                            demoLink="https://ttu-develop.netlify.com/"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
