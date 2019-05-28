import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

import { 
    getUsers, 
    getUsersHandle, 
    setUsers
} from "../redux/sagas/users";

import { initialState, axiosMock } from '../Helpers/testUtils';

const params = {
    searchString: 'someone',
};

describe('Test users sagas', () => {
    it('should call axios.request with appropriate parameters for users search', () => {
        getUsersHandle(params.searchString, axiosMock);
        expect(axiosMock.request).toHaveBeenCalledTimes(1);
        
        expect(axiosMock.request.mock.calls[0][0]).toMatchObject({
            method: "get",
            url: `https://api.github.com/search/users?q=${params.searchString}`
          });
    });
    
    const itUser = sagaHelper(getUsers(axiosMock, params));
      
    itUser('should call getUsersHandle', result => {
        expect(result).toEqual(call(getUsersHandle, params.searchString, axiosMock));
        return {items: initialState.users.suggestions};
    });
    
    itUser('should put setUsers', result => {
        expect(result).toEqual(put(setUsers(initialState.users.suggestions.slice(0,5))));
    });    
});

