import React from 'react'
import { within, waitForElement, cleanup } from 'react-testing-library'

import { renderWithRedux, initialState } from '../Helpers/testUtils'
import HomeScreen from '../HomeScreen'

afterEach(cleanup)

it('HomeScreen renders Navbar with redux defaults', () => {
    const { getByTestId } = renderWithRedux(<HomeScreen />)

    const homeScreen = getByTestId('home-screen')
    const navBarInHomeScreen = within(homeScreen).getAllByTestId('navbar')
    expect(navBarInHomeScreen.length).toBe(1);

})

it('HomeScreen renders RepositoriesList', async () => {

    const { getByTestId } = renderWithRedux(<HomeScreen />, {initialState: initialState})

    const repositoriesList = await waitForElement(() => getByTestId('timeline'))
    const repositoriesListItems = within(repositoriesList).getAllByTestId('timeline-item')

    expect(repositoriesListItems.length).toBe(3);
})
