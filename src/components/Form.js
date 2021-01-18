import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'
import { Input } from 'react-native-elements'
import AppButton from './AppButton'

const Form = ({ placeholder, title, onPress }) => {
    const [input, setInput] = useState('')
    
    return (
        <View style={styles.container}>
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
                onPress={() => onPress(input)}
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