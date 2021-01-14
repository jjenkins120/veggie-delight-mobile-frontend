import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const EmailSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Email Sign up Screen</Text>
            <Form placeholder='Email'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('PasswordSignup')}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
   
})

export default EmailSignUpScreen