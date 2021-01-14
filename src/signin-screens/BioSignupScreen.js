import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const BioSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Bio Sign Up Screen</Text>
            <Form placeholder='Bio'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('HowFarSignup')}
            />

        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default BioSignUpScreen