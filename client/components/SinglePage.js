import React from "react";
import Photo from "./Photo";
import { render } from "react-router";

class SinglePage extends React.Component {
  render() {
    // get index of post
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    console.log(post);
    // get post
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    );
  }
}

export default SinglePage;
