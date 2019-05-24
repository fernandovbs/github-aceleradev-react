import { all, takeLatest, throttle } from 'redux-saga/effects';
import { Types as RepoReducersTypes } from '../reducers/repositories';
import { Types as RepoUsersTypes } from '../reducers/users';
import { getRepositories } from '../sagas/repositories'
import { getUsers } from '../sagas/users'

export default function* root(dispatch) {

  yield all([
    takeLatest(RepoReducersTypes.GET_REPOS, getRepositories),
    throttle(2000, RepoUsersTypes.GET_USERS, getUsers),
  ])
}