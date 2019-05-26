import axios from "axios";
import { call, put } from "redux-saga/effects";
import { URI } from "../../uri";
import { Types } from "../reducers/repositories";
const getUserRepositoriesHandle = async user => {
  return axios.request({
    method: "get",
    url: `${URI.user(user)}/repos`
  });
};
const getLanguageRepositoriesHandle = async user => {
  return axios.request({
    method: "get",
    url: `${URI.language(user)}`
  });
};

export function* getRepositories({ user, pesquisa }) {
  try {
    if (pesquisa === "user") {
      const { data } = yield call(getUserRepositoriesHandle, user);
      yield put(setRepositories(data));
    } else if (pesquisa === "language") {
      const { data } = yield call(getLanguageRepositoriesHandle, user);
      yield put(setRepositories(data.items));
    }
  } catch (error) {
    if (pesquisa === "user") alert("User not found");
    else if (pesquisa === "language") alert("Language not found");
  }
}

export const setRepositories = repositories => ({
  type: Types.SET_REPOS,
  repositories
});
