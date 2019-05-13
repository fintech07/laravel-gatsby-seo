import React from "react";
import {
    TransitionGroup,
    Transition as ReactTransition
} from "react-transition-group";

//This variable will be responsible for our animation duration
const timeout = 600;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
    entering: {
        position: "absolute",
        opacity: 0
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0
    }
};

class Layout extends React.PureComponent {
    componentDidMount() {
        const h_gtag = document.getElementById('head_gtag');
        const b_gtag = document.getElementById("body_gtag");

        if (!h_gtag) {
            document.head.innerHTML = document.head.innerHTML + `<!-- Google Tag Manager -->
            <script id="head_gtag">function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDN875T');</script>
            <!-- End Google Tag Manager -->`
        }

        if (!b_gtag) {
            const tagcontent = '<!-- Google Tag Manager (noscript) -->\
            <noscript id="body_gtag"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN875T"\
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\
            <!-- End Google Tag Manager (noscript) -->'
            document.body.innerHTML = (tagcontent) + document.body.innerHTML;
        }
    }
    render() {
        //Destructuring props to avoid garbage this.props... in return statement
        const { children, location } = this.props;

        return (
            //Using TransitionGroup and ReactTransition which are both
            //coming from  'react-transition-group' and are required for transitions to work
            <TransitionGroup>
                <ReactTransition
                    //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
                    key={location.pathname}
                    //duration of transition
                    timeout={{
                        enter: timeout,
                        exit: timeout
                    }}
                >
                    {//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
                        status => (
                            <div
                                style={{
                                    ...getTransitionStyles[status]
                                }}
                            >
                                {children}
                            </div>
                        )}
                </ReactTransition>
            </TransitionGroup>
        );
    }
}

export default Layout;
