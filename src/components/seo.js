/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import avatar from "../images/avatar.png";
import avatarRound from "../images/avatarRound.png";

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaTitle = title || site.siteMetadata.title;

    // meta={[
    //     {
    //         name: `description`,
    //         content: metaDescription,
    //     },
    //     {
    //         property: `og:title`,
    //         content: title,
    //     },
    //     {
    //         property: `og:description`,
    //         content: metaDescription,
    //     },
    //     {
    //         property: `og:type`,
    //         content: `website`,
    //     },
    //     {
    //         name: `twitter:card`,
    //         content: `summary`,
    //     },
    //     {
    //         name: `twitter:creator`,
    //         content: site.siteMetadata.author,
    //     },
    //     {
    //         name: `twitter:title`,
    //         content: title,
    //     },
    //     {
    //         name: `twitter:description`,
    //         content: metaDescription,
    //     },
    return (
        <Helmet>
            <html lang={lang} />
            <title> {metaTitle}</title>
            <meta property="og:title" content={`${metaTitle} | Steve Phuc Portfolio`} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={avatarRound} />
            {/* <meta property="og:url" content={url} /> */}
            <meta name="description" content={metaDescription} />
            {/* <meta name="theme-color" content="#4caf50" /> */}
            {/* <link rel="icon" type="image/png" href={avatar} /> */}
        </Helmet>
    );
}

export default SEO;
