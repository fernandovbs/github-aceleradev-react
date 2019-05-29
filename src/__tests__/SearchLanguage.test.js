import React from "react"
import { cleanup, fireEvent } from "react-testing-library"
import SearchLanguage from "../Components/Search/SearchLanguage"
import { renderWithRedux } from "../Helpers/testUtils"

afterEach(cleanup)

describe("Test SearchLanguage component", () => {
  it("Should render SearchLanguage correctly", () => {
    const { getByTestId } = renderWithRedux(<SearchLanguage />)

    const repositoryInput = getByTestId("repository-input")
    const languageInput = getByTestId("language-input")
    const searchRepoInput = getByTestId("search-repo-input")

    fireEvent.change(repositoryInput, { target: { value: "somebody" } })
    expect(repositoryInput.value).toBe("somebody")

    fireEvent.change(languageInput, { target: { value: "somebody" } })
    expect(languageInput.value).toBe("somebody")

    fireEvent.keyDown(repositoryInput, {
      key: "Enter",
      code: 13,
      keyCode: 13,
      charCode: 13
    })

    expect(repositoryInput.value).toBe("somebody")

    expect(languageInput.value).toBe("somebody")

    fireEvent.keyDown(languageInput, {
      key: "Enter",
      code: 13,
      keyCode: 13,
      charCode: 13
    })

    expect(repositoryInput.value).toBe("somebody")

    expect(languageInput.value).toBe("somebody")

    fireEvent.click(searchRepoInput)

    expect(repositoryInput.value).toBe("somebody")

    expect(languageInput.value).toBe("somebody")
  })
})
