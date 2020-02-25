import React from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  state = {
    posts: []
  };

  client = contentful.createClient({
    space: "v042bffefd5p",
    environment: "master",
    accessToken: "te8FhWalW-4BYzgI_HCJLWdWNJzTso2pQY1ykQHRuQs"
  });

  componentDidMount() {
    this.fetchPosts()
      .then(this.showPosts)
      .catch(console.error);
  }

  fetchPosts = () => this.client.getEntries({ content_type: "olaPBlog" });

  showPosts = response => {
    this.setState({
      posts: response.items
    });
  };
  render() {
    const renderImage = image => {
      if (image && image.fields.file) {
        return image.fields.file.url;
      } else {
        return "";
      }
    };
    const maxLength = 100;
    const blogPosts = this.state.posts
      .sort((a, b) => (a.fields.postDate > b.fields.postDate ? -1 : 1))
      .map(({ fields }) => (
        <Link
          key={fields.postTitle}
          to={{
            pathname: `/blog/post${fields.postNo}`,
            state: fields
          }}
          className="post"
        >
          <h4 className="heading-medium post__heading">{fields.postTitle}</h4>
          <div className="post__image">
            <img
              src={renderImage(fields.postImage)}
              className="post__image--thumb"
              alt={fields.postImage.title}
            />
          </div>
          <div className="post__lead">
            {fields.postLead.length > maxLength
              ? `${fields.postLead.substring(0, maxLength)}...`
              : fields.postLead}
          </div>
          <div className="post__date">opublikowano: {fields.postDate}</div>
        </Link>
      ));
    return (
      <div className="page blog">
        <div className="blog__heading ">
          <h3 className="heading-big">POCZYTAJKI czyli prosto z głowy</h3>
          <p className="blog__heading--sub">
            - znajdziesz tutaj artykuły, które zainspirują Cię do działania
          </p>
        </div>
        <div className="blog__container">{blogPosts}</div>
      </div>
    );
  }
}

export default Blog;
