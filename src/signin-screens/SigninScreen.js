import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Signin Screen</Text>
            <AppButton 
                title='Sign in with Google'
                onPress={() => navigation.navigate('GoogleSignin')}
            />
            <AppButton 
                title='Sign in with email'
                onPress={() => navigation.navigate('EmailSignin')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen