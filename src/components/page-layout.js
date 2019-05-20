import React, { Children } from "react";
import { Link } from "gatsby";
import {isMobile} from 'react-device-detect'
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import GoBack from "../components/GoBack";
import renderHTML from "react-render-html";
import $ from "jquery";

class PageLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: ""
    }
  }

  componentDidMount() {
    const page = this.props.page;

    let iScrollPos = 0;
    const el = document.getElementsByClassName("project-layout")[0];

    window.scrollTo(0, 0);

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
          background: page.backgroundColorPage
        });
      }
      iScrollPos = iCurScrollPos;
    });

    $(".footer").css({ opacity: "1" });
    //setTimeout(function(){ $('.footer').css({ "opacity": "1"}); }, 300);
    document.body.style.backgroundColor = page.backgroundColorPage

    this.setState({
      location: window.location.pathname
    })

  }

  render() {
    const {
      data_config,
      meta_data,
      style_primary_color,
      style_second_color,
      page
    } = this.props;


    return (
      <div className="page-screen">
        <Meta {...meta_data } {...this.state} />
        <div className="project-layout display-table">
          <div className="project-layout--content">
            <div className="project-layout--left">
              <div className="section-content--menu">
                <ul className="menu-first">
                  <li className="active">
                    <h1>
                        <a href="https://lost-art.com" target="_blank" style={style_primary_color}>
                            {data_config.head_text}
                        </a>
                    </h1>
                  </li>
                </ul>
              {
                  !isMobile &&
                  <>
                    <ul className="menu-second">
                      <li className={page.slug === "about-us" ? "active" : ""}>
                        <Link to="/page/about-us/" style={style_second_color}>
                          information
                        </Link>
                      </li>
                      <li className={page.slug === "contact" ? "active" : ""}>
                        <Link to="/page/contact/" style={style_second_color}>
                          contact
                        </Link>
                      </li>
                    </ul>
                    <ul className="menu-third only_desktop">
                      <li
                        className={
                          page.slug === "bio-in-japanese" ? "active" : ""
                        }
                      >
                        <Link to="/page/bio-in-japanese/" style={style_second_color}>
                          日本語
                        </Link>
                      </li>
                    </ul>
                </>
              }
              </div>
            </div>

            <div className="project-layout--right">
              <div
                className={
                  page.slug === "bio-in-japanese"
                    ? "jpan m-b-35 main-content"
                    : "m-b-35 main-content"
                }
              >
                {page.content ? renderHTML(page.content.content) : ""}
              </div>

              <Footer
                japan={page.slug === "bio-in-japanese" ? "jpan" : ""}
                color={
                  page.footerTextColorPage
                    ? page.footerTextColorPage
                    : data_config.footer_color
                }
                data_config={data_config}
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

export default PageLayout;
