import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta http-equiv="content-language" content="vi"/>
        <meta name="language" content="vietnamese"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta content="en,vi" http-equiv="Content-Language"/>
        <meta content="IE=edge" http-equiv='X-UA-Compatible' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="7rAvy-mh1fvQQE8sVTyYQBdSTFQ64fjUp7H44nCM7_8" />

        <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" href="/img/icons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/img/icons/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="/img/icons/android-chrome-192x192.png" sizes="192x192"/>
        <link rel="icon" type="image/png" href="/img/icons/favicon-16x16.png" sizes="16x16"/>
        {props.headComponents}
        <script
            dangerouslySetInnerHTML={{
            __html: `
            function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDN875T');
            `
            }}
        />
        <script src="https://use.typekit.net/sbj4klj.js"></script>
        <script
            dangerouslySetInnerHTML={{
            __html: `
                try{Typekit.load({ async: true });}catch(e){}
            `
            }}
        />

        <script async rc="https://www.googletagmanager.com/gtag/js?id=UA-140149190-1"></script>
        {/* <script
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-77795233-1');
            `
            }}
        /> */}
        <script
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-140149190-1');
            `
            }}
        />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5882190.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        <noscript
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN875T"
            height="0" width="0" style="display:none;visibility:hidden">
            </iframe>`
        }} />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
