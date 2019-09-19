import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";
import SectionTitle from "./SectionTitle";
import TTU from "../../images/thinktankunit.png";
import Vibami from "../../images/vibami.png";
import Matikainen from "../../images/matikainen.png";
import portfolio from "../../images/portfolio.png";

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

    const data = useStaticQuery(graphql`
        query {
            finlary: file(relativePath: { eq: "finlary.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eventify: file(relativePath: { eq: "eventify.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            learnwithtext: file(relativePath: { eq: "learnwithtext.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rotokin: file(relativePath: { eq: "rotokin.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            thinktankunit: file(relativePath: { eq: "thinktankunit.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vibami: file(relativePath: { eq: "vibami.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            matikainen: file(relativePath: { eq: "matikainen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            portfolio: file(relativePath: { eq: "portfolio.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log(data);

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
                            imageSrc={data.finlary.childImageSharp.fluid}
                            gitHubLink="https://github.com/DBi1512/demo-day"
                            demoLink="https://finlary.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Eventify "
                            subHeader="React, Redux, Firebase"
                            description="Integrify Intranet Event Manager React App"
                            imageSrc={data.eventify.childImageSharp.fluid}
                            gitHubLink="https://github.com/integrify-class2019/integrify-intranet-event-manager-react-app"
                            demoLink="https://eventify-beta.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Learning with Texts  "
                            subHeader="Chrome Extension, Javascript"
                            description="Learning Languages with Texts in your Content"
                            imageSrc={data.learnwithtext.childImageSharp.fluid}
                            demoLink="https://chrome.google.com/webstore/detail/learning-languages-with-t/degdjdhdlmnkeccfcpepfobgpjaphbee?hl=en"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Rokotin"
                            subHeader="HTML, Javascript, CSS, Firebase"
                            description="Vaccination-promotion application"
                            imageSrc={data.rotokin.childImageSharp.fluid}
                            gitHubLink="https://github.com/xurxe/Rokotin-NHH"
                            demoLink="https://rokotin.fi/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="TTU"
                            subHeader="React, Gatsby, Contentful, Firebase, Figma"
                            description="Think Tank Unit Website"
                            imageSrc={data.thinktankunit.childImageSharp.fluid}
                            demoLink="https://ttu-develop.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Portfolio"
                            subHeader="React, Gatsby, Contentful, Material-UI"
                            description="My portfolio"
                            imageSrc={data.portfolio.childImageSharp.fluid}
                            gitHubLink="https://github.com/StevePhuc/portfolio-gatsby-contentful"
                            demoLink="https://ttu-develop.netlify.com/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Vibami"
                            subHeader="Wordpress, SEO"
                            description="Vibami Website"
                            imageSrc={data.vibami.childImageSharp.fluid}
                            demoLink="https://www.vibami.fi/"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            title="Matikainen Oy"
                            subHeader="Wordpress, SEO"
                            description="Tilitoimisto (Accounting) Website"
                            imageSrc={data.matikainen.childImageSharp.fluid}
                            demoLink="http://www.matikainenoy.fi/"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
