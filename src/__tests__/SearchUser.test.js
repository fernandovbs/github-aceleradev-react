import React from 'react';
import { within, waitForElement, cleanup, fireEvent } from 'react-testing-library';

import { renderWithRedux } from '../Helpers/testUtils';
import SearchUser from '../Components/Search/SearchUser';

afterEach(cleanup);

describe('Test SearchUser component', () => {
//    const setSearchString = jest.fn();
//    const useStateSpy = jest.spyOn(React, 'useState')
//    useStateSpy.mockImplementation((searchString) => [searchString, setSearchString]);

    it('Rende SearchUser correctly', () => {
        const { getByTestId, container } = renderWithRedux(<SearchUser />);
    
        const searchInput = getByTestId('search-input');

        fireEvent.change(searchInput, { target: { value: 'somebody' } });
        expect(searchInput.value).toBe('somebody');
        fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });

        expect(searchInput.value).toBe('');
        //expect(setSearchString).toHaveBeenCalledWith('somebody');
        //expect(container.state('searchString')).toEqual('somebody');
    });
});
