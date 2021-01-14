import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const PasswordSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Password Sign Up Screen</Text>
            <Form placeholder='Password'/>
            <Form placeholder='Confirm Password'/>
            <AppButton 
                title='Continue'
                onPress={() => navigation.navigate('ProfileImageSignup')}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
    
})

export default PasswordSignUpScreen