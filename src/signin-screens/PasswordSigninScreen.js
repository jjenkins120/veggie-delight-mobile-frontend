import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const PasswordSignInScreen = () => {
    const { login } = useContext(UserContext)

    return (
        <FormView>
            <Text>Password Sign In Screen</Text>
            <Form 
                placeholder='Password'
                title='Login'
                onPress={login}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen