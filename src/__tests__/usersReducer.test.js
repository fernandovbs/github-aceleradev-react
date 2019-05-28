import React from 'react'
import users, { Types, searchUsers, setUser } from '../redux/reducers/users'
import { initialState } from '../Helpers/testUtils'

describe('Test users reducer', () => {
    const initiaStorelState = {
        suggestions: [],
        user: {},
    }

    it('Should export the correct types', () => {
        expect(Types).toEqual(
            {
                GET_USERS: 'users/GET_USERS',
                SET_USERS: 'users/SET_USERS',
                SET_USER: 'users/SET_USER',
                RESET_USER: 'users/RESET_USER'
            }            
        )
    });

    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual(initiaStorelState);
    });

    it('should dispatch GET_USERS', () => {
        expect(searchUsers('somebody')).toEqual({
            type: Types.GET_USERS,
            searchString: 'somebody',
        });
    });


    it('should dispatch SET_USER', () => {
        expect(setUser(initialState.user)).toEqual({
            type: Types.SET_USER,
            user: initialState.user,
        });
    });


    it('should handle GET_USERS', () => {
        expect(users(initiaStorelState, {
                type: Types.GET_USERS,
                searchString: 'somebody',
            }
        )).toEqual(initiaStorelState);
    });  

    it('should handle SET_USERS', () => {
        expect(users(initiaStorelState, {
                type: Types.SET_USERS,
                users: initialState.users,
            }
        )).toEqual({
            suggestions: initialState.users,
            user: {}
        });
    });    

    it('should handle SET_USER', () => {
        expect(users({
                suggestions: initialState.users,
                user: {}
            }, {
                type: Types.SET_USER,
                user: initialState.user,
            }
        )).toEqual({
            suggestions: [],
            user: initialState.user
        });
    });
});