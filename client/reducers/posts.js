// reducer is going to take two things:

// 1. The action (information of what event happened)

// 2. Copy of the current default object/state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one updated,
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one updated
      ];

    // if not return updated state
    default:
  }
  return state;
}

export default posts;
