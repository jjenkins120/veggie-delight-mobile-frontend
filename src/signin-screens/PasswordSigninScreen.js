import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { NavigationEvents } from 'react-navigation'
import useSigninLogin from '../hooks/useSigninLogin'
import { Context as AuthContext } from '../context/AuthContext'

const PasswordSignInScreen = () => {
    const [signinLogin] = useSigninLogin()
    const { state: { errorMessage }, clearErrorMessage } = useContext(AuthContext)

    return (
        <FormView>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
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