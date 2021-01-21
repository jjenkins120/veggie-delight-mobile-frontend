import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const BirthDateSignupScreen = () => {
    const { addBirthDate } = useContext(EntryContext)

    return (
        <FormView>
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