import React from "react";
import { Link } from "gatsby";

let ProjectItem = props => {
  const { project } = props;

  const { data_config } = props;

  let media_html = "";

  const media = project.image.file;

  const alt = project.image.title;

  if (media.contentType == "image/jpeg" || media.contentType == "image/png") {
    media_html = (
      <div className="card card-3x2">
        <div className="card-content">
          <img src={media.url} alt={alt} />
        </div>
      </div>
    );
  }

  if (media.contentType == "video/mp4") {
    media_html = (
      <div className="card card-3x2">
        <div className="card-content mp4">
          <video autoPlay={true} loop={true} playsInline muted>
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  const style_primary_color = {
    color: data_config.primary_color
  };

  const style_second_color = {
    color: data_config.second_color
  };

  return (
    <div className="project-item" key={project.id}>
      <div className="project-item--right">
        <Link to={`/project/${project.slug}/`}>{media_html}</Link>
      </div>

      <div
        className={`project-item--left project-list project-list-${project.id}`}
      >
        <Link to={`/project/${project.slug}/`}>
          <h2 style={style_primary_color}>{project.title}</h2>
        </Link>
        <h3 className="desc">
          <Link style={style_second_color} to={`/project/${project.slug}/`}>
            {project.description.description}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;
