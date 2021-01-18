import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const HowFarSignUpScreen = () => {
    const { addHowFar } = useContext(EntryContext)
    
    return (
        <FormView>
            <Text>How Far Sign up</Text>
            <Form 
                placeholder='How far would you travel?'
                title='Continue'
                onPress={addHowFar}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default HowFarSignUpScreen