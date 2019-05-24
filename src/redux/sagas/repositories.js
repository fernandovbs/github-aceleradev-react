import axios from 'axios'
import { call, put } from 'redux-saga/effects';
import { URI } from '../../uri';
import { Types } from '../reducers/repositories'
const getRepositoriesHandle = async (user) => {
  return axios.request({
    method: 'get',
    url: `${URI.user(user)}/repos`,
  });
}

export function* getRepositories({ user }) {
  try {
    const { data } = yield call(getRepositoriesHandle, user)
    yield put(setRepositories(data))
  } catch (error) {
    alert(error)
  }
}

export const setRepositories = (repositories) => ({
  type: Types.SET_REPOS,
  repositories
})