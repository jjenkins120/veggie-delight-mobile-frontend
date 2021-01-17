import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const InterestedInSignUpScreen = () => {
    const { createUser } = useContext(UserContext)
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