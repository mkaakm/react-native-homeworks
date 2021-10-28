import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/shared/Button'

test('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});
