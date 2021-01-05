import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const SigninScreen = () => {
    return (
        <View>
            <Text>Signup Screen</Text>
            <Button>Sign in with Google</Button>
            <Button>Sign in with email</Button>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen