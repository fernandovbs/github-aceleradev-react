import React from 'react'
import repositories, { Types } from '../redux/reducers/repositories'
import { initialState } from '../Helpers/testUtils'

describe('Repositories reducer', () => {
    const initiaStorelState = {
        repositories: [],
        loaded: false,
        loading: false,
        pesquisa: 'user'            
    }

    it('should return the initial state', () => {
        expect(repositories(undefined, {})).toEqual(initiaStorelState);
    });

    it('should handle GET_REPOS with user pesquisa', () => {
        expect(repositories({}, {
                type: Types.GET_REPOS,
                user: 'somebody',
                pesquisa: 'user'
            }
        )).toEqual({
            repositories: [],
            loaded: false,
            loading: true,
        });
    });  

    it('should handle GET_REPOS with language pesquisa', () => {
        expect(repositories({}, {
                type: Types.GET_REPOS,
                user: 'somebody',
                pesquisa: 'language'
            }
        )).toEqual({
            repositories: [],
            loaded: false,
            loading: true,
        });
    });    

    it('should handle SET_REPOS with user pesquisa', () => {
        expect(repositories({}, {
                type: Types.SET_REPOS,
                repositories: initialState.repositories.repositories,
                pesquisa: 'user'
            }
        )).toEqual({
            repositories: initialState.repositories.repositories,
            loaded: true,
            loading: false,
        });
    });

    it('should handle SET_REPOS with language pesquisa', () => {
        expect(repositories({}, {
                type: Types.SET_REPOS,
                repositories: initialState.repositories.repositories,
                pesquisa: 'language'
            }
        )).toEqual({
            repositories: initialState.repositories.repositories,
            loaded: true,
            loading: false,
        });
    });
})