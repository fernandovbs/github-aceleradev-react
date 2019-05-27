import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'

import { 
    getRepositories, 
    getUserRepositoriesHandle, 
    getLanguageRepositoriesHandle, 
    setRepositories 
} from "../redux/sagas/repositories";

import { initialState, axiosMock } from '../Helpers/testUtils'

const userParams = {
    user: 'fernando',
    pesquisa: 'user'
}

const languageParams = {
    user: {
        repoString: 'repository_name',
        languageString: 'javascript'
    },
    pesquisa: 'language'
}

const itForUser = sagaHelper(getRepositories(axiosMock, userParams))
  
itForUser('should call getUserRepositoriesHandle', result => {
expect(result).toEqual(call(getUserRepositoriesHandle, userParams.user, axiosMock))

return {data: {repositories: initialState.repositories}} 
})

itForUser('should put setRepositories', result => {
expect(result).toEqual(put(setRepositories({repositories: initialState.repositories})))
})

const itForLanguage = sagaHelper(getRepositories(axiosMock, languageParams))

itForLanguage('should call getLanguageRepositoriesHandle', result => {
    expect(result).toEqual(call(getLanguageRepositoriesHandle, languageParams.user, axiosMock))
    
    return {data: {items: initialState.repositories}} 
})
    
itForLanguage('should put setRepositories', result => {
    expect(result).toEqual(put(setRepositories(initialState.repositories)))
})
