import { call, put } from "redux-saga/effects";
import { URI } from "../../uri";
import { Types } from "../reducers/users";

export const getUsersHandle = async (searchString, axios) => {
  return (
    searchString.length > 3 &&
    axios
      .request({
        method: "get",
        url: `${URI.search(searchString)}`
      })
      .then(res => res.data)
  );
};

export function* getUsers(axios, { searchString }) {
  try {
    const { items } = yield call(getUsersHandle, searchString, axios);

    yield put(setUsers(items ? items.slice(0, 5) : []));
  } catch (error) {
    console.log(error);
  }
}

export const setUsers = users => ({
  type: Types.SET_USERS,
  users
});
