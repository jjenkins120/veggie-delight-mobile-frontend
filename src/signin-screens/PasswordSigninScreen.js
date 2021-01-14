import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'
import FormView from '../components/FormView'

const PasswordSignInScreen = ({ navigation }) => {
    return (
        <FormView>
            <Text>Password Sign In Screen</Text>
            <Form placeholder='Password'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('tabFlow') }
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default PasswordSignInScreen