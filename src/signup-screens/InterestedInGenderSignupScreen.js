import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInGenderSignupScreen = () => {
    const { addInterestedInGender } = useContext(EntryContext)

    return (
        <FormView>
            <Form 
                placeholder='Interested in Gender' 
                title='Continue' 
                onPress={addInterestedInGender}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInGenderSignupScreen