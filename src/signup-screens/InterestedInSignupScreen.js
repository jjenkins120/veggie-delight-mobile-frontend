import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as AuthContext } from '../context/AuthContext'

const InterestedInSignUpScreen = () => {
    const { createUser } = useContext(AuthContext)

    return (
        <FormView>
            <Text>Interested In Sign Up Screen</Text>
            <Form 
                placeholder='Interested In?'
                title='Continue'
                onPress={createUser}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen