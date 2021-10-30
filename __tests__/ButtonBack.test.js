import React from 'react';
import renderer from 'react-test-renderer';
import ButtonBack from '../src/shared/ButtonBack'
import {StyleSheet} from 'react-native';


test('renders correctly', () => {
    const tree = renderer.create(<ButtonBack style={styles.buttonBack}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

const styles = StyleSheet.create({
    buttonBack:{
        textAlign:"center"
    }
})
