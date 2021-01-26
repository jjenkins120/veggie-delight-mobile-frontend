import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const GenderSignupScreen = () => {
    const { addGender } = useContext(EntryContext)

    return (
        <FormView>
            <Form 
                placeholder='Gender' 
                title='Continue' 
                onPress={addGender}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default GenderSignupScreen