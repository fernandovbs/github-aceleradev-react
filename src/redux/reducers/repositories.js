export const Types = {
  GET_REPOS: 'repos/GET_REPOS',
  SET_REPOS: 'repos/SET_REPOS',
  RESET_REPOS: 'repos/RESET_REPOS'
}

const INITIAL_STATE = {
  repositories: [],
  loaded: false
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_REPOS:
      return {
        ...state,
        repositories: action.repositories,
        loaded: true
      }
    case Types.RESET_REPOS:
      return state
    default:
      return state
  }
}

export const searchRepos = (user) => {
  console.log(user)
  return { 
    type: Types.GET_REPOS,
    user
  }
}