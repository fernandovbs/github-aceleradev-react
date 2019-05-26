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
    if (pesquisa === "language") {
      const { data } = yield call(getLanguageRepositoriesHandle, user);
      yield put(setRepositories(data.items));
    } else {
      const { data } = yield call(getUserRepositoriesHandle, user);
      yield put(setRepositories(data));
    }
  } catch (error) {
    if (pesquisa === "language") alert("Language not found");
    else alert("User not found");
  }
}

export const setRepositories = repositories => ({
  type: Types.SET_REPOS,
  repositories
});
