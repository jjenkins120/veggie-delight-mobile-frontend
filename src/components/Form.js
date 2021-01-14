import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Input } from 'react-native-elements'
import { shouldUseActivityState } from 'react-native-screens'

const Form = ({ placeholder }) => {
    
    if (placeholder === 'Password' || placeholder === 'Confirm Password'){
        return (
            <View style={styles.container}>
                <Input
                    placeholder={placeholder}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Input
                    placeholder={placeholder}
                    secureTextEntry={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    }, 
    form: {
        
    }
})

export default Form