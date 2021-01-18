import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const EmailSignInScreen = () => {
    const { signinEmail } = useContext(EntryContext)

    return (
        <FormView>
            <Text>Email Sign In Screen</Text>
            <Form 
                placeholder='Email' 
                title='Continue' 
                onPress={signinEmail}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignInScreen