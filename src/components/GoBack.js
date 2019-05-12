import React from "react";
import { Link } from "gatsby";

const GoBack = props => {
  const _class = "go-back " + props.className;
  const _style = props.style;

  return (
    <Link to="/projects" className={_class} style={_style}>
      back
    </Link>
  );
};

export default GoBack;
