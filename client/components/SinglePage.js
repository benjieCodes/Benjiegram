import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
import { render } from "react-router";

class SinglePage extends React.Component {
  render() {
    // get index of post
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postId] || [];
    // get post
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comment postComments={postComments} />
      </div>
    );
  }
}

export default SinglePage;
