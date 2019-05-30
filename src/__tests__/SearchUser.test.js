import React from "react"
import { cleanup, fireEvent } from "react-testing-library"
import SearchUser from "../Components/Search/SearchUser"
import { initialState, renderWithRedux } from "../Helpers/testUtils"

afterEach(cleanup)

describe("Test SearchUser component", () => {
  const { getByTestId } = renderWithRedux(<SearchUser />)
  const searchInput = getByTestId("search-input")

  it("Should render SearchUser with searchString", () => {
    fireEvent.change(searchInput, { target: { value: "somebody" } })
    expect(searchInput.value).toBe("somebody")
  })

  it("Should preserve searchString when hit search", () => {
    fireEvent.keyDown(searchInput, {
      key: "Enter",
      code: 13,
      keyCode: 13,
      charCode: 13
    })
    expect(searchInput.value).toBe("somebody")
  })

  it("Should render users suggestions", () => {
    const { container } = renderWithRedux(<SearchUser />, {
      initialState: initialState
    })
    const usersList = container.querySelectorAll("#userDiv")

    expect(usersList.length).toBe(7)
  })

  it("Should focus user suggestion when keyDown", () => {
    const { getByTestId, container } = renderWithRedux(<SearchUser />, {
      initialState: initialState
    })

    const usersList = container.querySelectorAll("#userDiv")
    const searchInput = getByTestId("search-input")
    fireEvent.change(searchInput, { target: { value: "somebody" } })
    fireEvent.keyDown(searchInput, {
      key: "Arrow",
      code: 40,
      keyCode: 40,
      charCode: 40
    })
    fireEvent.keyDown(document.activeElement, {
      key: "Arrow",
      code: 40,
      keyCode: 40,
      charCode: 40
    })
    fireEvent.keyDown(document.activeElement, {
      key: "Arrow",
      code: 40,
      keyCode: 40,
      charCode: 40
    })

    expect(document.activeElement).toEqual(usersList[2])
  })
})
