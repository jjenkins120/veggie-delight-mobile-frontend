import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const EmailSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Email Sign up Screen</Text>
            <AppButton 
                title='Continue'
                onPress={()=> navigation.navigate('PasswordSignup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignUpScreen