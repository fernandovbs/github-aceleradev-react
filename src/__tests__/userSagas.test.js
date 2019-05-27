import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import { 
    getUsers, 
    getUsersHandle, 
    setUsers
} from "../redux/sagas/users";

import { initialState, axiosMock } from '../Helpers/testUtils'

const params = {
    searchString: 'fernando',
}

const it = sagaHelper(getUsers(axiosMock, params))
  
it('should call getUsersHandle', result => {
    expect(result).toEqual(call(getUsersHandle, params.searchString, axiosMock))
    return {items: initialState.users.suggestions}
})

it('should put setUsers', result => {
    expect(result).toEqual(put(setUsers(initialState.users.suggestions.slice(0,5))))
})
