import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as UserContext } from '../context/UserContext'

const VeggieTypeSignupScreen = () => {
    const { addVeggieType } = useContext(UserContext)

    return (
        <FormView>
            <Text>Veggie Type Sign up</Text>
            <Form
                placeholder='What is your veggie type?'
                title='Continue'
                onPress={addVeggieType}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default VeggieTypeSignupScreen