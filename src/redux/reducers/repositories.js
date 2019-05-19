export const Types = {
  GET_REPOS: 'repos/GET_REPOS',
  SET_REPOS: 'repos/SET_REPOS',
  RESET_REPOS: 'repos/RESET_REPOS'
}

export default function repositories(state = [], action) {
  switch (action.type) {
    case Types.SET_REPOS:
      return {
        ...state,
        ...action.repositories
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