import React from "react";
import { Link } from "react-router-dom";
import * as Markdown from "react-markdown";

const renderImage = image => {
  if (image && image.fields.file) {
    return image.fields.file.url;
  } else {
    return "";
  }
};

const BlogPost = props => {
  const fields = props.location.state;
  return (
    <div className="page blogpost">
      <div className="blogpost__container">
        <h4 className="heading-medium blogpost__heading">{fields.postTitle}</h4>
        <div className="blogpost__date">opublikowano: {fields.postDate}</div>
        <div className="blogpost__image">
          <img
            src={renderImage(fields.postImage)}
            className="blogpost__image--thumb"
            alt={fields.postImage.title}
          />
        </div>
        <div className="blogpost__lead">{fields.postLead}</div>
        <Markdown
          source={fields.postFullContent}
          className="blogpost__full-content"
        />
        <Link className="blogpost__return btn" to="/blog">
          Wróc do wszytkich wpisów
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
