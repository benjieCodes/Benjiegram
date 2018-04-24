// reducer is going to take two things:

// 1. The action (information of what event happened)

// 2. Copy of the current default object/state

function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      return [
        // from the start to the one deleted
        ...state.slice(0, action.i),
        // add the rest of the items to the end of array
        ...state.slice(action.i + 1)
      ];
      return state;
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take current state
      ...state,
      // overwrite post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
