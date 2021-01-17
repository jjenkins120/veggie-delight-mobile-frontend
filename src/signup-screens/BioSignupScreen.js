import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const BioSignUpScreen = () => {
    const { addBio } = useContext(UserContext)

    return (
        <FormView>
            <Text>Bio Sign Up Screen</Text>
            <Form 
                placeholder='Bio'
                title='Continue'
                onPress={addBio}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default BioSignUpScreen