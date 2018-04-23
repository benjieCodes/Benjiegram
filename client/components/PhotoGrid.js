import React from "react";
import { render } from "react-router";

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {JSON.stringify(this.props.posts, null, "")}
      </div>
    );
  }
}

export default PhotoGrid;
