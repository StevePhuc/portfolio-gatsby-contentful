import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import logoIntegrify from "../images/logoIntegrify.svg";
import muquangchai from "../images/muquangchai.jpg";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "muquangchai.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            contentfulHeader {
                name
                title
                subline
                place
                headling
                headlineTime
                avata {
                    fixed(height: 100, width: 100) {
                        height
                        width
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                        tracedSVG
                        base64
                        aspectRatio
                    }
                }
                background {
                    fluid {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                headerButtons {
                    button
                    link
                }
            }
        }
    `);

    const { avata, name, title, subline, place, headling, headlineTime, headerButtons } = data.contentfulHeader;
    console.log(data.file);
    return (
        <div className="header-main">
            <Img fluid={data.file.childImageSharp.fluid} className="header-background" />
            {/* <img  src={muquangchai} alt="Mu Quang Chai" /> */}
            <div className="header2">
                <div className="container">
                    <div className="box box1">
                        <Img classNameName="selfie" fixed={avata.fixed} alt="" />
                    </div>
                    <div className="box box2">
                        <h3>{name}</h3>
                        <em>{title}</em>
                    </div>
                    <div className="box box3">
                        <address>{place}</address>
                    </div>
                    <div className="box box4">
                        <img src={logoIntegrify} alt="" />
                    </div>
                </div>
            </div>
            <div className="header1">
                <div className="ready">
                    <span>{headling}</span>
                </div>
                <div className="time">{headlineTime}</div>
                <div className="talented">
                    <span>{subline}</span>
                </div>
                <div className="late">
                    {headerButtons.map(headerBt => (
                        <a key={headerBt.link} href={headerBt.link}>
                            {headerBt.button}
                        </a>
                    ))}
                </div>
            </div>
            <div className="photosrc">
                <p className="background-info-title" style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                    <span>Mu Cang Chai, Vietnam from space by</span>
                    {` `}
                    <a
                        href="http://www.flickr.com/photos/23866512@N05"
                        target="black"
                        style={{ color: "rgba(255, 255, 255, 0.65)" }}
                    >
                        Photo by tu_geo
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Header;
