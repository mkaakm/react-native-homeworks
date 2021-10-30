import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/shared/Button'
import {StyleSheet} from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

test('renders correctly', () => {
    const tree = renderer.create(<Button text='button' style={styles.button}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('onPress button correctly', () => {
    const mockedHandler = jest.fn();
    const {getByText} = render(<Button onPress={mockedHandler} text='button'/>);

    fireEvent.press(getByText('button'), 'fire');
    expect(mockedHandler).toHaveBeenCalledWith('fire');
});

const styles = StyleSheet.create({
    button:{
        textAlign:"center"
    }
})
