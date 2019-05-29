import React from 'react';
import { cleanup, within, fireEvent } from 'react-testing-library';

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


    it('Should hide repositories list for the year of 2019', () => {
        const { container } = renderWithRedux(<TimeLineListItem year={2019} repositories={initialState.repositories.repositories}/>);

        const repositoriesListIcon = container.querySelector('.vertical-timeline-element-icon');        
        
        fireEvent.click(repositoriesListIcon);

        const repositoriesListItems = container.querySelectorAll('.vertical-timeline-element-subtitle');    
        expect(repositoriesListItems.length).toBe(0);    
    });    
    
});