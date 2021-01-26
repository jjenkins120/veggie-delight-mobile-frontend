import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInAgeSignupScreen = () => {
    const { addInterestedInAge } = useContext(EntryContext)

    return (
        <FormView>
            <Form 
                placeholder='Interested in Age' 
                title='Continue' 
                onPress={addInterestedInAge}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInAgeSignupScreen