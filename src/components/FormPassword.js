import React, { useEffect, useState } from 'react'
import {StyleSheet, View} from 'react-native'
import { Input, Text } from 'react-native-elements'
import AppButton from './AppButton'

const FormPassword = ({ placeholder, secondPlaceholder, title, onPress }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
    if (password==="" && confirmPassword === ""){
        return () => setErrorMessage(null)
    }}, [password])
    
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Input
                placeholder={placeholder}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
            />
            <Input
                placeholder={secondPlaceholder}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <AppButton 
                title={title}
                onPress={password === confirmPassword ? () => onPress(password) : () => setErrorMessage('Passwords do not match')}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    }, 
    form: {
        
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red', 
        fontWeight: 'bold' 
    }
})

export default FormPassword