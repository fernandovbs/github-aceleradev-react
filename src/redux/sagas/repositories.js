import { call, put, all } from "redux-saga/effects";
import { URI } from "../../uri";
import { Types } from "../reducers/repositories";
export const getUserRepositoriesHandle = async (user, axios) => {
  return axios.request({
    method: "get",
    url: `${URI.user(user)}/repos?per_page=100`
  });
};
export const getUserInfoHandle = async (user, axios) => {
  return axios.request({
    method: "get",
    url: `${URI.user(user)}`
  });
};
export const getLanguageRepositoriesHandle = async (user, axios) => {
  return axios.request({
    method: "get",
    url: `${URI.language(user)}`
  });
};

export function* getRepositories(axios, { user, pesquisa }) {
  try {
    if (pesquisa === "language") {
      const { data } = yield call(getLanguageRepositoriesHandle, user, axios);
      if (data.items.length !== 0) {
        yield put(setRepositories(data.items));
      } else alert("Repositório ou linguagem não encontrados!");
    } else {
      const [data, items] = yield all([
        call(getUserRepositoriesHandle, user, axios),
        call(getUserInfoHandle, user, axios)
      ]);
      yield put(setRepositories(data.data, items.data));
    }
  } catch (error) {
    yield put(resetRepositories())
    alert("Usuário não encontrado!");
    
  }
}

export const setRepositories = (repositories, user) => ({
  type: Types.SET_REPOS,
  repositories,
  user
});


export const resetRepositories = () => ({
  type: Types.RESET_REPOS
});
