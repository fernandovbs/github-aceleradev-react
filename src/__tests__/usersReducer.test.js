import React from 'react'
import users, { Types } from '../redux/reducers/users'
import { initialState } from '../Helpers/testUtils'

describe('Users reducer', () => {
    const initiaStorelState = {
        suggestions: [],
        user: {},
    }

    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual(initiaStorelState);
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