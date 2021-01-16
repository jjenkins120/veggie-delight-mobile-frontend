import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const HowFarSignUpScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>How Far Sign up</Text>
            <Form placeholder='How far would you travel?'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('InterestedInSignup')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default HowFarSignUpScreen