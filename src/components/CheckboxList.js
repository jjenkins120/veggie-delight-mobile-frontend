import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Checkbox } from 'react-native-elements'
import FormView from './FormView'
import AppButton from './AppButton'

const CheckboxList = ({ title, onPress, inputArray }) => {
    const [state, setState] = useState({})

    useEffect(()=> {
        inputArray.forEach(input => 
            setState(state[input] = false)
        )
    }, [])


    const renderCheckbox = inputArray => {
        return inputArray.map(input => {
            return <Checkbox 
                title={input}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={state.input}
                onPress={() => setState({...state, input: !state.input})}
            />
        })
    }
    
    // const selectionArray = state.filter(input => input[true])
    
    return (
        <FormView>
            {renderCheckbox(inputArray)}
            <AppButton
                title={title}
                onPress={() => onPress(selectionArray)}
            />
        </FormView> 
    )
}

const styles = StyleSheet.create({

})

export default CheckboxList