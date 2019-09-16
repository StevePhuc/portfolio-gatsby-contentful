import React from "react";
import { Link } from "gatsby";
import { Button } from "semantic-ui-react";

import SEO from "../components/seo";
import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import Header from "../components/header";
import Project from "../components/project";

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Header />
        <Project />
    </div>
);

export default IndexPage;
