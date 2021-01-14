import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const EmailSignInScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Email Sign In Screen</Text>
            <Form placeholder='Email'/>
            <AppButton 
                title='Continue'
                onPress={() => navigation.navigate('PasswordSignin') }
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignInScreen