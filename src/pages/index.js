import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import * as app_config from "../constants/app";
import SectionItem from "../components/SectionItem";
import { isMobile } from "react-device-detect";
import $ from "jquery";
import "../sass/app.scss";

class HomePage extends Component {

  componentDidMount() {

    const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
      .node;

    let gtag = document.getElementById("body_gtag");
    if (!gtag) {
        gtag = document.createElement("script");
        document.body.prepend(gtag);
        gtag.innerHTML = `<!-- Google Tag Manager (noscript) -->
        <noscript id="body_gtag"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN875T"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->`;
    }

    if (themeOptions.hideHomepageGeneral) {
      return window.location.pathname = "/projects"
    }

    if (!isMobile) {
      if ($(".nano").length > 0) {
        $(".nano").nanoScroller();
      }
    }

    setTimeout(function() {
      $(".footer").css({ opacity: "1" });
    }, 300);

    document.body.style.backgroundColor = themeOptions.backgroundColorGeneral
      ? themeOptions.backgroundColorGeneral
      : app_config.BACKGROUND_COLOR
  }

  componentDidUpdate() {
    this.buildSwiper();
  }

  buildSwiper() {
    this.swiper = new Swiper(".swiper-container-", {
      direction: "vertical",
      initialSlide: 0,
      speed: 1400,
      slidesPerView: 1,
      loop: false,
      mousewheel: {
        invert: true,
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });
    window.swiper = this.swiper;
  }

  nextSwiper() {
    if (typeof window.swiper !== "undefined") {
      window.swiper.slideNext();
    }
  }

  render() {
    const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
      .node;

    const sections = this.props.data.allContentfulSection.edges.map(
      (section, index) => (
        <SectionItem
          key={index}
          index={index}
          project={section.node}
          nextSwiper={this.nextSwiper}
        />
      )
    );

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
      title: data_config.meta_title,
      description: data_config.meta_description,
      keywords: data_config.meta_keywords,
      robots: data_config.meta_robots,
    };

    const style_primary_color = {
      color: data_config.primary_color
    };

    let hideheader = themeOptions.hideHeaderGeneral ? "hideheader" : "";
    let hidefooter = themeOptions.hideFooterGeneral ? "hidefooter" : "";

    return (
      <div className="home-screen">
        <Meta {...meta_data} />
        <div className={`section-content-menu ${hideheader}`}>
          <ul className="menu-first">
            <li className="active">
              <h1>
                <Link to="/projects" style={style_primary_color}>
                  {data_config.head_text}
                </Link>
              </h1>
            </li>
          </ul>
        </div>

        <div className="home-screen--slide">
          <div className="swiper-container swiper-container-outer swiper-container-vertical">
            <div className="swiper-wrapper">{sections}</div>
          </div>
        </div>

        <div className={`section-content--footer ${hidefooter}`}>
          <Footer data_config={data_config} color={data_config.footer_color} />
        </div>

        <style>
          {`
          .section-content--menu > ul > li > a:hover {color: ${
            data_config.color_hover
          } !important}
          .footer a:hover {color: ${data_config.color_hover} !important}
          .footer a {color: ${data_config.url_color}}
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

export default HomePage;

export const query = graphql`
  query {
    allContentfulSection {
      edges {
        node {
          id
          title
          slug
          model
          imageScale
          embedVimeo
          medias {
            title
            description
            file {
              url
            }
            fluid {
              sizes
              aspectRatio
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
