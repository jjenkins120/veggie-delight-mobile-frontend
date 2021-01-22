import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const FirstNameSignupScreen = () => {
    const { addFirstName } = useContext(EntryContext)

    return (
        <FormView>
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