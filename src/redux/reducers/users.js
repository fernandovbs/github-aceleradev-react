export const Types = {
  GET_USERS: "users/GET_USERS",
  SET_USERS: "users/SET_USERS",
  SET_USER: "users/SET_USER",
  RESET_USER: "users/RESET_USER"
};

const defaultState = {
  suggestions: [],
  user: {}
};

export default function users(state = defaultState, action) {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        suggestions: [],
        user: action.user
      };
    case Types.SET_USERS:
      return {
        ...state,
        suggestions: action.users
      };

    case Types.RESET_USER:
      return state;

    default:
      return state;
  }
}

export const searchUsers = searchString => {
  return {
    type: Types.GET_USERS,
    searchString
  };
};

export const setUser = user => {
  return {
    type: Types.SET_USER,
    user
  };
};
