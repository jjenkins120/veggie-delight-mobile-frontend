import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import useSignupLogin from '../hooks/useSignupLogin'
import { Context as EntryContext } from '../context/EntryContext'

const InterestedInSignUpScreen = () => {
    const [loginErrorMessage, setLoginErrorMessage] = useState('')
    const [signupLogin] = useSignupLogin()
    const { state: { email, password } } = useContext(EntryContext)

    return (
        <FormView>
            <Text>{loginErrorMessage}</Text>
            <Form 
                placeholder='Interested In?'
                title='Continue'
                onPress={ email && password ? signupLogin : () => setLoginErrorMessage('Incomplete Profile. Please Re-enter information')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen