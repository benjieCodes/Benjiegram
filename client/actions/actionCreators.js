// Increment Likes
function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index: index
  };
}

// Add Comment
function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId: postId,
    author: author,
    comment: comment
  };
}

// Remove Comment
function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    postId: postId,
    i: i
  };
}
