import React from 'react';
import { cleanup, render } from 'react-testing-library';

import User from '../Components/User/User';

afterEach(cleanup);

describe('Test User component', () => {
    it('Should render user', () => {
        const { getByTestId } = render(
        <User user={{
                html_url: '#',
                avatar_url: '#',
                login: 'somebody'
            }}
        />);

        expect(getByTestId('user')).toHaveTextContent('somebody');    
    });    
});