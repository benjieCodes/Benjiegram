import React from "react";
import { Link } from "react-router";
import CSSTranstitionGroup from "react-addons-css-transition-group";

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>

          <CSSTranstitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTranstitionGroup>
        </div>
      </figure>
    );
  }
}

export default Photo;
