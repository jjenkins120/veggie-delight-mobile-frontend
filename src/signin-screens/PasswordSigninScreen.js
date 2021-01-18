import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import useSigninLogin from '../hooks/useSigninLogin'

const PasswordSignInScreen = () => {

    return (
        <FormView>
            <Text>Password Sign In Screen</Text>
            <Form 
                placeholder='Password'
                title='Login'
                onPress={useSigninLogin}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen