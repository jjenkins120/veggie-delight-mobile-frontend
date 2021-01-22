import React from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import useSigninLogin from '../hooks/useSigninLogin'

const PasswordSignInScreen = () => {
    const [signinLogin] = useSigninLogin()

    return (
        <FormView>
            <Form 
                placeholder='Password'
                title='Login'
                onPress={signinLogin}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen