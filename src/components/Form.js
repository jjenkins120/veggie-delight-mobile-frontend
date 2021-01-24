import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'
import { Input, Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import AppButton from './AppButton'

const Form = ({ placeholder, title, onPress }) => {
    const [input, setInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={() => setErrorMessage('')}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Input
                placeholder={placeholder}
                secureTextEntry={false}
                autoCapitalize='none'
                autoCorrect={false}
                value={input}
                onChangeText={setInput}
            />
            <AppButton 
                title={title}
                onPress={input ? () => onPress(input) : () => setErrorMessage('Field cannot be empty')}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    }, 
    form: {
        
    }
})

export default Form