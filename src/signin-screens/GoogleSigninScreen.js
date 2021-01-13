import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Google Sign In Screen</Text>
            <AppButton
                title='Sign In'
                onPress={() => navigation.navigate('tabFlow') }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen