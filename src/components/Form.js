import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Input } from 'react-native-elements'

const Form = ({ placeholder }) => {
    
    const secure = () => {
        if (placeholder === 'Password' || placeholder === 'Confirm Password'){
            return true
        } else {
            return false
        }
    }

    return (
        <View>
            <Input
                placeholder={placeholder}
                // secureTextEntry={secure}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Form