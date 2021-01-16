import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const PreferencesSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Preferences Sign up</Text>
            <Form placeholder='Preferences'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default PreferencesSignUpScreen