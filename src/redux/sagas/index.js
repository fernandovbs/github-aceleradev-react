import { all, takeLatest, throttle } from "redux-saga/effects";
import { Types as RepoReducersTypes } from "../reducers/repositories";
import { Types as RepoUsersTypes } from "../reducers/users";
import { getRepositories } from "../sagas/repositories";
import { getUsers } from "../sagas/users";
import axios from "axios";

export default function* root() {
  yield all([
    takeLatest(RepoReducersTypes.GET_REPOS, getRepositories, axios),
    throttle(700, RepoUsersTypes.GET_USERS, getUsers, axios)
  ]);
}
