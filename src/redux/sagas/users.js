import axios from 'axios'
import { call, put } from 'redux-saga/effects';
import { URI } from '../../uri';
import { Types } from '../reducers/users'

const getUsersHandle = async (searchString) => {
  return searchString.length > 3 &&
  axios.request({
        method: 'get',
        url: `${URI.search(searchString)}`,
    }).then(res => res.data)
}

export function* getUsers({ searchString }) {
  try {
    const { items } = yield call(getUsersHandle, searchString)
    
    yield put(setUsers(items ? items : []))
  } catch (error) {
    console.log(error)
  }
}

export const setUsers = (users) => ({
  type: Types.SET_USERS,
  users
})