import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const InterestedInSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Interested In Sign Up Screen</Text>
            <Form placeholder='Interests'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('PreferencesSignup')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen