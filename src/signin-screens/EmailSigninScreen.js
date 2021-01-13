import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const EmailSignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Email Sign In Screen</Text>
            <AppButton 
                title='Continue'
                onPress={() => navigation.navigate('PasswordSignin') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default EmailSignInScreen