import React from "react";
import { Link, graphql } from "gatsby";

import * as app_config from "../constants/app";
import { isMobile } from "react-device-detect";

import Meta from "../components/Meta";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";
import $ from "jquery";

class ProjectTemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const themeOptions = this.props.data.allContentfulGeneralOptions
            .edges[0].node;



        let iScrollPos = 0;
        const el = document.getElementsByClassName("project-layout")[0];

        $(window).scroll(function () {
            let iCurScrollPos = $(this).scrollTop();

            if (iCurScrollPos > iScrollPos || iCurScrollPos === 0) {
                //Scrolling Down
                el.classList.remove("nav_fixed");
            } else {
                //Scrolling Up
                el.classList.add("nav_fixed");
                $(".project-layout--left").css({
                    opacity: "1",
                    background: themeOptions.backgroundColorOfListingProject
                });
            }
            iScrollPos = iCurScrollPos;
        });

        $(".footer").css({ opacity: "1" });

        document.body.style.backgroundColor =
            themeOptions.backgroundColorOfListingProject;

        this.setState({
            location: window.location.pathname
        });
    }

    render() {
        const projects = this.props.data.allContentfulProject.edges;
        const themeOptions = this.props.data.allContentfulGeneralOptions
            .edges[0].node;

        let data_config = {
            head_text: themeOptions.headerOptionGeneral.headerOptionGeneral
                ? themeOptions.headerOptionGeneral.headerOptionGeneral
                : app_config.SITE_NAME,
            loading_bar_color: themeOptions.loadingBarColorGeneral
                ? themeOptions.loadingBarColorGeneral
                : app_config.LOADING_BAR_COLOR,
            meta_title: themeOptions.metaTitleGeneral
                ? themeOptions.metaTitleGeneral
                : app_config.META_TITLE,
            meta_description: themeOptions.metaDescriptionGeneral
                .metaDescriptionGeneral
                ? themeOptions.metaDescriptionGeneral.metaDescriptionGeneral
                : app_config.META_DESCRIPTION,
            meta_keywords: themeOptions.metaKeywordsGeneral.metaKeywordsGeneral
                ? themeOptions.metaKeywordsGeneral.metaKeywordsGeneral
                : app_config.META_KEYWORD,
            meta_robots: themeOptions.metaRobotsGeneral
                ? themeOptions.metaRobotsGeneral
                : app_config.META_ROBOTS,
            primary_color: themeOptions.primaryColorGeneral
                ? themeOptions.primaryColorGeneral
                : app_config.PRIMARY_COLOR,
            second_color: themeOptions.secondColorGeneral
                ? themeOptions.secondColorGeneral
                : app_config.SECONDARY_COLOR,
            background_color: themeOptions.backgroundColorGeneral
                ? themeOptions.backgroundColorGeneral
                : app_config.BACKGROUND_COLOR,
            footer_color: themeOptions.footerTextColorGeneral
                ? themeOptions.footerTextColorGeneral
                : app_config.FOOTER_COLOR,
            footer_text: themeOptions.footerOptionGeneral.footerOptionGeneral
                ? themeOptions.footerOptionGeneral.footerOptionGeneral
                : app_config.FOOTER_TEXT
        };

        let meta_data = {
            title:
                themeOptions.metaTitleOfListingProject !== undefined
                    ? themeOptions.metaTitleOfListingProject +
                    " | " +
                    data_config.meta_title
                    : data_config.meta_title,
            description: data_config.meta_description,
            keywords: data_config.meta_keywords,
            robots: data_config.meta_robots,
            location: this.state.location
        };

        const style_primary_color = {
            color: data_config.primary_color
        };

        const style_second_color = {
            color: data_config.second_color
        };

        const style_hover = {
            color: !isMobile ? data_config.primary_color : ""
        };

        const projectlist = projects.map((project, index) => (
            <ProjectItem
                key={index}
                data_config={data_config}
                project={project.node}
            />
        ));

        return (
            <div className="project-screen">
                <Meta {...meta_data} />
                <div className="project-layout">
                    <div className="project-layout--content">
                        <div className="project-layout--left">
                            <div className="section-content--menu">
                                <ul className="menu-first">
                                    <li className="active">
                                        <h1>
                                            <a href="https://www.completedentures.com.au" target="_blank" style={style_primary_color}>
                                                {data_config.head_text}
                                            </a>
                                        </h1>
                                    </li>
                                </ul>
                                <ul className="menu-second">
                                    <li className="m-r-10">
                                        <Link
                                            to="/page/about-us/"
                                            style={style_primary_color}
                                        >
                                            information
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/page/contact/"
                                            style={style_primary_color}
                                        >
                                            contact
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="menu-third only_desktop">
                                    <li>
                                        <Link
                                            to="/page/bio-in-japanese/"
                                            style={style_primary_color}
                                        >
                                            日本語
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="project-layout--right">
                            <div className="main-content">{projectlist}</div>

                            <Footer
                                data_config={data_config}
                                japan={true}
                                color={data_config.footer_color}
                            />
                        </div>
                    </div>
                </div>

                <style>
                    {`
              .section-content--menu > ul > li > a:hover{color: ${
                        style_hover.color
                        } !important}
              .footer a:hover {color: ${data_config.primary_color} !important}
              .footer a {color: ${data_config.second_color}}
              .project-layout--right {color: ${data_config.primary_color}}
              .project-list a:hover ~ .desc a{color: ${
                        style_primary_color.color
                        } !important}
              .project-list .desc a:hover{color: ${
                        data_config.primary_color
                        } !important}
              `}
                </style>
            </div>
        );
    }
}

export default ProjectTemp;

export const pageQuery = graphql`
    {
        allContentfulProject(skip: 0, limit: 10, sort: { fields: order }) {
            edges {
                node {
                    id
                    title
                    slug
                    order
                    description {
                        description
                    }
                    image {
                        title
                        description
                        file {
                            contentType
                            url
                        }
                    }
                }
            }
        }

        allContentfulGeneralOptions {
            edges {
                node {
                    metaTitleGeneral
                    metaDescriptionGeneral {
                        metaDescriptionGeneral
                    }
                    metaRobotsGeneral
                    metaKeywordsGeneral {
                        metaKeywordsGeneral
                    }
                    metaTitleOfListingProject
                    backgroundColorGeneral
                    primaryColorGeneral
                    secondColorGeneral
                    loadingBarColorGeneral
                    hideHeaderGeneral
                    headerOptionGeneral {
                        headerOptionGeneral
                    }
                    footerOptionGeneral {
                        footerOptionGeneral
                    }
                    footerTextColorOfHome
                    footerTextColorGeneral
                    hideHomepageGeneral
                    hideHeaderGeneral
                    hideFooterGeneral
                    metaTitleOfListingProject
                    metaDescriptionOfListingProject {
                        metaDescriptionOfListingProject
                    }
                    backgroundColorOfListingProject
                    headerTextColorOfHome
                    colorHoverForUrlOnHomePage
                    urlColorOfFooter
                }
            }
        }
    }
`;
