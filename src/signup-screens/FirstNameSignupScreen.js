import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as AuthContext} from '../context/AuthContext'

const FirstNameSignupScreen = () => {
    const { addFirstName } = useContext(AuthContext)

    return (
        <FormView>
            <Text>First Name Sign up Screen</Text>
            <Form 
                placeholder='First Name' 
                title='Continue' 
                onPress={addFirstName}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default FirstNameSignupScreen