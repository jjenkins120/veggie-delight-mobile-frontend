import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import FormView from './FormView'
import AppButton from './AppButton'

const CheckBoxList = ({ title, onPress, inputArray }) => {
    const [state, setState] = useState([])

    const renderCheckBox = array => {
        return array.map(input => {
            return <CheckBox 
                title={input}
                key={input}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={state.includes(input)}
                onPress={state.includes(input) ? () => setState(state.filter(element => element !== input )) : () => setState([...state, input])}
            />
        })
    }
    
    
    return (
        <FormView>
            {renderCheckBox(inputArray)}
            <AppButton
                title={title}
                onPress={() => onPress(state)}
            />
        </FormView> 
    )
}

const styles = StyleSheet.create({

})

export default CheckBoxList