import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

//Snap Test
it('renders Card component correctly', () => {
    const props = {
        caption: 'Test Caption',
        src: 'test.jpg',
        currNum: '1',
        totalNum: 2
    }

    const { container } = render(<Card {...props} />)
    expect(container).toMatchSnapshot()
})

// Smoke Test
it('renders Card component without crashing', () => {
    const props = {
        caption: 'Test Caption',
        src: 'test.jpg',
        currNum: '1',
        totalNum: 2
    }

    render(<Card {...props} />)
})