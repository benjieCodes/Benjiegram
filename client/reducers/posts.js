// reducer is going to take two things:

// 1. The action (information of what event happened)

// 2. Copy of the current default object/state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
