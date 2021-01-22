import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const BioSignUpScreen = () => {
    const { addBio } = useContext(EntryContext)

    return (
        <FormView>
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