import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const VeggieTypeSignupScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Veggie Type Sign up</Text>
            <Form placeholder='What is your veggie type?'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('BioSignup')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default VeggieTypeSignupScreen