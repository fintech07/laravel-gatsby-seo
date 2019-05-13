import React from "react";
import { Link, graphql } from "gatsby";

import PageLayout from "../components/page-layout";
import * as app_config from "../constants/app";

class PageContentfulTemplate extends React.Component {

    render() {
        const page = this.props.data.contentfulPageContent;
        const themeOptions = this.props.data.allContentfulGeneralOptions.edges[0]
            .node;

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
                page.metaTitlePage !== undefined
                    ? page.metaTitlePage + ' | ' + data_config.meta_title
                    : data_config.meta_title,
            description:
                page.metaDescriptionPage.metaDescriptionPage != undefined
                    ? page.metaDescriptionPage.metaDescriptionPage
                    : data_config.meta_description,
            keywords: page.metaKeywordsPage
                ? page.metaKeywordsPage
                : data_config.meta_keywords,
            robots: page.metaRobotsPage
                ? page.metaRobotsPage
                : data_config.meta_robots
        };

        const style_primary_color = {
            color: page.primaryColorPage
                ? page.primaryColorPage
                : data_config.primary_color
        };

        const style_second_color = {
            color: page.secondColorPage
                ? page.secondColorPage
                : data_config.second_color
        };

        return (
            <PageLayout
                data_config={data_config}
                meta_data={meta_data}
                style_primary_color={style_primary_color}
                style_second_color={style_second_color}
                page={page}
            />
        );
    }
}

export default PageContentfulTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPageContent(slug: { eq: $slug }) {
      slug
      metaTitlePage
      metaKeywordsPage {
        id
        metaKeywordsPage
      }
      metaDescriptionPage {
        metaDescriptionPage
      }
      primaryColorPage
      secondColorPage
      backgroundColorPage
      footerTextColorPage
      content {
        id
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
