import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import logoIntegrify from "../images/logoIntegrify.svg";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
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
    console.log(headerButtons);
    return (
        <div className="header-main">
            <div className="header2">
                <div className="container">
                    <div className="box box1">
                        <Img classNameName="selfie" fixed={avata.fixed} alt="" />
                        {/* <Img fluid={data.contentfulHeader.avata.fluid} alt="" /> */}
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
                    <div>
                        {headerButtons.map(headerBt => (
                            <a href={headerBt.link}>{headerBt.button}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="photosrc">
                <p className="background-info-title">
                    <span style={{ color: "#fff" }}>Mu Cang Chai, Vietnam from space by</span>
                    {` `}
                    <a href="http://www.flickr.com/photos/23866512@N05" target="black">
                        Photo by tu_geo
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Header;
