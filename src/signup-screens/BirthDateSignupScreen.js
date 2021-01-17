import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext} from '../context/UserContext'

const BirthDateSignupScreen = () => {
    const { addBirthDate } = useContext(UserContext)

    return (
        <FormView>
            <Text>Birth Date Sign up Screen</Text>
            <Form 
                placeholder='Birth Date' 
                title='Continue' 
                onPress={addBirthDate}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default BirthDateSignupScreen