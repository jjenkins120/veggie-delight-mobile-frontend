import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInLocationSignupScreen = () => {
    const { addInterestedInLocation } = useContext(EntryContext)

    return (
        <FormView>
            <Form 
                placeholder='Interested in Location' 
                title='Continue' 
                onPress={addInterestedInLocation}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInLocationSignupScreen