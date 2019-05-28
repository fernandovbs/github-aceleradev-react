import sagaHelper from "redux-saga-testing"
import { call, put } from "redux-saga/effects"
import { axiosMock, initialState } from "../Helpers/testUtils"
import {
  getLanguageRepositoriesHandle,
  getRepositories,
  getUserRepositoriesHandle,
  setRepositories
} from "../redux/sagas/repositories"

//Clear axios mock call history on every test
afterEach(() => {
  axiosMock.request.mockClear()
})

const userParams = {
  user: "someone",
  pesquisa: "user"
}

const languageParams = {
  user: {
    repoString: "repository_name",
    languageString: "javascript"
  },
  pesquisa: "language"
}

describe("Test Repositories sagas", () => {
  it("should call axios.request with appropriate parameters for user repositories search", () => {
    getUserRepositoriesHandle(userParams.user, axiosMock)
    expect(axiosMock.request).toHaveBeenCalledTimes(1)
    expect(axiosMock.request.mock.calls[0][0]).toMatchObject({
      method: "get",
      url: `https://api.github.com/users/${userParams.user}/repos?per_page=100`
    })
  })

  it("should call axios.request with appropriate parameters for language repositories search", () => {
    getLanguageRepositoriesHandle(languageParams.user, axiosMock)
    expect(axiosMock.request).toHaveBeenCalledTimes(1)
    expect(axiosMock.request.mock.calls[0][0]).toMatchObject({
      method: "get",
      url: `https://api.github.com/search/repositories?q=${
        languageParams.user.repoString
      }+language:${languageParams.user.languageString}`
    })
  })

  const itForUser = sagaHelper(getRepositories(axiosMock, userParams))

  itForUser("should call getUserRepositoriesHandle", result => {
    expect(result).toEqual(
      call(getUserRepositoriesHandle, userParams.user, axiosMock)
    )
    return { data: { repositories: initialState.repositories } }
  })

  itForUser("should put setRepositories", result => {
    expect(result).toEqual(
      put(setRepositories({ repositories: initialState.repositories }))
    )
  })

  const itForLanguage = sagaHelper(getRepositories(axiosMock, languageParams))

  itForLanguage("should call getLanguageRepositoriesHandle", result => {
    expect(result).toEqual(
      call(getLanguageRepositoriesHandle, languageParams.user, axiosMock)
    )
    return { data: { items: initialState.repositories } }
  })

  itForLanguage("should put setRepositories", result => {
    expect(result).toEqual(put(setRepositories(initialState.repositories)))
  })
})

describe("Test search not found in repositories sagas", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {})

  const itForLanguage = sagaHelper(getRepositories(axiosMock, languageParams))

  itForLanguage("should call getLanguageRepositoriesHandle", result => {
    expect(result).toEqual(
      call(getLanguageRepositoriesHandle, languageParams.user, axiosMock)
    )
    return { data: { items: [] } }
  })

  itForLanguage("should return alert message", result => {
    expect(window.alert).toBeCalledWith(
      "Repositório ou linguagem não encontrados!"
    )
  })
})
