import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const PasswordSignUpScreen = () => {
    const { addPassword } = useContext(UserContext)

    return (
        <FormView>
            <Text>Password Sign Up Screen</Text>
            <Form 
                placeholder='Password'
                title='Continue'
                onPress={addPassword}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
    
})

export default PasswordSignUpScreen