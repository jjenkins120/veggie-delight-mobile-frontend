import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const ProfileImageSignupScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Profile Img Sign up</Text>
            <Form placeholder='Profile Img Url'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('VeggieTypeSignup')}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default ProfileImageSignupScreen