import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const EmailSignUpScreen = () => {
    const { addEmail } = useContext(EntryContext)

    return (
        <FormView>
            <Text>Email Sign up Screen</Text>
            <Form 
                placeholder='Email'
                title='Continue'
                onPress={addEmail}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
   
})

export default EmailSignUpScreen