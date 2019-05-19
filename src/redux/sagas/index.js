import { all, takeLatest } from 'redux-saga/effects';
import { Types as ReducersTypes } from '../reducers/repositories';
import { getRepositories } from '../sagas/repositories'
export default function* root(dispatch) {
  yield all([
    takeLatest(ReducersTypes.GET_REPOS, getRepositories),
  ])
}