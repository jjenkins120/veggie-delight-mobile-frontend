import React, { useEffect, useState } from 'react'
import {StyleSheet, View} from 'react-native'
import { Input, Text } from 'react-native-elements'
import AppButton from './AppButton'

const FormPassword = ({ placeholder, secondPlaceholder, title, onPress }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pwdErrorMessage, setPwdErrorMessage] = useState('')

    useEffect(() => {
    (!password  && !confirmPassword ) ? setPwdErrorMessage(null) : null
    }, [password])
    
    const pressValidation = () => {
        if (!password && !confirmPassword){
            setPwdErrorMessage('Field cannot be empty')
        } else if (password !== confirmPassword){
            setPwdErrorMessage('Passwords do not match')
        } else {
            onPress(password)
        }
    }

    return (
        <View style={styles.container}>
            {pwdErrorMessage ? <Text style={styles.pwdErrorMessage}>{pwdErrorMessage}</Text> : null}
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
                onPress={pressValidation}
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
    pwdErrorMessage: {
        textAlign: 'center',
        color: 'red', 
        fontWeight: 'bold' 
    }
})

export default FormPassword