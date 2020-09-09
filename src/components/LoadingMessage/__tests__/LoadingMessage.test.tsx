import React from 'react';
import { render } from '@testing-library/react';

import LoadingMessage from '../LoadingMessage';

describe('LoadingMessage', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<LoadingMessage/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should renders correctly with default text', () => {
        const { getByText, getByRole } = render(<LoadingMessage/>);
        getByText('Загрузка данных...');

        const indicator = getByRole('progressbar');
        expect(indicator).toHaveStyle('width: 22px; height: 22px');
    });

    it('should renders correctly with custom text', () => {
        const { getByText } = render(<LoadingMessage text="Custom Text"/>);
        getByText('Custom Text');
    });

    it('should renders correctly with custom size', () => {
        const { getByRole } = render(<LoadingMessage size={10}/>);

        const indicator = getByRole('progressbar');
        expect(indicator).toHaveStyle('width: 10px; height: 10px');
    });
})
