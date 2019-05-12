import React, { Component } from "react";
import { Helmet } from "react-helmet";
import * as app_config from '../constants/app';

class Meta extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Helmet>
        <title>{this.props.title || ""}</title>
        <meta name="robots" content={this.props.robots || ""} />
        <meta name="googlebot" content={this.props.robots || ""} />
        <meta name="msnbot" content={this.props.robots || ""} />
        <meta name="description" content={this.props.description || ""} />
        <meta name="keywords" content={this.props.keywords || ""} />
        <meta name="author" content="Lost art" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href={app_config.SITE_URL + (this.props.location || '')} />
      </Helmet>
    );
  }
}

export default Meta;
