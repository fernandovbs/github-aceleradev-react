import React from 'react';
import { cleanup, within } from 'react-testing-library';

import { renderWithRedux, initialState } from '../Helpers/testUtils';
import TimeLineListItem from '../Components/TimeLineListItem/TimeLineListItem';

afterEach(cleanup);

describe('Test TimeLineListItem component', () => {
    it('Should render repositories list for the year of 2019', () => {
        const { container } = renderWithRedux(<TimeLineListItem year={2019} repositories={initialState.repositories.repositories}/>);

        const repositoriesList = container.querySelector('.vertical-timeline-element--education');
        const repositoriesListItems = within(repositoriesList).getAllByTestId('timeline-item');
    
        expect(repositoriesListItems.length).toBe(3);    
    });
});