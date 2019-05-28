export const Types = {
  GET_REPOS: "repos/GET_REPOS",
  SET_REPOS: "repos/SET_REPOS",
  RESET_REPOS: "repos/RESET_REPOS"
};

const initialState = {
  repositories: [],
  loaded: false,
  loading: false,
  pesquisa: "user"
};

export default function repositories(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REPOS:
      return {
        ...state,
        repositories: [],
        loaded: false,
        loading: true
      };
    case Types.SET_REPOS:
      return {
        ...state,
        repositories: action.repositories,
        loaded: true,
        loading: false
      };
    case Types.RESET_REPOS:
      return state;
    default:
      return state;
  }
}

export const searchRepos = (user, pesquisa) => {
  return {
    type: Types.GET_REPOS,
    user,
    pesquisa
  };
};
