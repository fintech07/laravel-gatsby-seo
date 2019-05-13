import React from "react";
import { Link, graphql } from "gatsby";

import * as app_config from "../constants/app";
import renderHTML from "react-render-html";
import { isMobile } from "react-device-detect";

import Meta from "../components/Meta";
import Media from "../components/Media";
import Footer from "../components/Footer";
import GoBack from "../components/GoBack";

import Vimeo from "@u-wave/react-vimeo";
import $ from "jquery";

class ProjectTemp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: ""
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const project = this.props.data.contentfulProject;

    let iScrollPos = 0;
    const el = document.getElementsByClassName("project-layout")[0];

    $(window).scroll(function() {
      let iCurScrollPos = $(this).scrollTop();

      if (iCurScrollPos > iScrollPos || iCurScrollPos === 0) {
        //Scrolling Down
        el.classList.remove("nav_fixed");
      } else {
        //Scrolling Up
        el.classList.add("nav_fixed");
        $(".project-layout--left").css({
          opacity: "1",
          background: project.backgroundColorProject
        });
      }
      iScrollPos = iCurScrollPos;
    });

    $(".footer").css({ opacity: "1" });
    //setTimeout(function(){ $('.footer').css({ "opacity": "1"}); }, 1000);
    document.body.style.backgroundColor = project.backgroundColorProject;

    this.setState({
      location: window.location.pathname
    })
  }

  render() {
    const project = this.props.data.contentfulProject;
    const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
      .node;
    let medias = "";

    if (project.medias !== undefined) {
      medias = project.medias.map((media, index) => (
        <Media media={media} key={index} />
      ));
    }

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
      title: project.metaTitleProject
        ? project.metaTitleProject + ' | ' + data_config.meta_title
        : data_config.meta_title,
      description: project.metaDescriptionProject.metaDescriptionProject
        ? project.metaDescriptionProject.metaDescriptionProject
        : data_config.meta_title,
      keywords: project.metaKeywordsProject
        ? project.metaKeywordsProject
        : data_config.meta_title,
      robots: project.metaRobotsProject
        ? project.metaRobotsProject
        : data_config.meta_robots,
      location: this.state.location
    };

    const style_primary_color = {
      color: project.primaryColorProject
        ? project.primaryColorProject
        : data_config.primary_color
    };

    const style_second_color = {
      color: project.secondColorProject
        ? project.secondColorProject
        : data_config.second_color
    };

    let vimeo1 = "";
    let vimeo2 = "";
    let vimeo3 = "";
    let vimeo4 = "";

    const vimeo_thumb_1 = {
      backgroundImage:
        project.vimeoThumbnail1Project !== undefined
          ? `url(${project.vimeoThumbnail1Project.file.url})`
          : ""
    };
    const vimeo_thumb_2 = {
      backgroundImage:
        project.vimeoThumbnail2Project !== undefined
          ? `url(${project.vimeoThumbnail2Project.file.url})`
          : ""
    };
    const vimeo_thumb_3 = {
      backgroundImage:
        project.vimeoThumbnail3Project !== undefined
          ? `url(${project.vimeoThumbnail3Project.file.url})`
          : ""
    };
    const vimeo_thumb_4 = {
      backgroundImage:
        project.vimeoThumbnail4Project !== undefined
          ? `url(${project.vimeoThumbnail4Project.file.url})`
          : ""
    };

    if (project.vimeo1Project) {
      if (isMobile) {
        vimeo1 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2">
              <div className="card-content" style={vimeo_thumb_1}>
                <div className="video video--iframe vimeo">
                  <Vimeo
                    className="vimeo_wrap"
                    video={project.vimeo1Project}
                    muted={false}
                    autoplay={false}
                    loop={false}
                    showTitle={false}
                    showByline={false}
                    showPortrait={false}
                    background={false}
                    style={vimeo_thumb_1}
                  />
                </div>
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption1Project}</p>
            </div>
          </div>
        );
      } else {
        vimeo1 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2 card-vimeo">
              <div className="card-content" style={vimeo_thumb_1}>
                <Vimeo
                  className="vimeo_wrap"
                  video={project.vimeo1Project}
                  muted={false}
                  autoplay={false}
                  loop={false}
                  showTitle={false}
                  showByline={false}
                  showPortrait={false}
                  width="651"
                  background={false}
                />
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption1Project}</p>
            </div>
          </div>
        );
      }
    }
    if (project.vimeo2Project) {
      if (isMobile) {
        vimeo2 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2">
              <div className="card-content" style={vimeo_thumb_2}>
                <div className="video video--iframe vimeo">
                  <Vimeo
                    className="vimeo_wrap"
                    video={project.vimeo2Project}
                    muted={false}
                    autoplay={false}
                    loop={false}
                    showTitle={false}
                    showByline={false}
                    showPortrait={false}
                  />
                </div>
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption2Project}</p>
            </div>
          </div>
        );
      } else {
        vimeo2 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2 card-vimeo">
              <div className="card-content" style={vimeo_thumb_2}>
                <Vimeo
                  className="vimeo_wrap"
                  video={project.vimeo2Project}
                  muted={false}
                  autoplay={false}
                  loop={false}
                  showTitle={false}
                  showByline={false}
                  showPortrait={false}
                  width="651"
                />
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption2Project}</p>
            </div>
          </div>
        );
      }
    }
    if (project.vimeo3Project) {
      if (isMobile) {
        vimeo3 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2">
              <div className="card-content" style={vimeo_thumb_3}>
                <div className="video video--iframe vimeo">
                  <Vimeo
                    className="vimeo_wrap"
                    video={project.vimeo3Project}
                    muted={false}
                    autoplay={false}
                    loop={false}
                    showTitle={false}
                    showByline={false}
                    showPortrait={false}
                  />
                </div>
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption3Project}</p>
            </div>
          </div>
        );
      } else {
        vimeo3 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2 card-vimeo">
              <div className="card-content" style={vimeo_thumb_3}>
                <Vimeo
                  className="vimeo_wrap"
                  video={project.vimeo3Project}
                  muted={false}
                  autoplay={false}
                  loop={false}
                  showTitle={false}
                  showByline={false}
                  showPortrait={false}
                  width="651"
                />
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption3Project}</p>
            </div>
          </div>
        );
      }
    }
    if (project.vimeo4Project) {
      if (isMobile) {
        vimeo4 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2">
              <div className="card-content" style={vimeo_thumb_4}>
                <div className="video video--iframe vimeo">
                  <Vimeo
                    className="vimeo_wrap"
                    video={project.vimeo4Project}
                    muted={false}
                    autoplay={false}
                    loop={false}
                    showTitle={false}
                    showByline={false}
                    showPortrait={false}
                  />
                </div>
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption4Project}</p>
            </div>
          </div>
        );
      } else {
        vimeo4 = (
          <div className="project-info--media m-b-35">
            <div className="card card-3x2 card-vimeo">
              <div className="card-content" style={vimeo_thumb_4}>
                <Vimeo
                  className="vimeo_wrap"
                  video={project.vimeo4Project}
                  muted={false}
                  autoplay={false}
                  loop={false}
                  showTitle={false}
                  showByline={false}
                  showPortrait={false}
                  width="651"
                />
              </div>
            </div>
            <div className="project-caption">
              <p>{project.vimeoCaption4Project}</p>
            </div>
          </div>
        );
      }
    }

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
                      <Link to="/projects" style={style_primary_color}>
                        {data_config.head_text}
                      </Link>
                    </h1>
                  </li>
                </ul>
                {
                  !isMobile &&
                  <span>
                    <ul className="menu-second">
                      <li className={project.slug === "about-us" ? "active" : ""}>
                        <Link to="/page/about-us" style={style_second_color}>
                          information
                        </Link>
                      </li>
                      <li className={project.slug === "contact" ? "active" : ""}>
                        <Link to="/page/contact" style={style_second_color}>
                          contact
                        </Link>
                      </li>
                    </ul>
                    <ul className="menu-third only_desktop">
                      <li
                        className={
                          project.slug === "bio-in-japanese" ? "active" : ""
                        }
                      >
                        <Link to="/page/bio-in-japanese" style={style_second_color}>
                          日本語
                        </Link>
                      </li>
                    </ul>
                </span>
              }
              </div>
            </div>

            <div className="project-layout--right">
              <div className="main-content">
                {vimeo1}
                {vimeo2}
                {vimeo3}
                {vimeo4}
                {medias}
                <h1 className="ttile" style={style_primary_color}>
                  {project.title}
                </h1>

                <h2
                  className="sub-ttile desc m-b-35"
                  style={style_second_color}
                >
                  {project.description.description}
                </h2>

                <div className="m-b-35 content-project">
                  {project.content.content
                    ? renderHTML(project.content.content)
                    : ""}
                </div>
              </div>

              <Footer
                data_config={data_config}
                color={
                  project.footerTextColorProject
                    ? project.footerTextColorProject
                    : data_config.footer_color
                }
              />
            </div>
          </div>
        </div>

        <GoBack className="only_desktop" style={style_second_color} />
        {isMobile ?
          (
            <style>
                    {`
                    .footer a , .project-layout--right a {color: ${style_second_color.color}}
                    .project-layout--right {color: ${style_primary_color.color}}
                    `}
            </style>
          ) :
          (
            <style>
            {`
                  .section-content--menu > ul > li > a:hover {color: ${
                    style_primary_color.color
                  } !important}
                  a.go-back:hover, .footer a:hover, .project-layout--right a:hover {color: ${
                    style_primary_color.color
                  } !important}
                  .footer a , .project-layout--right a {color: ${
                    style_second_color.color
                  }}
                  .project-layout--right {color: ${style_primary_color.color}}
                  `}
            </style>
          )
        }
      </div>
    );
  }
}

export default ProjectTemp;

export const projectQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      description {
        description
      }
      order
      title
      slug
      id
      metaTitleProject
      metaDescriptionProject {
        id
        metaDescriptionProject
      }
      metaRobotsProject
      metaKeywordsProject {
        id
        metaKeywordsProject
      }
      image {
        title
        description
        file {
          contentType
          url
        }
      }
      medias {
        id
        title
        description
        file {
          contentType
          url
        }
      }

      vimeo1Project
      vimeo2Project
      secondColorProject
      primaryColorProject
      footerTextColorProject
      backgroundColorProject
      content {
        content
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
