import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'
import Form from '../components/Form'

const BioSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Bio Sign Up Screen</Text>
            <Form placeholder='Bio'/>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('InterestedInSignup')}
            />

        </View>
    )
}

const styles = StyleSheet.create({

})

export default BioSignUpScreen