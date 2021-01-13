import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const PasswordSignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Password Sign Up Screen</Text>
            <AppButton 
                title='Continue'
                onPress={() => navigation.navigate('BioSignup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default PasswordSignUpScreen